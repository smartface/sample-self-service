const Application = require("sf-core/application");
const System = require("sf-core/device/system");
const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    BottomTabBarRouter,
    Route
} = require("@smartface/router");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const buildExtender = require("sf-extension-utils/lib/router/buildExtender");
BottomTabBarRouter.$$styleContext = {
    classNames: ".bottomtabbar",
    userProps: {}
};
const backClose = require("sf-extension-utils/lib/router/back-close");
const backArrowImage = Image.createFromFile("images://back.png");
backClose.setDefaultBackStyle({ image: backArrowImage });
backClose.dissmissBuilder = (match, routeData, router, pageInstance, pageProps, route) => {
    return {
        image: System.OS === "Android" && backArrowImage,
        position: "left"
    };
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
            onTabChangedByUser: (router, /* @type ChangeEvent*/ event) => {
                console.log("Tab is changed", event.prevTabIndex, event.tabIndex);
                if (!(Router.getActiveRouter().homeRoute) && event.prevTabIndex === event.tabIndex) {
                    Router.getActiveRouter().goBacktoHome();
                }
            },
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
                            build: buildExtender({
                                pageName: "tabs/profile/index",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/profile/pgSalary",
                            build: buildExtender({
                                pageName: "tabs/profile/pgSalary",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/profile/pgEmploymentHistory",
                            build: buildExtender({
                                pageName: "tabs/profile/pgEmploymentHistory",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/hr",
                    to: "/tabs/hr/index",
                    headerBarParams: () => ({ visible: false }),
                    routes: [
                        Route.of({
                            path: "/tabs/hr/index",
                            build: buildExtender({
                                pageName: "tabs/hr/index",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/newLeaveRequest",
                            build: buildExtender({
                                pageName: "tabs/hr/pgNewLeaveRequest",
                                headerBarStyle: { visible: true }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgOutOfOffice",
                            build: buildExtender({
                                pageName: "tabs/hr/pgOutOfOffice",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/newExpense",
                            build: buildExtender({
                                pageName: "tabs/hr/pgNewExpense",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/expenseApprovalDetail",
                            build: buildExtender({
                                pageName: "tabs/hr/pgExpenseApprovals",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/leaveApprovalDetail",
                            build: buildExtender({
                                pageName: "tabs/hr/pgLeaveApprovalDetail",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgLeaveManagement",
                            build: buildExtender({
                                pageName: "tabs/hr/ipgLeaveManagementndex",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/hr/pgExpenseManagement",
                            build: buildExtender({
                                pageName: "tabs/hr/pgExpenseManagement",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/myCompany",
                    to: "/tabs/myCompany/index",
                    headerBarParams: () => ({ visible: false }),
                    routes: [
                        Route.of({
                            path: "/tabs/myCompany/index",
                            build: buildExtender({
                                pageName: "tabs/myCompany/index",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/myCompany/documentDetail",
                            build: buildExtender({
                                pageName: "tabs/myCompany/pgDocumentDetail",
                                headerBarStyle: { visible: true }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/chatbot",
                    to: "/tabs/chatbot/index",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/tabs/chatbot/index",
                            build: buildExtender({
                                pageName: "tabs/chatbot/index",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        }),
                        Route.of({
                            path: "/tabs/chatbot/chatbotPg",
                            build: buildExtender({
                                pageName: "tabs/chatbot/chatbotPg",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/tabs/settings",
                    to: "/tabs/settings/pgSettings",
                    headerBarParams: () => ({ visible: true }),
                    routes: [
                        Route.of({
                            path: "/tabs/settings/pgSettings",
                            build: buildExtender({
                                pageName: "tabs/settings/pgSettings",
                                headerBarStyle: { visible: false }
                            }),
                            routeDidEnter: () => {
                                routeEnterProcess();
                            }
                        })
                    ]
                }),

            ]
        })
    ]
});
router.push("/login/pgLogin");


function routeEnterProcess() {
    Application.hideKeyboard();
}
