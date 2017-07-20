const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const MockService = require('../../../objects/MockService');
const DialogsLib = require("lib/ui/dialogs");
const Timer = require("sf-core/timer");
const PageDesign = require("../../../ui/ui_pgPerformance");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemPerformance = require('../../../components/ItemPerformance');

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.performanceList = [];
		initListView(this.listView, this.performanceList);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.performanceList.slice(0);
                Array.prototype.push.apply(this.performanceList,
                    MockService.getPerformanceReviews());
                this.listView.itemCount = this.performanceList.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 1500
        });
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgPerformance.pageTitle"];
}

function initListView(listView, data) {
    listView.rowHeight = 195;
    listView.itemCount = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemPerformance();
        item.id = 200;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    
    listView.onRowBind = function(listviewItem, index) {
        var itemPerformance = listviewItem.findChildById(200);
        itemPerformance.performanceReview = data[index];
    };
    listView.onPullRefresh = function(){
        listView.stopRefresh();
    };
}

module && (module.exports = Page_);