/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const DialogsLib = require("lib/ui/dialogs");
const ItemApproval = require("components/ItemApproval");
const ListViewItem = require("sf-core/ui/listviewitem");
const MockService = require('../../../objects/MockService');
const PageDesign = require("../../../ui/ui_pgLeaveApprovals");
const Router = require("sf-core/router");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		
		this.pendingList = [];
		this.approvedList = [];
		this.data = this.pendingList;
		
		initTexts.call(this);
		initListView.call(this);
		initTopTabBar.call(this);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.pendingList = MockService.getPendingLeaveApprovals();
                this.approvedList = MockService.getApprovedLeaveApprovals();
				this.data = this.pendingList;
                
                this.listView.itemCount = this.data.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 1000
        });
        firstOnShow = false;
    }
}

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgLeaveApprovals.pageTitle"];
	this.topTabBar.items = [
		lang["pgLeaveApprovals.waitingTab"],
		lang["pgLeaveApprovals.approvedTab"]
	];
}

function initListView() {
	this.listView.rowHeight = 90;
	this.listView.refreshEnabled = false;
	
	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemApproval();
		item.id = 200;
		listViewItem.addChild(item);
		return listViewItem;
	};
	
	this.listView.onRowBind = function(listviewItem, index) {
		var item = listviewItem.findChildById(200);
        item.approval = this.data[index];
	}.bind(this);
	
	this.listView.onRowSelected = function() {
		Router.go("tabs/approvals/leaveApprovalDetail");
	};
}

function initTopTabBar() {
	this.topTabBar.activeTextColor = Color.create("#1775D0");
	this.topTabBar.inactiveTextColor = Color.create("#9F9E9F");
	this.topTabBar.activeBarColor = Color.create("#1775CF");
	this.topTabBar.onChanged = function(index) {
		var lists = [this.pendingList, this.approvedList];
        this.data = lists[index];
        this.listView.itemCount = this.data.length;
        this.listView.refreshData();
	}.bind(this);
}

module && (module.exports = Page_);