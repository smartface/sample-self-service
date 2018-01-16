/*globals lang*/
const extend = require('js-base/core/extend');
const DialogsLib = require("lib/ui/dialogs");
const ListViewItem = require('sf-core/ui/listviewitem');
const Image = require("sf-core/ui/image");
const ItemLeaveManagement = require('../../../components/ItemLeaveManagement');
const leaveManagement = require("../../../model/leave-management");
const PageDesign = require("../../../ui/ui_pgLeaveManagement");
const Router = require("sf-core/router");
const JET = require('sf-extension-oracle-jet');
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const color2Hex = require("../../../lib/color2Hex");
const mixinDeep = require('mixin-deep');
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");
const createSFCoreProp = require("@smartface/contx/lib/smartface/sfCorePropFactory").createSFCoreProp;
var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        this.firstOnShow = true;
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        this.approvedList = [];
        this.waitingList = [];
        this.rejectedList = [];
        this.data = this.approvedList;

        this.onError = function(e) {
            console.log(e.message);
        }
    }
);



function onShow(parentOnShow) {
    parentOnShow();
    const page = this;
    this.topTabBar.currentIndex = 0;

    if (page.firstOnShow) {
        page.firstOnShow = false;
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        leaveManagement.getApprovedLeaveRequests(function(err, approvedLeaveRequests) {
            if (err)
                return alert("getApprovedLeaveRequests error"); //TODO: lang
            leaveManagement.getWaitingLeaveRequests(function(err, waitingLeaveRequests) {
                if (err)
                    return alert("getWaitingLeaveRequests error"); //TODO: lang
                leaveManagement.getRejectedLeaveRequests(function(err, rejectedLeaveRequests) {
                    if (err)
                        return alert("getRejectedLeaveRequests error"); //TODO: lang
                    leaveManagement.getLeaveRequestsChart(function(err, leaveRequestChartData) {
                        if (err)
                            return alert("getRejectedLeaveRequests error"); //TODO: lang

                        page.approvedList = approvedLeaveRequests;
                        page.waitingList = waitingLeaveRequests;
                        page.rejectedList = rejectedLeaveRequests;
                        page.data = page.approvedList;

                        page.listView.itemCount = page.data.length;
                        page.listView.refreshData();
                        DialogsLib.endLoading(loadingIndicator, page.listViewContainer);
                        loadChart.call(page, leaveRequestChartData);
                    });
                });
            });
        });
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    initListView(this.listView, this);
    initTopTabBar.call(this);
    initHeaderBar.call(this);
}

function loadChart(leaveRequestChartData) {
    const page = this;
    var jet = new JET({
        jetPath: "assets://jet/",
        webView: page.wvChart
    });

    page.dispatch(addChild("jetChart", {
            subscribeContext: function(e) {
                if (e.rawStyle.backgroundColor) {
                    //console.log("JET_BACKGROUND->"+ e.rawStyle.backgroundColor);
                    var backgroundColor = color2Hex.getRGB(createSFCoreProp("backgroundColor", e.rawStyle.backgroundColor));
                    leaveRequestChartData = mixinDeep(leaveRequestChartData, {
                        plotArea: {
                            backgroundColor: backgroundColor
                        },
                        legend: {
                            backgroundColor: backgroundColor,
                        }
                    });
                    Object.assign(jet, leaveRequestChartData);
                    jet.legend.rendered = false;
                    jet.jetData.backgroundColor = backgroundColor;
                    jet.refresh();
                }
            }
        },
        ".flexLayout .flexLayout-headerBar"
    ));

    page.wvChart.visible = true;
    page.wvChart.bounceEnabled = false;
    // const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
    //     width: null,
    //     flexGrow: null
    // });
}



function initListView(listView, dataHolder) {
    listView.rowHeight = 135;
    listView.itemCount = dataHolder.data.length;
    listView.refreshEnabled = false;
    var itemIndex = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;
        myListViewItem.item = item;
        this.dispatch(addChild("item" + (++itemIndex), myListViewItem));
        myListViewItem.addChild(item, "child", "", function(style) {
            style.width = null;
            return style;
        });
        item.updateCallback = function() {
            listView.itemCount = dataHolder.data.length;
            listView.refreshData();
        };
        return myListViewItem;
    };
    listView.onRowBind = function(listViewItem, index) {
        var item = listViewItem.findChildById(200);
        item && (item.request = dataHolder.data[index]);
    };
}

function initTopTabBar() {
    this.topTabBar.items = [
        lang["pgLeaveManagement.approved"],
        lang["pgLeaveManagement.waiting"],
        lang["pgLeaveManagement.rejected"]
    ];
    this.topTabBar.onChanged = function(index) {
        var lists = [this.approvedList, this.waitingList, this.rejectedList];
        this.data = lists[index];
        this.listView.itemCount = this.data.length;
        this.listView.refreshData();
    }.bind(this);
}

function initHeaderBar() {
    this.layoutHeaderBar.headerBarTitle.text = lang["pgLeaveManagement.pageTitle"];
    this.layoutHeaderBar.setRightItem1({
        image: Image.createFromFile("images://icon_header_add.png"),
        onPress: function() {
            Router.go("tabs/hr/newLeaveRequest");
        }
    });
}

module && (module.exports = Page_);
