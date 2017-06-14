const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemLeaveManagement = require('../../../components/ItemLeaveManagement');
var PageDesign = require("../../../ui/ui_pgLeaveManagement");
const MockService = require("../../../objects/MockService");

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

    this.approvedList = MockService.getApprovedLeaveRequests();
    this.waitingList = MockService.getWaitingLeaveRequests();
    this.rejectedList = MockService.getRejectedLeaveRequests();
    this.currentList = this.approvedList;

    this.listView.rowHeight = 125;
    this.listView.itemCount = this.currentList.length;
    this.listView.refreshEnabled = false;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    this.listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.request = this.currentList[index];
    }.bind(this);
    
    this.topTabBar.items = [
        lang["pgLeaveManagement.approved"],
        lang["pgLeaveManagement.waiting"],
        lang["pgLeaveManagement.rejected"]
    ];
    this.topTabBar.onChanged = function(index) {
        var lists = [this.approvedList, this.waitingList, this.rejectedList];
        this.currentList = lists[index];
        this.listView.itemCount = this.currentList.length;
        this.listView.refreshData();
    }.bind(this);
}

module && (module.exports = Page_);