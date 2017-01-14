<?php
namespace CoreUI;
use CoreUI\Tabs\classes\ComboTab;
use CoreUI\Utils\Mtpl;

require_once 'classes/ComboTab.php';


/**
 * Class Tabs
 * @package CoreUI
 */
class Tabs {

    const POSITION_TOP    = 1;
    const POSITION_LEFT   = 2;
    const POSITION_RIGHT  = 3;
    const POSITION_BOTTOM = 4;

    const TYPE_TABS  = 10;
    const TYPE_PILLS = 20;

    protected $active_tab      = '';
    protected $content         = '';
    protected $resource        = '';
    protected $url             = '';
    protected $tabs            = array();
    protected $theme_src       = '';
    protected $theme_location  = '';
    protected $position        = self::POSITION_TOP;
    protected $type            = self::TYPE_TABS;

    protected static $added_script = false;


    /**
     * @param string $resource
     * @param string $url
     */
    public function __construct($resource, $url) {

        $this->resource = $resource;

        if (isset($_GET[$this->resource])) {
            $this->active_tab = $_GET[$this->resource];
        }
    }


    /**
     * Установка позиции
     * @param  int $position
     * @throws Exception
     */
    public function setPosition($position) {

        $positions = array(
            self::POSITION_TOP,
            self::POSITION_LEFT,
            self::POSITION_RIGHT,
            self::POSITION_BOTTOM
        );

        if (in_array($position, $positions)) {
            $this->position = $position;
        } else {
            throw new Exception('Invalid position');
        }
    }


    /**
     * Установка типа
     * @param  int $type
     * @throws Exception
     */
    public function setType($type) {

        $types = array(
            self::TYPE_TABS,
            self::TYPE_PILLS
        );

        if (in_array($type, $types)) {
            $this->type = $type;
        } else {
            throw new Exception('Invalid type');
        }
    }


    /**
     * Добавление таба
     * @param string $title
     * @param string $id
     * @param string $url
     * @param bool   $disabled
     */
    public function addTab($title, $id, $url, $disabled = false) {
        $this->tabs[] = array(
            'title'    => $title,
            'id'       => $id,
            'url'      => $url,
            'disabled' => $disabled
        );
    }


    /**
     * Добавление комбо таба
     * @param  string   $title
     * @param  bool     $is_disabled
     * @return ComboTab
     */
    public function addComboTab($title, $is_disabled = false) {
        $combo_tab = new ComboTab($title, $is_disabled);
        $this->tabs[] = $combo_tab;
        return $combo_tab;
    }


    /**
     * Установка содержимого для таба
     * @param string $content
     */
    public function setContent($content) {
        $this->content = $content;
    }


    /**
     * Получение идентификатора активного таба
     * @return string
     */
    public function getActiveTab() {

        if ($this->active_tab == '' && ! empty($this->tabs)) {
            reset($this->tabs);
            $tab = current($this->tabs);

            if ($tab instanceof ComboTab) {
                $elements = $tab->getElements();
                foreach ($elements as $element) {
                    if ($element['type'] == $tab::ELEMENT_ITEM) {
                        $this->active_tab = $element['id'];
                        break;
                    }
                }
            } else {
                $this->active_tab = $tab['id'];
            }
        }

        return $this->active_tab;
    }


    /**
     * Создание и возврат табов
     * @return string
     * @throws Exception
     */
    public function render() {

        if ( ! self::$added_script) {
            self::$added_script = true;
            $container_dir = substr(__DIR__, strlen($_SERVER['DOCUMENT_ROOT']));

            $scripts  = "<script src=\"{$container_dir}/html/js/tabs.js\"></script>";
            $scripts .= "<link rel=\"stylesheet\"  type=\"text/css\"  href=\"{$container_dir}/html/css/styles.css\"/>";

        } else {
            $scripts = '';
        }


        $result = $this->make();
        return $scripts . $result;
    }


    /**
     * Создание контейнера
     * @return string
     * @throws Exception
     */
    protected function make() {

        $tpl = new Mtpl(__DIR__ . '/html/template.html');
        $tpl->assign('[RESOURCE]', $this->resource);


        if ($this->position == self::POSITION_BOTTOM) {
            $tpl->content_top->assign('[CONTENT]', $this->content);
        } else {
            $tpl->content_bottom->assign('[CONTENT]', $this->content);
        }

        if ( ! empty($this->tabs)) {
            switch ($this->type) {
                case self::TYPE_TABS :  $type_name = 'tabs'; break;
                case self::TYPE_PILLS : $type_name = 'pills'; break;
                default : throw new Exception('Invalid type'); break;
            }
            $tpl->tabs->assign('[TYPE]', $type_name);

            switch ($this->position) {
                case self::POSITION_TOP :    $position_name = 'top'; break;
                case self::POSITION_LEFT :   $position_name = 'left'; break;
                case self::POSITION_RIGHT :  $position_name = 'right'; break;
                case self::POSITION_BOTTOM : $position_name = 'bottom'; break;
                default : throw new Exception('Invalid position'); break;
            }
            $tpl->tabs->assign('[POSITION]', $position_name);


            foreach ($this->tabs as $key => $tab) {
                if ($tab instanceof ComboTab) {
                    $combo_tab_class        = '';
                    $combo_tab_class_toggle = 'dropdown-toggle';

                    if ( ! $tab->isDisabled()) {
                        $elements = $tab->getElements();
                        if ( ! empty($elements)) {
                            foreach ($elements as $element) {
                                if ($element['type'] == $tab::ELEMENT_BREAK) {
                                    $tpl->tabs->elements->combo_tab->elements2->touchBlock('break');

                                } elseif ($element['type'] == $tab::ELEMENT_ITEM) {
                                    $url = $element['url'] . '&' . $this->resource . '=' . $element['id'];
                                    if ($element['disabled']) {
                                        $class = 'disabled';
                                        $url   = 'javascript:void(0);';
                                    } elseif ($this->active_tab == $element['id']) {
                                        $class = 'active';
                                        $combo_tab_class = 'active';
                                    } else {
                                        $class = '';
                                    }

                                    $tpl->tabs->elements->combo_tab->elements2->element->assign('[CLASS]', $class);
                                    $tpl->tabs->elements->combo_tab->elements2->element->assign('[TITLE]', $element['title']);
                                    $tpl->tabs->elements->combo_tab->elements2->element->assign('[URL]',   $url);
                                }
                                $tpl->tabs->elements->combo_tab->elements2->reassign();
                            }
                        }
                    } else {
                        $combo_tab_class        = 'disabled';
                        $combo_tab_class_toggle = '';
                    }

                    $tpl->tabs->elements->combo_tab->assign('[TITLE]',        $tab->getTitle());
                    $tpl->tabs->elements->combo_tab->assign('[CLASS]',        $combo_tab_class);
                    $tpl->tabs->elements->combo_tab->assign('[CLASS_TOGGLE]', $combo_tab_class_toggle);

                } else {
                    $url = $tab['url'] . '&' . $this->resource . '=' . $tab['id'];
                    if ($tab['disabled']) {
                        $class = 'disabled';
                        $url   = 'javascript:void(0);';
                    } elseif ($this->active_tab == $tab['id']) {
                        $class = 'active';
                    } else {
                        $class = '';
                    }

                    $tpl->tabs->elements->tab->assign('[CLASS]', $class);
                    $tpl->tabs->elements->tab->assign('[TITLE]', $tab['title']);
                    $tpl->tabs->elements->tab->assign('[URL]',   $url);
                }

                $tpl->tabs->elements->reassign();
            }
        }

        return $tpl->render();
    }
}