/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const ScrollView = require("sf-core/ui/scrollview");

const PageDesign = require("../../../ui/ui_pgProfileDetail");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	});
	
	function onShow(parentOnShow) {
    parentOnShow();
    swipeViewIndex.currentIndex = 4;
}

function initTexts() {
	this.email.title.text = lang["pgProfileDetail.email"];
	this.company.title.text = lang["pgProfileDetail.company"];
	this.workPhone.title.text = lang["pgProfileDetail.workPhone"];
	this.informationTitle.text = lang["pgProfileDetail.information"];
	this.mobilePhone.title.text = lang["pgProfileDetail.mobilePhone"];
	this.hierarchyfl.hc_header.text = lang["pgProfileDetail.organization"];
	this.layoutHeaderBar.headerBarTitle.text = lang["pgProfileDetail.pageTitle"];

	this.email.value.text = "anthony.bell@aacompany.com";
	this.company.value.text = "AA Company";
	this.workPhone.value.text = "+1-202-555-0167";
	this.mobilePhone.value.text = "+1-202-555-0125";
}

function onLoad(superOnLoad) {
	superOnLoad();
	wrapContentIntoScroll.call(this);

	initTexts.call(this);
	this.hierarchyfl.hierachyScroll.layout.width = 390;
	this.headerBar.itemColor = Color.WHITE;
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1
	});
	this.layout.removeChild(this.flexlayout500);
	this.scrollView.layout.addChild(this.flexlayout500);
	this.layout.addChild(this.scrollView);
}

module && (module.exports = Page_);
