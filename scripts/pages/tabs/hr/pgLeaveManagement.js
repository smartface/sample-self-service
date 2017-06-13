const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemLeaveManagement = require('../../../components/ItemLeaveManagement');
var PageDesign = require("../../../ui/ui_pgLeaveManagement");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }
);

function onShow(parentOnShow) {
    parentOnShow();
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.children.headerBarTitle.text = lang["pgLeaveManagement.pageTitle"];

    this.listView.rowHeight = 125;
    this.listView.itemCount = 100;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;

        myListViewItem.addChild(item);
        return myListViewItem;
    };
    
    this.topTabBar.items = [
        lang["pgLeaveManagement.approved"],
        lang["pgLeaveManagement.waiting"],
        lang["pgLeaveManagement.rejected"]
    ];
}

module && (module.exports = Page_);