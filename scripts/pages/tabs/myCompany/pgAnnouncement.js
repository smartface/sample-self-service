/*globals lang*/
const extend = require("js-base/core/extend");
const ItemAnnouncement = require("components/ItemAnnouncement");
const ListViewItem = require("sf-core/ui/listviewitem");
const announcement = require("../../../model/announcement");
const PageDesign = require("../../../ui/ui_pgAnnouncement");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		const page = this;
		_super(this, params);


		initListView.call(page);
		initTexts.call(this);

		this.onShow = function() {
			announcement.getAnnouncements(function(err, announcements) {
				if (err)
					return alert("getAnnouncements error"); //TODO: lang
				page.announcements = announcements;

				page.listView.itemCount = page.announcements.length;
				page.listView.refreshData();
			});
		}.bind(this);
	}
);

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgAnnouncement.pageTitle"];
}

function initListView() {
	this.listView.rowHeight = 120;
	this.listView.refreshEnabled = false;
	var itemIndex = 0;
	
	this.listView.onRowCreate = function() {
		var listViewItem = new ListViewItem();
		var item = new ItemAnnouncement();
		item.id = 200;
		this.dispatch(addChild("item"+(++itemIndex), listViewItem));
		listViewItem.addChild(item, "child");
		
		return listViewItem;
	}.bind(this);

	this.listView.onRowBind = function(listViewItem, index) {
		var item = listViewItem.findChildById(200);
		item.announcement = this.announcements[index];
	}.bind(this);
}
module && (module.exports = Page_);
