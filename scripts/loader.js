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

var tabBar;
BottomTabBar.$$styleContext = {
    classNames: ".bottomtabbar",
    userProps: {}
};
exports.load = function load() {
    if (tabBar) {
        tabBar.setIndex("profile");
        return true;
    }

    //var itemColor = Color.create((Data.getStringVariable("theme") === "Style1" ? "#1775D0" : "#FFFFFF"));
    tabBar = new BottomTabBar();
    tabBar.children = {};
    var profileNavigator = new Navigator();
    profileNavigator.add("index", require("./pages/tabs/profile"));
    profileNavigator.add("profileDetail", require("./pages/tabs/profile/pgProfileDetail"));
    profileNavigator.go("index");
    tabBar.children["profile"] = new TabBarItem({
        title: lang["tab.profile"],
        icon: Image.createFromFile("images://icon_tab_profile.png"),
        route: profileNavigator
    });

    var hrNavigator = new Navigator();
    hrNavigator.add("index", require("./pages/tabs/hr"));
    hrNavigator.add("newExpense", require("./pages/tabs/hr/pgNewExpense"));
    hrNavigator.add("newLeaveRequest", require("./pages/tabs/hr/pgNewLeaveRequest"));
    hrNavigator.go("index");
    tabBar.children["hr"] = new TabBarItem({
        title: lang["tab.HR"],
        icon: Image.createFromFile("images://icon_tab_hr.png"),
        route: hrNavigator
    });

    var approvalNavigator = new Navigator();
    approvalNavigator.add("index", require("./pages/tabs/approvals"));
    approvalNavigator.add("leaveApprovalDetail", require("./pages/tabs/approvals/pgLeaveApprovalDetail"));
    approvalNavigator.add("expenseApprovalDetail", require("./pages/tabs/approvals/pgExpenseApprovalDetail"));
    approvalNavigator.go("index");

    tabBar.children["approvals"] = new TabBarItem({
        title: lang["tab.Approvals"],
        icon: Image.createFromFile("images://icon_tab_approvals.png"),
        route: approvalNavigator
    })

    var myCompanyNavigator = new Navigator();
    myCompanyNavigator.add("index", require("./pages/tabs/myCompany"));
    myCompanyNavigator.add("documentDetail", require("./pages/tabs/myCompany/pgDocumentDetail"));
    myCompanyNavigator.go("index");
    tabBar.children["myCompany"] = new TabBarItem({
        title: lang["tab.myCompany"],
        icon: Image.createFromFile("images://icon_tab_mycompany.png"),
        route: myCompanyNavigator
    });

    var settingsNavigator = new Navigator();
    settingsNavigator.add("index", require("./pages/tabs/settings/pgSettings"));
    settingsNavigator.go("index");
    tabBar.children["settings"] = new TabBarItem({
        title: lang["tab.settings"],
        icon: Image.createFromFile("images://icon_tab_settings.png"),
        route: settingsNavigator
    });

    componentContextPatch(tabBar, "bottomtabbar");

    tabBar.add("profile", tabBar.children["profile"]);
    tabBar.add("hr", tabBar.children["hr"]);
    tabBar.add("approvals", tabBar.children["approvals"]);
    tabBar.add("myCompany", tabBar.children["myCompany"]);
    tabBar.add("settings", tabBar.children["settings"]);

    tabBar.setIndex("profile");

    Router.add("tabs", tabBar);

    return true;
};
