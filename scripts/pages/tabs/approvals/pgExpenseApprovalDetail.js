/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const PageDesign = require("../../../ui/ui_pgExpenseApprovalDetail");
const ScrollView = require("sf-core/ui/scrollview");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow);
		initTexts.call(this);
		wrapContentIntoScroll.call(this);
    }
);

function onShow(parentOnShow) {
	if (typeof parentOnShow === "function") parentOnShow();
	initHeaderBar.call(this);
}

function initTexts() {
}

function initHeaderBar() {
	this.headerBar.itemColor = Color.WHITE;
	this.headerBar.title = lang["pgLeaveApprovalDetail.pageTitle"];
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.mainLayout);
	this.scrollView.addChild(this.mainLayout);
	this.layout.addChild(this.scrollView);
}

module && (module.exports = Page_);