const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    BottomTabBarRouter,
    Route
} = require("@smartface/router");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
BottomTabBarRouter.$$styleContext = {
    classNames: ".bottomtabbar",
    userProps: {}
};
const router = exports = module.exports = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        Route.of({
            path: "/login/pgLogin",
            build: (router, route) => {
                let Login = require("pages/login/pgLogin");
                return new Login(router);
            }
        }),
        BottomTabBarRouter.of({
            path: '/tabs',
            to: "/tabs/profile/index",
            tabbarParams: () => ({

                itemColor: { normal: Color.create("#9C9DA6"), selected: Color.create("#00B9FF") },
                backgroundColor: Color.create("#EAEAEB"),
            }),
            items: [
                { title: global.lang["tab.profile"], icon: Image.createFromFile("images://icon_tab_profile.png") },
                { title: global.lang["tab.HR"], icon: Image.createFromFile("images://icon_tab_hr.png") },
                { title: global.lang["tab.myCompany"], icon: Image.createFromFile("images://icon_tab_mycompany.png") },
                { title: global.lang["tab.chatbot"], icon: Image.createFromFile("images://messageicon.png") },
                { title: global.lang["tab.settings"], icon: Image.createFromFile("images://icon_tab_settings.png") },
            ],
            routes: [
                StackRouter.of({
                    path: "/tabs/profile",
                    to: "/tabs/profile/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/tabs/profile/index",
                            build: (router, route) => {
                                let Profile = require("pages/tabs/profile/index");
                                return new Profile(router);
                            }
                        }),
                        Route.of({
                            path: "/tabs/profile/pgSalary",
                            build: (router, route) => {
                                let Salary = require("pages/tabs/profile/pgSalary");
                                return new Salary(router);
                            }
                        }),
                        Route.of({
                            path: "/tabs/profile/pgEmploymentHistory",
                            build: (router, route) => {
                                let EmploymentHistory = require("pages/tabs/profile/pgEmploymentHistory");
                                return new EmploymentHistory(router);
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/hr",
                    to: "/tabs/hr/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/tabs/hr/index",
                            build: (router, route) => {
                                let HR = require("pages/tabs/hr/index");
                                return new HR(router);
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/newLeaveRequest",
                            build: (router, route) => {
                                let newLeaveRequest = require("pages/tabs/hr/pgNewLeaveRequest");
                                return new newLeaveRequest();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgOutOfOffice",
                            build: (router, route) => {
                                let OutOfOffice = require("pages/tabs/hr/pgOutOfOffice");
                                return new OutOfOffice();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/newExpense",
                            build: (router, route) => {
                                let NewExpense = require("pages/tabs/myCompany/pgNewExpense");
                                return new NewExpense();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/expenseApprovalDetail",
                            build: (router, route) => {
                                let ExpenseApprovals = require("pages/tabs/hr/pgExpenseApprovals");
                                return new ExpenseApprovals();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/leaveApprovalDetail",
                            build: (router, route) => {
                                let LeaveApprovalDetail = require("pages/tabs/hr/pgLeaveApprovalDetail");
                                return new LeaveApprovalDetail();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgLeaveManagement",
                            build: (router, route) => {
                                let LeaveManagement = require("pages/tabs/hr/pgLeaveManagement");
                                return new LeaveManagement();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgExpenseManagement",
                            build: (router, route) => {
                                let ExpenseManagement = require("pages/tabs/hr/pgExpenseManagement");
                                return new ExpenseManagement();
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/myCompany",
                    to: "/tabs/myCompany/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/tabs/myCompany/index",
                            build: (router, route) => {
                                let MyCompany = require("pages/tabs/myCompany/index");
                                return new MyCompany(router);
                            }
                        }),
                        Route.of({
                            path: "/tabs/myCompany/documentDetail",
                            build: (router, route) => {
                                let DocumentDetail = require("pages/tabs/myCompany/pgDocumentDetail");
                                return new DocumentDetail(router);
                            }
                        })
                    ]
                }),
                Route.of({
                    path: "/tabs/chatbot/index",
                    build: (router, route) => {
                        let Chatbot = require("pages/tabs/chatbot/index");
                        return new Chatbot(router);
                    }
                }),
                Route.of({
                    path: "/tabs/settings/pgSettings",
                    build: (router, route) => {
                        let Settings = require("pages/tabs/settings/pgSettings");
                        return new Settings(router);
                    }
                })
            ]
        })
    ]
});
router.push("/login/pgLogin");
