const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemLeaveManagement = require('../../../components/ItemLeaveManagement');
var PageDesign = require("../../../ui/ui_pgLeaveManagement");

const TITLE = "LEAVE MANAGEMENT";

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
    this.layoutHeaderBar.children.headerBarTitle.text = TITLE;

    this.listView.rowHeight = 125;
    this.listView.itemCount = 100;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;

        myListViewItem.addChild(item);
        return myListViewItem;
    };
}

module && (module.exports = Page_);