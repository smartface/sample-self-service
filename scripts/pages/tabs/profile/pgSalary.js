const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemPerformance = require('../../../components/ItemSalary');
const PageDesign = require("../../../ui/ui_pgSalary");


const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
			//onLoad: onLoad.bind(this),
		});
		this.onShow = onShow.bind(this, this.onShow.bind(this))

});


function onShow(parentOnShow) {
    parentOnShow()

    this.listView.rowHeight = 195;
    this.listView.itemCount = 100;
    
    this.listView.onRowCreate = function() {
            var myListViewItem = new ListViewItem();
            var item = new ItemPerformance();
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