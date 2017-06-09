const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const ListViewItem = require('sf-core/ui/listviewitem');
const MockService = require('../../../objects/MockService');
const Salary = require('../../../objects/Salary');
const ItemSalary = require('../../../components/ItemSalary');
const PageDesign = require("../../../ui/ui_pgSalary");

const Page_ = extend(PageDesign)(
	function(_super){
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
	this.layoutHeaderBar.children.headerBarTitle.text = lang["pgSalary.pageTitle"];
    
    this.salaryList = MockService.getSalaryList();
    this.listView.rowHeight = 80;
    this.listView.itemCount = this.salaryList.length;

    this.listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var salaryItem = new ItemSalary();
        salaryItem.id = 200;
        myListViewItem.item = salaryItem;
        myListViewItem.addChild(salaryItem);
        return myListViewItem;
    };
    
    this.listView.onRowBind = function(listViewItem, index) {
            listViewItem.item.salary = this.salaryList[index];
    }.bind(this);
}

module && (module.exports = Page_);