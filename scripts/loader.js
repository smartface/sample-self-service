/* globals lang */
const TabBarItem = require("sf-core/ui/tabbaritem");
const Image = require("sf-core/ui/image");
const Navigator = require("sf-core/ui/navigator");
const BottomTabBar = require("sf-core/ui/bottomtabbar");
const Color = require("sf-core/ui/color");
const settings = require("./settings.json");
const Router = require("sf-core/ui/router");
const Data = require('sf-core/data');
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");




BottomTabBar.$$styleContext = {
    classNames: ".bottomtabbar",
    userProps: {}
};

global.tabBar = null;
exports.load = function load() {
    // if (tabBar) {
    //     tabBar.setIndex("profile");
    //     return true;
    // }

    //var itemColor = Color.create((Data.getStringVariable("theme") === "Style1" ? "#1775D0" : "#FFFFFF"));
    global.tabBar = new BottomTabBar();
    global.tabBar.children = {};
    var profileNavigator = new Navigator();
    profileNavigator.add("index", require("./pages/tabs/profile"));
    profileNavigator.add("profileDetail", require("./pages/tabs/profile/pgProfileDetail"));
    profileNavigator.go("index");
    global.tabBar.children["profile"] = new TabBarItem({
        title: lang["tab.profile"],
        icon: Image.createFromFile("images://icon_tab_profile.png"),
        route: profileNavigator
    });

    var hrNavigator = new Navigator();
    hrNavigator.add("index", require("./pages/tabs/hr"));
    hrNavigator.add("newExpense", require("./pages/tabs/hr/pgNewExpense"));
    hrNavigator.add("newLeaveRequest", require("./pages/tabs/hr/pgNewLeaveRequest"));
    hrNavigator.add("leaveApprovalDetail", require("./pages/tabs/hr/pgLeaveApprovalDetail"));
    hrNavigator.add("expenseApprovalDetail", require("./pages/tabs/hr/pgExpenseApprovalDetail"));
    hrNavigator.go("index");
    global.tabBar.children["hr"] = new TabBarItem({
        title: lang["tab.HR"],
        icon: Image.createFromFile("images://icon_tab_hr.png"),
        route: hrNavigator
    });

    var chatbotNavigator = new Navigator();
    chatbotNavigator.add("index", require("./pages/tabs/chatbot"));
    chatbotNavigator.add("chatbotPg", require("./pages/tabs/chatbot/chatbotPg"));
    chatbotNavigator.go("index");

    global.tabBar.children["chatbot"] = new TabBarItem({
        title: lang["tab.chatbot"],
        icon: Image.createFromFile("images://messageicon.png"),
        route: chatbotNavigator
    })

    var myCompanyNavigator = new Navigator();
    myCompanyNavigator.add("index", require("./pages/tabs/myCompany"));
    myCompanyNavigator.add("documentDetail", require("./pages/tabs/myCompany/pgDocumentDetail"));
    myCompanyNavigator.go("index");
    global.tabBar.children["myCompany"] = new TabBarItem({
        title: lang["tab.myCompany"],
        icon: Image.createFromFile("images://icon_tab_mycompany.png"),
        route: myCompanyNavigator
    });

    var settingsNavigator = new Navigator();
    settingsNavigator.add("index", require("./pages/tabs/settings/pgSettings"));
    settingsNavigator.go("index");
    global.tabBar.children["settings"] = new TabBarItem({
        title: lang["tab.settings"],
        icon: Image.createFromFile("images://icon_tab_settings.png"),
        route: settingsNavigator
    });

    componentContextPatch(global.tabBar, "bottomtabbar");

    global.tabBar.add("profile", global.tabBar.children["profile"]);
    global.tabBar.add("hr", global.tabBar.children["hr"]);
    global.tabBar.add("myCompany", global.tabBar.children["myCompany"]);
    global.tabBar.add("chatbot", global.tabBar.children["chatbot"]);
    global.tabBar.add("settings", global.tabBar.children["settings"]);

    global.tabBar.setIndex("profile");
    
    Router.add("tabs", global.tabBar);

    return true;
};
