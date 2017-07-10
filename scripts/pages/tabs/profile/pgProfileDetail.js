/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const ScrollView = require("sf-core/ui/scrollview");

const PageDesign = require("../../../ui/ui_pgProfileDetail");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
});

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgProfileDetail.pageTitle"];
	this.informationTitle.text = lang["pgProfileDetail.information"];
	this.company.title.text = lang["pgProfileDetail.company"];
	this.email.title.text = lang["pgProfileDetail.email"];
	this.workPhone.title.text = lang["pgProfileDetail.workPhone"];
	this.mobilePhone.title.text = lang["pgProfileDetail.mobilePhone"];
	this.hierarchyController.hc_header.text = lang["pgProfileDetail.organization"];
}

function onLoad(superOnLoad) {
	superOnLoad();
	wrapContentIntoScroll.call(this);
	
	initTexts.call(this);
	this.headerBar.itemColor = Color.WHITE;
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.flexlayout500);
	this.scrollView.addChild(this.flexlayout500);
	this.layout.addChild(this.scrollView);
} 

module && (module.exports = Page_);