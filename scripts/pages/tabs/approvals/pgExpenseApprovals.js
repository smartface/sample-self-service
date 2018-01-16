/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const DialogsLib = require("lib/ui/dialogs");
const ItemApproval = require("components/ItemApproval");
const ListViewItem = require("sf-core/ui/listviewitem");
const expenseManagement = require('../../../model/expense-management');
const PageDesign = require("../../../ui/ui_pgExpenseApprovals");
const Router = require("sf-core/router");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");
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

var firstOnShow = true;

function onLoad(superOnload) {
	superOnload && superOnload();
	initTexts.call(this);
	initListView.call(this);
	initTopTabBar.call(this);
}

function onShow(parentOnShow) {
	parentOnShow();
	const page = this;
	this.topTabBar.currentIndex = 0;
	if (firstOnShow) {
		DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
		expenseManagement.getPendingExpenseApprovals(function(err, pendingExpenseApprovals) {
			if (err)
				return alert("getPendingExpenseApprovals error"); //TODO: lang
			expenseManagement.getApprovedExpenseApprovals(function(err, approvedExpenseApprovals) {
				if (err)
					return alert("getApprovedExpenseApprovals error"); //TODO: lang
				page.pendingList = pendingExpenseApprovals;
				page.approvedList = approvedExpenseApprovals;

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
	this.layoutHeaderBar.headerBarTitle.text = lang["pgExpenseApprovals.pageTitle"];
	this.topTabBar.items = [
		lang["pgExpenseApprovals.waitingTab"],
		lang["pgExpenseApprovals.approvedTab"]
	];
}

function initListView() {
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
		Router.go("tabs/approvals/expenseApprovalDetail", this.data[index]);
	}.bind(this);
}

function initTopTabBar() {
	this.topTabBar.activeTextColor = "#1775D0";
	this.topTabBar.inactiveTextColor = "#9F9E9F";
	this.topTabBar.activeBarColor = "#1775CF";
	this.topTabBar.onChanged = function(index) {
		var lists = [this.pendingList, this.approvedList];
		this.data = lists[index];
		this.listView.itemCount = this.data.length;
		this.listView.refreshData();
	}.bind(this);
}

module && (module.exports = Page_);
