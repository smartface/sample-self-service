/* globals lang */
const TabBarItem = require("sf-core/ui/tabbaritem");
const Image = require("sf-core/ui/image");
const Navigator = require("sf-core/ui/navigator");
const BottomTabBar = require("sf-core/ui/bottomtabbar");
const Color = require("sf-core/ui/color");
const settings = require("./settings.json");
const Router = require("sf-core/ui/router");
const Data = require('sf-core/data');

var tabBar;

exports.load = function load() {
    if (tabBar) {
        tabBar.setIndex("profile");
        return true;
    }

    var itemColor = Color.create((Data.getStringVariable("theme") === "Style1" ? "#1775D0" : "#00B9FF"));
    tabBar = new BottomTabBar({
        backgroundColor: Color.create("#EAEAEB"),
        itemColor: {
            normal: Color.create("#9C9DA6"),
            selected: itemColor
        }
    });


    var profileNavigator = new Navigator();
    profileNavigator.add("index", require("./pages/tabs/profile"));
    profileNavigator.add("profileDetail", require("./pages/tabs/profile/pgProfileDetail"));
    profileNavigator.go("index");
    tabBar.add("profile", new TabBarItem({
        title: lang["tab.profile"],
        icon: Image.createFromFile("images://icon_tab_profile.png"),
        route: profileNavigator
    }));

    var hrNavigator = new Navigator();
    hrNavigator.add("index", require("./pages/tabs/hr"));
    hrNavigator.add("newExpense", require("./pages/tabs/hr/pgNewExpense"));
    hrNavigator.add("newLeaveRequest", require("./pages/tabs/hr/pgNewLeaveRequest"));
    hrNavigator.go("index");
    tabBar.add("hr", new TabBarItem({
        title: lang["tab.HR"],
        icon: Image.createFromFile("images://icon_tab_hr.png"),
        route: hrNavigator
    }));

    var approvalNavigator = new Navigator();
    approvalNavigator.add("index", require("./pages/tabs/approvals"));
    approvalNavigator.add("leaveApprovalDetail", require("./pages/tabs/approvals/pgLeaveApprovalDetail"));
    approvalNavigator.add("expenseApprovalDetail", require("./pages/tabs/approvals/pgExpenseApprovalDetail"));
    approvalNavigator.go("index");
    tabBar.add("approvals", new TabBarItem({
        title: lang["tab.Approvals"],
        icon: Image.createFromFile("images://icon_tab_approvals.png"),
        route: approvalNavigator
    }));

    var myCompanyNavigator = new Navigator();
    myCompanyNavigator.add("index", require("./pages/tabs/myCompany"));
    myCompanyNavigator.add("documentDetail", require("./pages/tabs/myCompany/pgDocumentDetail"));
    myCompanyNavigator.go("index");
    tabBar.add("myCompany", new TabBarItem({
        title: lang["tab.myCompany"],
        icon: Image.createFromFile("images://icon_tab_mycompany.png"),
        route: myCompanyNavigator
    }));

    var settingsNavigator = new Navigator();
    settingsNavigator.add("index", require("./pages/tabs/settings/pgSettings"));
    settingsNavigator.go("index");
    tabBar.add("settings", new TabBarItem({
        title: lang["tab.settings"],
        icon: Image.createFromFile("images://icon_tab_settings.png"),
        route: settingsNavigator
    }));
    tabBar.setIndex("profile");

    Router.add("tabs", tabBar);

    return true;
};
