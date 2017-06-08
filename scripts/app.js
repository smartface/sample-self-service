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
const settings = require("./.settings.json");
const PgConstants = require("pages/PgConstants");

stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);

var navigator = new Navigator();
navigator.add("pgLogin", require("./pages/login/pgLogin"));

var tabBar = new BottomTabBar({
    backgroundColor: Color.create("#EAEAEB")
});
tabBar.add("profile", new TabBarItem({
    title: "Profile",
    icon: Image.createFromFile("images://icon_tab_profile.png"),
    route: require("./pages/tabs/profile")
}));

var hrNavigator = new Navigator();
hrNavigator.add("index", require("./pages/tabs/hr"));
hrNavigator.add("newExpense", require("./pages/tabs/hr/pgNewExpense"));
hrNavigator.go("index");
tabBar.add("hr", new TabBarItem({
    title: "HR",
    icon: Image.createFromFile("images://icon_tab_hr.png"),
    route: hrNavigator
}));

tabBar.add("approvals", new TabBarItem({
    title: "Approvals",
    icon: Image.createFromFile("images://icon_tab_approvals.png"),
    route: require("./pages/tabs/approvals/pgApprovals")
}));
tabBar.add("myCompany", new TabBarItem({
    title: "My Company",
    icon: Image.createFromFile("images://icon_tab_mycompany.png"),
    route: require("./pages/tabs/myCompany/pgMyCompany")
}));
tabBar.add("settings", new TabBarItem({
    title: "Settings",
    icon: Image.createFromFile("images://icon_tab_settings.png"),
    route: require("./pages/tabs/settings/pgSettings")
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
