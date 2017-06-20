/*globals lang*/
const extend = require('js-base/core/extend');
const Image = require("sf-core/ui/image");
const ListViewItem = require('sf-core/ui/listviewitem');
const Router = require("sf-core/router");
const MockService = require('../../../objects/MockService');
const PageDesign = require("../../../ui/ui_pgEmployeeDirectory");
const ItemUser = require('../../../components/ItemUser');
const DialogsLib = require("lib/ui/dialogs");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));

		this.users = [];
		initListView(this.listView, this.users);
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
                this.users.slice(0);
                Array.prototype.push.apply(this.users, MockService.getUsers());
                this.listView.itemCount = this.users.length;
                this.listView.refreshData();
                DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            }.bind(this),
            delay: 1000
        });
        firstOnShow = false;
    }
}

function initListView(listView, data) {
    listView.rowHeight = 75;
    listView.itemCount = data.length;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemUser();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.user = data[index];
    };
    
    listView.onRowSelected = function() {
    }
}

function initHeaderBar() {
    this.layoutHeaderBar.headerBarTitle.text = lang["pgEmployeeDirectory.pageTitle"];
    this.layoutHeaderBar.setRightItem1({
        image: Image.createFromFile("images://icon_header_dots.png")
    });
    this.layoutHeaderBar.setRightItem2({
        image: Image.createFromFile("images://icon_header_search.png")
    });
}

module && (module.exports = Page_);