const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemEmploymentHistory = require('../../../components/ItemEmploymentHistory');
const MockService = require('../../../objects/MockService');
const Employment = require('../../../objects/Employment');

var PageDesign = require("../../../ui/ui_pgEmploymentHistory");

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
	this.layoutHeaderBar.children.headerBarTitle.text = lang["pgEmploymentHistory.pageTitle"];
    
    this.employmentHistoryList = MockService.getEmploymentHistory();

    this.listView.rowHeight = 360;
    this.listView.itemCount = this.employmentHistoryList.length;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var employmentItem = new ItemEmploymentHistory();
        employmentItem.id = 200;
        myListViewItem.item = employmentItem;
        myListViewItem.addChild(employmentItem);
        return myListViewItem;
    };
    
    this.listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.employment = this.employmentHistoryList[index];
    }.bind(this);
}

module && (module.exports = Page_);