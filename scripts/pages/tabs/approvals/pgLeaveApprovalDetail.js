/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const PageDesign = require("../../../ui/ui_pgLeaveApprovalDetail");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow);
		initTexts.call(this);
    }
);

function onShow(parentOnShow) {
	if (typeof parentOnShow === "function") parentOnShow();
	initHeaderBar.call(this);
}

function initTexts() {
	this.description.hint = lang["pgLeaveApprovalDetail.description"];
}

function initHeaderBar() {
	this.headerBar.itemColor = Color.WHITE;
	this.headerBar.title = lang["pgLeaveApprovalDetail.pageTitle"];
}

module && (module.exports = Page_);