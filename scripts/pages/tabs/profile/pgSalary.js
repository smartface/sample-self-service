/*globals lang*/
const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const salary = require('../../../model/salary');
const ItemSalary = require('../../../components/ItemSalary');
const PageDesign = require("../../../ui/ui_pgSalary");
const DialogsLib = require("lib/ui/dialogs");
var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    function(_super) {
        _super(this);
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        // Don't change array object, you may alter it
        this.salaryList = [];
        initListView(this.listView, this.salaryList);
    }
);

var firstOnShow = true;

function onShow(parentOnShow) {
    parentOnShow();

    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        salary.getSalaryList(function(err, salaryList) {
            if (err)
                return alert("getSalaryList error"); //TODO: lang
            this.salaryList.slice(0);
            Array.prototype.push.apply(this.salaryList, salaryList);
            this.listView.itemCount = this.salaryList.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
        }.bind(this));
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgSalary.pageTitle"];
}

function initListView(listView, data) {
    listView.itemCount = 0;
    listView.rowHeight = 80;
    listView.refreshEnabled = false;

    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var salaryItem = new ItemSalary();
        salaryItem.id = 200;
        myListViewItem.addChild(salaryItem);
        return myListViewItem;
    };

    listView.onRowBind = function(listViewItem, index) {
        var salaryItem = listViewItem.findChildById(200);
        salaryItem.salary = data[index];
    };
}

module && (module.exports = Page_);
