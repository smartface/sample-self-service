/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const PageDesign = require("../../../ui/ui_pgExpenseApprovalDetail");
const ScrollView = require("sf-core/ui/scrollview");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, router, routeData) {
		// Initalizes super class for this page scope
		_super(this);
		this._superOnShow = this.onShow;
		this.onShow = onShow.bind(this, this.onShow);
		this.onLoad = onLoad.bind(this, this.onLoad);
	}
);

function onLoad(parentOnLoad) {
	if (typeof parentOnLoad === "function") parentOnLoad();
	wrapContentIntoScroll.call(this);

	this.ios.safeAreaLayoutMode = true;
}

function onShow() {
	console.log("onShow")
	console.info(this.routeData)
	if (typeof this._superOnShow === "function") this._superOnShow();
	initHeaderBar.call(this);
	initTexts.call(this, this.routeData);
}

function initTexts(detail) {
	this.titleItem.title.text = lang["pgExpenseApprovalDetail.title"];
	this.titleItem.value.text = "-";
	this.typeItem.title.text = lang["pgExpenseApprovalDetail.type"];
	this.typeItem.value.text = "-";
	this.expenseItem.title.text = lang["pgExpenseApprovalDetail.expense"];
	this.expenseItem.value.text = "$1,500.30";
	this.expenseDateItem.title.text = lang["pgExpenseApprovalDetail.expenseDate"];
	this.expenseDateItem.value.text = "03 May 2017";
	this.fileTitle.text = lang["pgExpenseApprovalDetail.file"];
	this.noteTitle.text = lang["pgExpenseApprovalDetail.note"];
	this.detailsTitle.text = lang["pgExpenseApprovalDetail.details"];
	this.approve.text = lang["pgExpenseApprovalDetail.approve"];
	this.reject.text = lang["pgExpenseApprovalDetail.reject"];
	this.note.text = "-";

	if (detail) {
		this.approve.visible = !detail.isApproved;
		this.reject.visible = !detail.isApproved;

		this.avatar.image = detail.image;
		this.name.text = detail.name;
		this.position.text = detail.position;
	}
}

function initHeaderBar() {
	this.headerBar.itemColor = Color.WHITE;
	this.headerBar.title = lang["pgExpenseApprovalDetail.pageTitle"];
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1
	});
	const FlexLayout = require('sf-core/ui/flexlayout');
	var mainLayout = new FlexLayout({
		flexGrow: 1
	});
	this.scrollView.layout.addChild(mainLayout, "mainLayout", ".flexlayout", {
		width: null,
		height: 810
	});
	this.layout.addChild(this.scrollView, "scrollView", "", {
		flexGrow: 1,
		width: null
	});
}

module && (module.exports = Page_);
