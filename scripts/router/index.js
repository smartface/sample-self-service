const {
    NativeRouter: Router,
    Router: RouterBase,
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
const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        Route.of({
            path: "/pages/login/pgLogin",
            build: (router, route) => {
                let Login = require("pages/login/pgLogin");
                return new Login(router);
            }
        }),
        BottomTabBarRouter.of({
            path: '/pages/tabs',
            to: "/pages/tabs/profile/index",
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
                    path: "/pages/tabs/profile",
                    to: "/pages/tabs/profile/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/pages/tabs/profile/index",
                            build: (router, route) => {
                                let Profile = require("pages/tabs/profile/index");
                                return new Profile();
                            }
                        })
                        // Route.of({
                        //     path: "/pages/tabs/profile/pgProfileDetail",
                        //     build: (router, route) => {
                        //         let ProfileDetail = require("pages/tabs/profile/pgProfileDetail");
                        //         return new ProfileDetail();
                        //     }
                        // })

                    ]
                }),
                StackRouter.of({
                    path: "/pages/tabs/hr",
                    to: "/pages/tabs/hr/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/pages/tabs/hr/index",
                            build: (router, route) => {
                                let HR = require("pages/tabs/hr/index");
                                return new HR();
                            }
                        })
                        // Route.of({
                        //     path: "/pages/tabs/hr/pgExpenseManagement",
                        //     build: (router, route) => {
                        //         let ExpenseManagement = require("pages/tabs/hr/pgExpenseManagement");
                        //         return new ExpenseManagement();
                        //     }
                        // }),
                        // Route.of({
                        //     path: "/pages/tabs/hr/pgOutOfOffice",
                        //     build: (router, route) => {
                        //         let OutOfOffice = require("pages/tabs/hr/pgOutOfOffice");
                        //         return new OutOfOffice();
                        //     }
                        // }),
                        // Route.of({
                        //     path: "/pages/tabs/hr/pgLeaveApprovals",
                        //     build: (router, route) => {
                        //         let LeaveApprovals = require("pages/tabs/myCompany/pgLeaveApprovals");
                        //         return new LeaveApprovals();
                        //     }
                        // }),
                        // Route.of({
                        //     path: "/pages/tabs/hr/pgExpenseApprovals",
                        //     build: (router, route) => {
                        //         let ExpenseApprovals = require("pages/tabs/hr/pgExpenseApprovals");
                        //         return new ExpenseApprovals();
                        //     }
                        // }),

                    ]
                }),
                StackRouter.of({
                    path: "/pages/tabs/myCompany",
                    to: "/pages/tabs/myCompany/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/pages/tabs/myCompany/index",
                            build: (router, route) => {
                                let MyCompany = require("pages/tabs/myCompany/index");
                                return new MyCompany();
                            }
                        })
                        // Route.of({
                        //     path: "/pages/tabs/myCompany/pgDocumentDetail",
                        //     build: (router, route) => {
                        //         let DocumentDetail = require("pages/tabs/myCompany/index");
                        //         return new DocumentDetail();
                        //     }
                        // })
                    ]
                }),
                StackRouter.of({
                    path: "/pages/tabs/chatbot",
                    to: "/pages/tabs/chatbot/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/pages/tabs/chatbot/index",
                            build: (router, route) => {
                                let Chatbot = require("pages/tabs/chatbot/index");
                                return new Chatbot();
                            }
                        }),
                    ]
                }),
                StackRouter.of({
                    path: "/pages/tabs/settings",
                    to: "/pages/tabs/settings/pgSettings",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/pages/tabs/settings/pgSettings",
                            build: (router, route) => {
                                console.log("build setting")
                                let Settings = require("pages/tabs/settings/pgSettings");
                                 console.log("build setting 2")
                                return new Settings();
                            }
                        }),
                    ]
                })
            ]
        })
    ]
})
router.push("/pages/tabs/profile/index");
