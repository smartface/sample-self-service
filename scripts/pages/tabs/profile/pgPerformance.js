const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');

var PageDesign = require("../../../ui/ui_pgPerformance");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemSalary = require('../../../components/ItemPerformance');

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
    this.layoutHeaderBar.children.headerBarTitle.text = lang["pgPerformance.pageTitle"];

    this.listView.rowHeight = 195;
    this.listView.itemCount = 100;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemSalary();
        item.id = 200;

        myListViewItem.addChild(item);
        return myListViewItem;
    };
}

module && (module.exports = Page_);