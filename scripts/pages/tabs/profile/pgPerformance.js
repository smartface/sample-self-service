const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const MockService = require('../../../objects/MockService');

var PageDesign = require("../../../ui/ui_pgPerformance");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemPerformance = require('../../../components/ItemPerformance');

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
    
    this.performanceList = MockService.getPerformanceReviews();
    this.listView.rowHeight = 195;
    this.listView.itemCount = this.performanceList.length;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemPerformance();
        item.id = 200;

        myListViewItem.addChild(item);
        return myListViewItem;
    };
    this.listView.onRowBind = function(listviewItem, index) {
        var itemPerformance = listviewItem.findChildById(200);
        itemPerformance.performanceReview = this.performanceList[index];
    }.bind(this);
}

module && (module.exports = Page_);