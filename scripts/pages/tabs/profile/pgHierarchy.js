const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const Router = require("sf-core/router");

const PageDesign = require("../../../ui/ui_pgHierarchy");
const ItemUser = require('../../../components/ItemUser');

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
    this.layoutHeaderBar.children.headerBarTitle.text = lang["pgHierarchy.pageTitle"];
    
    this.listView.rowHeight = 75;
    this.listView.itemCount = 100;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemUser();
        item.id = 200;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    this.listView.onRowSelected = function() {
        Router.go("tabs/profile/profileDetail");
    }
}

module && (module.exports = Page_);