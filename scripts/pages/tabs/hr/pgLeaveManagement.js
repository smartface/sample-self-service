const extend = require('js-base/core/extend');
const DialogsLib = require("lib/ui/dialogs");
const ListViewItem = require('sf-core/ui/listviewitem');
const Image = require("sf-core/ui/image");
const ItemLeaveManagement = require('../../../components/ItemLeaveManagement');
const MockService = require("../../../objects/MockService");
const PageDesign = require("../../../ui/ui_pgLeaveManagement");
const Router = require("sf-core/router");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.approvedList = [];
        this.waitingList = [];
        this.rejectedList = [];
        this.data = this.approvedList;
        
        initListView(this.listView, this);
        initTopTabBar.call(this);
        initHeaderBar.call(this);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.approvedList = MockService.getApprovedLeaveRequests();
                this.waitingList = MockService.getWaitingLeaveRequests();
                this.rejectedList = MockService.getRejectedLeaveRequests();
                this.data = this.approvedList;
                
                this.listView.itemCount = this.data.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 3000
        });
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
}

function initListView(listView, dataHolder) {
    listView.rowHeight = 125;
    listView.itemCount = dataHolder.data.length;
    listView.refreshEnabled = false;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemLeaveManagement();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.request = dataHolder.data[index];
    };
}

function initTopTabBar() {
    this.topTabBar.items = [
        lang["pgLeaveManagement.approved"],
        lang["pgLeaveManagement.waiting"],
        lang["pgLeaveManagement.rejected"]
    ];
    this.topTabBar.onChanged = function(index) {
        var lists = [this.approvedList, this.waitingList, this.rejectedList];
        this.data = lists[index];
        this.listView.itemCount = this.data.length;
        this.listView.refreshData();
    }.bind(this);
}

function initHeaderBar() {
    this.layoutHeaderBar.headerBarTitle.text = lang["pgLeaveManagement.pageTitle"];
    this.layoutHeaderBar.setRightItem1({
        image: Image.createFromFile("images://icon_header_add.png"),
        onPress: function() {
            Router.go("tabs/hr/newLeaveRequest");
        }
    });
}

module && (module.exports = Page_);