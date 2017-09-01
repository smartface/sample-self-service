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

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        this.approvedList = [];
        this.waitingList = [];
        this.rejectedList = [];
        this.data = this.approvedList;

        initListView(this.listView, this);
        initTopTabBar.call(this);
        initHeaderBar.call(this);
    }
);

var firstOnShow = true;

function onShow(parentOnShow) {
    parentOnShow();
    const page = this;

    if (firstOnShow) {
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

                    page.approvedList = approvedLeaveRequests;
                    page.waitingList = waitingLeaveRequests;
                    page.rejectedList = rejectedLeaveRequests;
                    page.data = page.approvedList;

                    page.listView.itemCount = page.data.length;
                    page.listView.refreshData();
                    DialogsLib.endLoading(loadingIndicator, page.listViewContainer);
                    loadChart.call(page);
                });
            });
        });

        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
}

function loadChart() {
    const page = this;
    var jet = new JET({
        jetPath: "assets://jet/",
        webView: page.wvChart
    });
    page.wvChart.visible = true;
    page.wvChart.bounceEnabled = false;
    const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
        width: null,
        flexGrow: null
    });
    var backgroundColor = color2Hex.getRGB(flexlayout1Style.backgroundColor);

    Object.assign(jet, {
        series: [{
            name: "TOTAL",
            items: [40],
        }, {
            name: "USED",
            items: [25],
        }, {
            name: "REMAINING",
            items: [35],
        }],
        styleDefaults: {
            pieInnerRadius: 0.5,
            dataLabelPosition: "center"
        },
        plotArea: {
          backgroundColor:   backgroundColor
        },
        type: JET.Type.PIE,
        orientation: JET.Orientation.VERTICAL,
        stack: JET.Stack.OFF,
        animationOnDisplay: JET.AnimationOnDisplay.AUTO,
        animationOnDataChange: JET.AnimationOnDataChange.AUTO,
        legend: {
            rendered: JET.LegendRendered.AUTO,
            backgroundColor: backgroundColor,
            textStyle: "color:white;"
        },
        xAxis: {
            axisLine: {
                lineColor: "white"
            }
        },
        yAxis: {
            axisLine: {
                lineColor: "white"
            },
            tickLabel: {
                style: "color:white;",
                scaling: "none"
            }
        }

    });
    jet.legend.rendered = false;
    jet.jetData.backgroundColor = backgroundColor;
    jet.refresh();
}

function initListView(listView, dataHolder) {
    listView.rowHeight = 135;
    listView.itemCount = dataHolder.data.length;
    listView.refreshEnabled = false;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        item.updateCallback = function() {
            listView.itemCount = dataHolder.data.length;
            listView.refreshData();
        };
        return myListViewItem;
    };
    listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.request = dataHolder.data[index];
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
