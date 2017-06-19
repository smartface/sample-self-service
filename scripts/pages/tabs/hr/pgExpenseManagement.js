const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const DialogsLib = require("lib/ui/dialogs");
const FloatingMenu = require("sf-core/ui/floatingmenu");
const Image = require("sf-core/ui/image");
const ItemExpense = require('../../../components/ItemExpense');
const ListViewItem = require('sf-core/ui/listviewitem');
const MockService = require("../../../objects/MockService");
const PageDesign = require("../../../ui/ui_pgExpanseManagement");
const Router = require("sf-core/router");
const System = require("sf-core/device/system");
const Timer = require("sf-core/timer");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.expenseList = [];
		initListView.call(this);
		initFloatingMenu.call(this);
    }
);

var firstOnShow = true;
function onShow(parentOnShow) {
    parentOnShow();
    
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        Timer.setTimeout({
            task: function() {
                this.expenseList = MockService.getExpenses();
                this.listView.itemCount = this.expenseList.length;
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
    this.layoutHeaderBar.children.headerBarTitle.text = lang["pgExpenseManagement.pageTitle"];
}

function initListView() {
    this.listView.rowHeight = 75;
    this.listView.itemCount = this.expenseList.length;
    this.listView.refreshEnabled = false;
    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemExpense();
        item.id = 200;
        myListViewItem.item = item;
        myListViewItem.addChild(item);
        return myListViewItem;
    };
    
    this.listView.onRowBind = function(listViewItem, index) {
        listViewItem.item.expense = this.expenseList[index];
    }.bind(this);
    
    this.listView.onRowSelected = function() {
        Router.go("tabs/hr/newExpense");
    };
}

function initFloatingMenu() {
    var titleColor = System.OS === "Android" ? Color.create("#1775D0") : Color.WHITE;
    var items = [
        new FloatingMenu.Item({
            title: "Food",
            titleColor: titleColor
        }),
        new FloatingMenu.Item({
            title: "Travel",
            titleColor: titleColor
        }),
        new FloatingMenu.Item({
            title: "Taxi",
            titleColor: titleColor
        })
    ];
        
    this.floatingMenu = new FloatingMenu({
        items: items,
        icon: Image.createFromFile("images://icon_add_white.png")
    });
    this.layout.addChild(this.floatingMenu);
}

module && (module.exports = Page_);