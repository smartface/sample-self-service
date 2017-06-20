/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const ItemAnnouncement = require("components/ItemAnnouncement");
const ListViewItem = require("sf-core/ui/listviewitem");
const PageDesign = require("../../../ui/ui_pgAnnouncement");
const Router = require("sf-core/router");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		initTexts.call(this);
		initListView.call(this);
    }
);

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgLeaveApprovals.pageTitle"];
}

function initListView() {
	this.listView.rowHeight = 110;
	this.listView.refreshEnabled = false;
	
	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemAnnouncement();
		listViewItem.addChild(item);
		return listViewItem;
	};
	
	this.listView.onRowSelected = function() {
		// Router.go("tabs/approvals/leaveApprovalDetail");
	}
}
module && (module.exports = Page_);