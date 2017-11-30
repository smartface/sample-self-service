/* globals lang */
const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const DialogsLib = require("lib/ui/dialogs");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemEmploymentHistory = require('../../../components/ItemEmploymentHistory');
const employmentHistory = require('../../../model/employment-history');
const Employment = require('../../../objects/Employment');
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");

var PageDesign = require("../../../ui/ui_pgEmploymentHistory");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
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
        employmentHistory.getEmploymentHistory(function(err, employmentHistory) {
            if (err)
                return alert("getEmploymentHistory error"); //TODO: lang
            this.employmentHistoryList.slice(0);
            Array.prototype.push.apply(this.employmentHistoryList,
                employmentHistory);
            this.listView.itemCount = this.employmentHistoryList.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
        }.bind(this));
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgEmploymentHistory.pageTitle"];
}

var itemIndex = 0;

function initListView(listView, data) {
    listView.rowHeight = 350;
    listView.itemCount = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var employmentItem = new ItemEmploymentHistory();
        employmentItem.id = 234;
        myListViewItem.item = employmentItem;
        this.dispatch(addChild("item" + (++itemIndex), myListViewItem));
        myListViewItem.addChild(employmentItem, "employment_"+itemIndex, "", function(style){
            style.width = null;
            
            return style;
        });
        return myListViewItem;
    };

    listView.onRowBind = function(listViewItem, index) {
        var item = listViewItem.findChildById(234);
        item.employment = data[index];
    };

    listView.onPullRefresh = function() {
        listView.stopRefresh();
    };
}

module && (module.exports = Page_);
