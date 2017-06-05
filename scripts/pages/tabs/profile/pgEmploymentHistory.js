const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemEmploymentHistory = require('../../../components/ItemEmploymentHistory');


var PageDesign = require("../../../ui/ui_pgEmploymentHistory");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this),
			onShow : onShow.bind(this)
			
		});
});

function onLoad() { 
    this.headerBar.visible = true;
    this.headerBar.title = "pgEmploymentHistory";
    this.headerBar.titleColor = Color.create("#000000");
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
}

function onShow() {
    

    this.listView.rowHeight = 200;
    this.listView.itemCount = 100;
    
    this.listView.onRowCreate = function() {
            var myListViewItem = new ListViewItem();
            var item = new ItemEmploymentHistory();
            item.id = 200;

            myListViewItem.addChild(item);
            return myListViewItem;
        };
    this.listView.onRowBind = function(listViewItem, index) {
            // var myLabelTitle = listViewItem.findChildById(102);
            // myLabelTitle.text = myDataSet[index].title;
            // myLabelTitle.backgroundColor = myDataSet[index].backgroundColor;
        };

    
}

module && (module.exports = Page_);