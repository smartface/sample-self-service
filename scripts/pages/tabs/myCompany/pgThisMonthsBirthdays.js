/*globals lang*/
const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const user = require('../../../model/user');
const PageDesign = require("../../../ui/ui_pgThisMonthsBirthdays");
const ItemBirthday = require('../../../components/ItemBirthday');
const DialogsLib = require("lib/ui/dialogs");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
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
    swipeViewIndex.currentIndex = 2;
    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        user.getUsers(function(err, users) {
            if (err)
                return alert("getUsers error"); //TODO: lang
            this.users.slice(0);
            Array.prototype.push.apply(this.users, users);
            this.listView.itemCount = this.users.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
        }.bind(this));
        firstOnShow = false;
    }
}

function initListView(listView, data) {
    listView.rowHeight = 75;
    listView.itemCount = data.length;
    listView.refreshEnabled = false;
    var itemIndex = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemBirthday();
        item.id = 20099;
        myListViewItem.item = item;
        this.dispatch(addChild("item" + (++itemIndex), myListViewItem));
        myListViewItem.addChild(item, "child", "", style => {
            style.width = null;
            return style;
        });
        return myListViewItem;
    };

    listView.onRowBind = function(listViewItem, index) {
        listViewItem.findChildById(20099).user = data[index];
    };

    listView.onRowSelected = function() {}
}

function initHeaderBar() {
    this.layoutHeaderBar.headerBarTitle.text = lang["pgThisMonthsBirthdays.pageTitle"];
}

module && (module.exports = Page_);
