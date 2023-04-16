document.addEventListener('DOMContentLoaded', function () {

    // Tabs tabs
    let tabs = CoreUI.tabs.create({
        title: "Component tabs",
        subtitle: "CoreUI Framework",
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
    });

    tabs.render('example-tabs-content');
    tabs.on('click-tab.coreui.tabs', function (tab, event) {
        tabs.setContent('Tab ' + tab.title);
    });


    // Pills tabs
    let tabsPills = CoreUI.tabs.create({
        tabsType: 'pills',
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsPills.render('example-pills-content');
    tabsPills.on('click-tab.coreui.tabs', function (tab, event) {
        tabsPills.setContent('Tab ' + tab.title);
    })


    // underline tabs
    let tabsUnderline = CoreUI.tabs.create({
        tabsType: 'underline',
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsUnderline.render('example-underline-content');
    tabsUnderline.on('click-tab.coreui.tabs', function (tab, event) {
        tabsUnderline.setContent('Tab ' + tab.title);
    });


    // fill
    let tabsFill = CoreUI.tabs.create({
        tabsType: 'tabs',
        tabsFill: 'fill',
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsFill.render('example-fill-content');
    tabsFill.on('click-tab.coreui.tabs', function (tab, event) {
        tabsJustify.setContent('Tab ' + tab.title);
    });

    // justify
    let tabsJustify = CoreUI.tabs.create({
        tabsType: 'tabs',
        tabsFill: 'justified',
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsJustify.render('example-justify-content');
    tabsJustify.on('click-tab.coreui.tabs', function (tab, event) {
        tabsJustify.setContent('Tab ' + tab.title);
    });


    // Positions left
    let tabsLeft = CoreUI.tabs.create({
        tabsPosition: 'left',
        tabsWidth: 200,
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsLeft.render('example-pos-left-content');
    tabsLeft.on('click-tab.coreui.tabs', function (tab, event) {
        tabsLeft.setContent('Tab ' + tab.title);
    });


    // Positions left sideways
    let tabsLeftSideways = CoreUI.tabs.create({
        tabsPosition: 'left-sideways',
        tabsWidth: 65,
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true}
        ],
        content: [ "Tab Home" ]
    });

    tabsLeftSideways.render('example-pos-left-sideways-content');
    tabsLeftSideways.on('click-tab.coreui.tabs', function (tab, event) {
        tabsLeftSideways.setContent('Tab ' + tab.title);
    });


    // Positions right
    let tabsRight = CoreUI.tabs.create({
        tabsPosition: 'right',
        tabsWidth: 200,
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "4", title: "Tab title 4", disabled: true},
                    {id: "5", title: "Tab title 5", active: false},
                    {type: "divider"},
                    {id: "6", title: "Tab title 6", active: false}
                ]
            }
        ],
        content: [ "Tab Home" ]
    });

    tabsRight.render('example-pos-right-content');
    tabsRight.on('click-tab.coreui.tabs', function (tab, event) {
        tabsRight.setContent('Tab ' + tab.title);
    });



    // Positions right sideways
    let tabsRightSideways = CoreUI.tabs.create({
        tabsPosition: 'right-sideways',
        tabsWidth: 25,
        tabs: [
            {id: "1", title: "Home", active: true},
            {id: "2", title: "Profile", active: false},
            {id: "3", title: "Disabled", disabled: true},
        ],
        content: [ "Tab Home" ]
    });

    tabsRightSideways.render('example-pos-right-sideways-content');
    tabsRightSideways.on('click-tab.coreui.tabs', function (tab, event) {
        tabsRightSideways.setContent('Tab ' + tab.title);
    });


    // Ajax tabs
    let tabsAjax = CoreUI.tabs.create({
        id: "ajax",
        title: "Component tabs",
        subtitle: "CoreUI Framework",
        tabs: [
            {id: "tab1", title: "Home", active: true, url: "data/tab1.txt"},
            {id: "tab2", title: "Profile", active: false, url: "data/tab2.json"},
            {id: "tab3", title: "Disabled", disabled: true},
            {
                title: "Dropdown",
                type: "dropdown",
                items: [
                    {id: "tab4", title: "Tab title 3", disabled: true},
                    {id: "tab5", title: "Tab title 4", active: false, url: "data/tab3.json"},
                    {type: "divider"},
                    {id: "tab6",title: "Tab title 5", active: false, url: "data/tab4.json"}
                ]
            }
        ],
        content: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui."
    });

    tabsAjax.render('example-ajax-content');
    tabsAjax.on('click-tab.coreui.tabs', function (tab, event) {
        console.log(tab.id + ' ' + 'click-tab.coreui.tabs')
    });
    tabsAjax.on('start-load-content.coreui.tabs', function (tab, xhr) {
        console.log(tab.id + ' ' + 'start-load-content.coreui.tabs')
    });
    tabsAjax.on('success-load-content.coreui.tabs', function (tab, result) {
        console.log(tab.id + ' ' + 'success-load-content.coreui.tabs')
    });
    tabsAjax.on('error-load-content.coreui.tabs', function (tab, xhr, textStatus, errorThrown ) {
        console.log(tab.id + ' ' + 'error-load-content.coreui.tabs')
    });
    tabsAjax.on('end-load-content.coreui.tabs', function (tab, xhr) {
        console.log(tab.id + ' ' + 'end-load-content.coreui.tabs')
    });


    // Code highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});