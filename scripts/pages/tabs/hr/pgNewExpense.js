const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const PageDesign = require("../../../ui/ui_pgNewExpense");
const Router = require("sf-core/router");
const ScrollView = require("sf-core/ui/scrollview");
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		initColors.call(this);
	}
);

function initColors() {
	changeInputColorsToDark(this.titleInput);
	changeInputColorsToDark(this.expenseInput);
	
	function changeInputColorsToDark(inputLayout) {
		inputLayout.textboxInfo.textColor = Color.create("#4A4A4A");
		inputLayout.innerTextbox.textColor = Color.create("#000000");
		inputLayout.textboxBottomLine.backgroundColor = Color.create("#D6D6D6");	
	}
}

function initTexts() {
	this.headerBar.title = lang["pgNewExpense.pageTitle"];
	this.detailsTitle.text = lang["pgNewExpense.details"];
	this.titleInput.textboxInfo.text = lang["pgNewExpense.details.title"];
	this.expenseInput.textboxInfo.text = lang["pgNewExpense.details.expense"];
	this.typePicker.pickerTitle.text = lang["pgNewExpense.details.type"];
	this.expenseDatePicker.pickerTitle.text = lang["pgNewExpense.details.expenseDate"];
	this.noteTitle.text = lang["pgNewExpense.note"];
	this.description.hint = lang["pgNewExpense.note.description"];
	this.fileAttachmentTitle.text = lang["pgNewExpense.fileAttachment"];
	this.requestButton.text = lang["pgNewExpense.request"];
}

function onLoad(superOnLoad) {
	typeof superOnLoad === "function" && superOnLoad();
	wrapContentIntoScroll.call(this);
	
	initTexts.call(this);
	this.headerBar.itemColor = Color.WHITE;
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.mainContainer);
	this.scrollView.addChild(this.mainContainer);
	this.layout.addChild(this.scrollView);
} 

module && (module.exports = Page_);