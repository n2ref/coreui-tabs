//HEAD 
window["CoreUI"]["tabs"]["tpl"] = {};

window["CoreUI"]["tabs"]["tpl"]["container.html"] = "<div class=\"text-center mb-3\" id=\"coreui-tabs-<%= id %>\">\n" +
    "    <div class=\"text-start\">\n" +
    "        <% if (title) { %>\n" +
    "        <h4><%- title %></h4>\n" +
    "        <% } %>\n" +
    "        <% if (subtitle) { %>\n" +
    "        <p class=\"text-muted\"><%- subtitle %></p>\n" +
    "        <% } %>\n" +
    "\n" +
    "        <% if (typeof tabs === 'object' && tabs.length > 0) { %>\n" +
    "            <% if (tabsPosition === 'top-left' || tabsPosition === 'top-center' || tabsPosition === 'top-right') { %>\n" +
    "            <%- tabsContent %>\n" +
    "\n" +
    "            <div class=\"coreui-tabs-content\">\n" +
    "                <%- renderContent %>\n" +
    "            </div>\n" +
    "\n" +
    "            <% } else if (tabsPosition === 'left' || tabsPosition === 'left-sideways') { %>\n" +
    "            <div class=\"d-flex\">\n" +
    "                <div class=\"me-3\" style=\"width: <%= tabsWidth %>px\"><%- tabsContent %></div>\n" +
    "\n" +
    "                <div class=\"coreui-tabs-content flex-grow-1\">\n" +
    "                    <%- renderContent %>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <% } else if (tabsPosition === 'right' || tabsPosition === 'right-sideways') { %>\n" +
    "            <div class=\"d-flex\">\n" +
    "                <div class=\"coreui-tabs-content flex-grow-1 pe-3\">\n" +
    "                    <%- renderContent %>\n" +
    "                </div>\n" +
    "                <div style=\"width: <%= tabsWidth %>px\"><%- tabsContent %></div>\n" +
    "            </div>\n" +
    "            <% } %>\n" +
    "\n" +
    "        <% } else { %>\n" +
    "        <div class=\"coreui-tabs-content\">\n" +
    "            <%- renderContent %>\n" +
    "        </div>\n" +
    "        <% } %>\n" +
    "    </div>\n" +
    "</div>"; 

window["CoreUI"]["tabs"]["tpl"]["tabs.html"] = "<% if (typeof tabs === 'object' && tabs.length > 0) { %>\n" +
    "<ul class=\"nav <% if (tabsType) { %>nav-<%= tabsType %><% } %> card-body-tabs mb-3 <% if (containerClasses) { %><%= containerClasses %><% } %>\n" +
    "           <% if (tabsFill) { %>nav-<%= tabsFill %><% } %>\">\n" +
    "    <% $.each(tabs, function(key, tab) { %>\n" +
    "        <% if (tab.type === 'tab') { %>\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a class=\"nav-link<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>\" href=\"<% if (tab.url) { %><%= tab.url %><% } else { %>#<% } %>\" data-tab-id=\"<%= tab.id %>\" data-bs-toggle=\"tab\"><%= tab.title %></a>\n" +
    "        </li>\n" +
    "        <% } %>\n" +
    "        <% if (tab.type === 'dropdown') { %>\n" +
    "        <li class=\"nav-item dropdown<% if (tab.active) { %> active<% } %><% if (tab.disabled) { %> disabled<% } %>\">\n" +
    "            <a class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\" href=\"#\">\n" +
    "                <%= tab.title %>\n" +
    "            </a>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "                <% $.each(tab.items, function(key, item) { %>\n" +
    "                    <% if (item.type === 'item') { %>\n" +
    "                    <li>\n" +
    "                        <a class=\"dropdown-item<% if (item.active) { %> active<% } %><% if (item.disabled) { %> disabled<% } %>\" href=\"<% if (item.url) { %><%= item.url %><% } else { %>#<% } %>\" data-bs-toggle=\"tab\" data-tab-id=\"<%= item.id %>\">\n" +
    "                            <%= item.title %>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <% } %>\n" +
    "                    <% if (item.type === 'divider') { %>\n" +
    "                    <li>\n" +
    "                        <hr class=\"dropdown-divider\">\n" +
    "                    </li>\n" +
    "                    <% } %>\n" +
    "                <% }) %>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <% } %>\n" +
    "    <% }) %>\n" +
    "</ul>\n" +
    "<% } %>"; 
// END 