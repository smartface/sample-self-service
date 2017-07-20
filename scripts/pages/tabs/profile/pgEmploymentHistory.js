const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const DialogsLib = require("lib/ui/dialogs");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemEmploymentHistory = require('../../../components/ItemEmploymentHistory');
const MockService = require('../../../objects/MockService');
const Employment = require('../../../objects/Employment');
const Timer = require("sf-core/timer");

var PageDesign = require("../../../ui/ui_pgEmploymentHistory");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.employmentHistoryList = [];
		initListView(this.listView, this.employmentHistoryList);
	}
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.employmentHistoryList.slice(0);
                Array.prototype.push.apply(this.employmentHistoryList,
                    MockService.getEmploymentHistory());
                this.listView.itemCount = this.employmentHistoryList.length;
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
	this.layoutHeaderBar.headerBarTitle.text = lang["pgEmploymentHistory.pageTitle"];
}

function initListView(listView, data) {
    listView.rowHeight = 350;
    listView.itemCount = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var employmentItem = new ItemEmploymentHistory();
        employmentItem.id = 200;
        myListViewItem.item = employmentItem;
        myListViewItem.addChild(employmentItem);
        return myListViewItem;
    };
    
    listView.onRowBind = function(listViewItem, index) {
        var item = listViewItem.findChildById(200);
        item.employment = data[index];
    };
    
    listView.onPullRefresh = function(){
        listView.stopRefresh();
    };
}

module && (module.exports = Page_);