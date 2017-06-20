/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const ItemApproval = require("components/ItemApproval");
const ListViewItem = require("sf-core/ui/listviewitem");
const PageDesign = require("../../../ui/ui_pgExpenseApprovals");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		initTexts.call(this);
		initListView.call(this);
		initTopTabBar.call(this);
    }
);

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgExpenseApprovals.pageTitle"];
	this.topTabBar.items = [
		lang["pgExpenseApprovals.waitingTab"],
		lang["pgExpenseApprovals.approvedTab"]
	];
}

function initListView() {
	this.listView.rowHeight = 90;
	this.listView.refreshEnabled = false;
	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemApproval();
		listViewItem.addChild(item);
		return listViewItem;
	}
}

function initTopTabBar() {
	this.topTabBar.activeTextColor = Color.create("#1775D0");
	this.topTabBar.inactiveTextColor = Color.create("#9F9E9F");
	this.topTabBar.activeBarColor = Color.create("#1775CF");
}

module && (module.exports = Page_);