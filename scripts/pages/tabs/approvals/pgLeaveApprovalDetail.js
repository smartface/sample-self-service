/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const PageDesign = require("../../../ui/ui_pgLeaveApprovalDetail");
const backAction = require("../../../lib/ui/back-action");
const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this._superOnShow = this.onShow;
		this.onShow = onShow.bind(this);
		initTexts.call(this);
    }
);

function onShow(detail) {
	if (typeof this._superOnShow === "function") this._superOnShow();
	initHeaderBar.call(this);
	detail && initDetail.call(this, detail);
	backAction(this);
}

function initTexts() {
	this.txtDescription.hint = lang["pgLeaveApprovalDetail.description"];
	this.lblDescription.text = lang["pgLeaveApprovalDetail.description"];
}

function initHeaderBar() {
	this.headerBar.itemColor = Color.WHITE;
	this.headerBar.title = lang["pgLeaveApprovalDetail.pageTitle"];
}

function initDetail(detail) {
		this.name.text     = detail.name;
		this.avatar.image  = detail.image;
		this.position.text = detail.position;

		// this.txtDescription.flexGrow = (detail.isApproved)? 0 : 1;
		// this.lblDescription.flexGrow = (detail.isApproved)? 1 : 0;

		this.btnApprove.visible = !detail.isApproved;
		this.btnReject.visible  = !detail.isApproved;
}

module && (module.exports = Page_);