/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const DialogsLib = require("lib/ui/dialogs");
const ItemApproval = require("components/ItemApproval");
const ListViewItem = require("sf-core/ui/listviewitem");
const leaveManagement = require('../../../model/leave-management');
const PageDesign = require("../../../ui/ui_pgLeaveApprovals");
const Router = require("sf-core/router");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const pushClassNames = require("@smartface/contx/lib/styling/action/pushClassNames")


var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

		this.pendingList = [];
		this.approvedList = [];
		this.data = this.pendingList;
	}
);

function onLoad(parentOnLoad) {
	parentOnLoad();
	initTexts.call(this);
	initListView.call(this);
	initTopTabBar.call(this);
}

var firstOnShow = true;

function onShow(parentOnShow) {
	parentOnShow();
	swipeViewIndex.currentIndex = 3;
	const page = this;
	this.topTabBar.currentIndex = 0;
	if (firstOnShow) {
		DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
		leaveManagement.getPendingLeaveApprovals(function(err, pendingLeaveApprovals) {
			if (err)
				return alert("getPendingLeaveApprovals error"); //TODO: lang
			leaveManagement.getApprovedLeaveApprovals(function(err, approvedLeaveApprovals) {
				if (err)
					return alert("getApprovedLeaveApprovals error"); //TODO: lang,
				page.pendingList = pendingLeaveApprovals;
				page.approvedList = approvedLeaveApprovals;
				page.data = page.pendingList;

				page.listView.itemCount = page.data.length;
				page.listView.refreshData();
				DialogsLib.endLoading(loadingIndicator, page.listViewContainer);
			});
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
	this.listView.dispatch(removeChildren());

	this.listView.itemCount = 0;
	this.listView.rowHeight = 90;
	this.listView.refreshEnabled = false;
	var itemIndex = 0;

	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemApproval();
		item.id = 200;
		this.dispatch(addChild("item" + (++itemIndex), listViewItem));
		listViewItem.addChild(item, "child", "", style => {
			style.width = null;
			return style;
		});

		return listViewItem;
	};

	this.listView.onRowBind = function(listviewItem, index) {
		var item = listviewItem.findChildById(200);
		item.approval = this.data[index];
	}.bind(this);

	this.listView.onRowSelected = function(listviewItem, index) {
		Router.go("tabs/approvals/leaveApprovalDetail", this.data[index]);
	}.bind(this);
}

function initTopTabBar() {
	//  this.topTabBar.$$styleContext = {
	// 	classNames: ".toptabbar"
	// };
	//this.topTabBar.dispatch(pushClassNames(".toptabbar"));
	//
	this.topTabBar.activeTextColor = "#1775D0";
	this.topTabBar.inactiveTextColor = "#9F9E9F";
	this.topTabBar.activeBarColor = "#1775CF";
	// componentContextPatch(this.topTabBar, "toptabbar");

	this.topTabBar.onChanged = function(index) {
		var lists = [this.pendingList, this.approvedList];
		this.data = lists[index];
		this.listView.itemCount = this.data.length;
		this.listView.refreshData();
	}.bind(this);
}

module && (module.exports = Page_);
