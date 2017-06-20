/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

const Router = require("sf-core/ui/router");
const BottomTabBar = require("sf-core/ui/bottomtabbar");
const Color = require("sf-core/ui/color");
const TabBarItem = require("sf-core/ui/tabbaritem");
const Image = require("sf-core/ui/image");
const Navigator = require("sf-core/ui/navigator");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
const PgConstants = require("pages/PgConstants");
const Data = require('sf-core/data');

stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
if (Data.getStringVariable("theme") === null)
    Data.setStringVariable("theme", settings.config.theme.currentTheme);
stylerBuilder.setActiveTheme(Data.getStringVariable("theme") || settings.config.theme.currentTheme);

var navigator = new Navigator();
navigator.add("pgLogin", require("./pages/login/pgLogin"));

var itemColor = Color.create((settings.config.theme.currentTheme === "Style1" ? "#1775D0" : "#00B9FF"));
var tabBar = new BottomTabBar({
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
approvalNavigator.go("index");
tabBar.add("approvals", new TabBarItem({
    title: lang["tab.Approvals"],
    icon: Image.createFromFile("images://icon_tab_approvals.png"),
    route: approvalNavigator
}));

tabBar.add("myCompany", new TabBarItem({
    title: lang["tab.myCompany"],
    icon: Image.createFromFile("images://icon_tab_mycompany.png"),
    route: require("./pages/tabs/myCompany/pgMyCompany")
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

Router.add("login", navigator);
Router.add("tabs", tabBar);
Router.go("login/pgLogin");

// Define routes and go to initial page of application
// Router.add(PgConstants.PAGE_LOGIN, require("./pages/login/pgLogin"));
//Router.add(PgConstants.PAGE_EMPLOYMENT_HISTORY, require("./pages/tabs/profile/pgEmploymentHistory"));
//Router.add(PgConstants.PAGE_PERFORMANCE, require("./pages/tabs/profile/pgPerformance"));
//Router.add(PgConstants.PAGE_LEAVE_MANAGEMENT, require("./pages/tabs/hr/pgLeaveManagement"));
// Router.add(PgConstants.PAGE_NEW_LEAVE_REQUEST, require("./pages/tabs/hr/pgNewLeaveRequest"));
//Router.add(PgConstants.PAGE_SALARY, require("./pages/tabs/profile/pgSalary"));
//Router.add(PgConstants.PAGE_HIERARCHY, require("./pages/tabs/profile/pgHierarchy"));
//Router.add(PgConstants.PAGE_EXPENSE_MANAGEMENT, require("./pages/tabs/hr/pgExpenseManagement"));
// Router.go(PgConstants.PAGE_LOGIN);
