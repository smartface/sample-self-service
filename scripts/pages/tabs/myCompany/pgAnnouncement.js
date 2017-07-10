/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const ItemAnnouncement = require("components/ItemAnnouncement");
const ListViewItem = require("sf-core/ui/listviewitem");
const MockService = require("../../../objects/MockService");
const PageDesign = require("../../../ui/ui_pgAnnouncement");
const Router = require("sf-core/router");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		
		this.announcements = MockService.getAnnouncements();
		
		initTexts.call(this);
		initListView.call(this);
    }
);

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgAnnouncement.pageTitle"];
}

function initListView() {
	this.listView.rowHeight = 120;
	this.listView.refreshEnabled = false;
	
	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemAnnouncement();
		item.id = 200;
		listViewItem.addChild(item);
		return listViewItem;
	};
	
	this.listView.onRowBind = function(listViewItem, index) {
		var item = listViewItem.findChildById(200);
		item.announcement = this.announcements[index];
	}.bind(this);
}
module && (module.exports = Page_);