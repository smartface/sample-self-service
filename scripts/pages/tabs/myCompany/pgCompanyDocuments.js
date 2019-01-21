/*globals lang*/
const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
// const Router = require("sf-core/router");
const companyDocuments = require('../../../model/company-documents');
const PageDesign = require("../../../ui/ui_pgCompanyDocuments");
const ItemDocument = require('../../../components/ItemDocument');
const DialogsLib = require("lib/ui/dialogs");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");
const ListView = require('sf-core/ui/listview');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require("sf-core/ui/color");

var loadingIndicator = DialogsLib.createLoadingDialog();

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        this.onShow = onShow.bind(this, this.onShow.bind(this));

        this.documents = [];
        Object.assign(
            this.listView,
            initListView(this.documents), {
                rowHeight: 75,
                itemIndex: 0,
                refreshEnabled: false
            });
        initHeaderBar.call(this);
    }
);

var firstOnShow = true;

function onShow(parentOnShow) {
    parentOnShow();
    swipeViewIndex.currentIndex = 4;

    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        companyDocuments.getCompanyDocuments(function(err, documents) {
            if (err)
                return alert("getCompanyDocuments error"); //TODO: lang
            this.documents.slice(0);
            Array.prototype.push.apply(this.documents, documents);
            this.listView.itemCount = this.documents.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
        }.bind(this));
        firstOnShow = false;
    }
}

function initListView(data) {
    return {
        itemCount: data.length,
        from(props) {
            return Object.assign(new ListView(), initListView(data), props);
        },
        reset() {
            this.dispatch({
                type: "removeChildren"
            });

            return Object.assign(this, initListView(data));
        },
        dispose() {
            this.dispatch({
                type: "removeChildren"
            });

            delete this.onRowCreate;
            delete this.onRowBind;
            delete this.items;
            delete this.clear;
            delete this.dispose;
            delete this.from;
        },
        onRowCreate() {
            var myListViewItem = new ListViewItem();
            var item = new ItemDocument();
            item.id = 200;
            this.dispatch(addChild("item" + (++this.itemIndex), myListViewItem));
            myListViewItem.addChild(item, "child", "", style => {
                style.width = null;
                return style;
            });

            return myListViewItem;
        },
        onRowBind(listViewItem, index) {
            var item = listViewItem.findChildById(200);
            item && (item.data = data[index]);
        },
        onRowSelected() {
            Router.go("tabs/myCompany/documentDetail");
        }
    };
}

function initHeaderBar() {
    this.layoutHeaderBar.headerBarTitle.text = lang["pgCompanyDocuments.pageTitle"];
}

module && (module.exports = Page_);
