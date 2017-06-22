/*globals lang*/
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const DatePicker = require('sf-core/ui/datepicker');
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const ItemFile = require("components/ItemFile");
const Multimedia = require("sf-core/device/multimedia");
const PageDesign = require("../../../ui/ui_pgNewExpense");
const Picker = require("sf-core/ui/picker");
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
		initCallbacks.call(this);
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
	this.titleInput.innerTextbox.text = "";
	this.expenseInput.textboxInfo.text = lang["pgNewExpense.details.expense"];
	this.expenseInput.innerTextbox.text = "";
	this.typePicker.pickerTitle.text = lang["pgNewExpense.details.type"];
	this.expenseDatePicker.pickerTitle.text = lang["pgNewExpense.details.expenseDate"];
	this.noteTitle.text = lang["pgNewExpense.note"];
	this.description.hint = lang["pgNewExpense.note.description"];
	this.fileAttachmentTitle.text = lang["pgNewExpense.fileAttachment"];
	this.requestButton.text = lang["pgNewExpense.request"];
}

function initCallbacks() {
	this.typePicker.onTouchEnded = onTypePickerPressed.bind(this);
	this.expenseDatePicker.onTouchEnded = onExpenseDatePickerPressed.bind(this);
	this.addFile.onTouchEnded = onAddFilePressed.bind(this);
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

var typeCurrentIndex = 0;
function onTypePickerPressed() {
	var items = [
	    "Food",
	    "Hotel",
	    "Travel",
	    "Taxi",
	    "Health"
	];

	var picker = new Picker({
	    items: items,
	    currentIndex: typeCurrentIndex
	});
	picker.show(onSelected.bind(this));
	
	function onSelected (params) {
		typeCurrentIndex = params.index;
	    this.typePicker.pickerText.text = items[typeCurrentIndex];
	}
}

var datePicker = new DatePicker();
var expenseDate = null;
function onExpenseDatePickerPressed() {
	if (expenseDate !== null) {
		datePicker.setDate(expenseDate);
	}

	datePicker.onDateSelected = function(date) {
		expenseDate = date;
		this.expenseDatePicker.pickerText.text = expenseDate.getDate() + "." + 
			(expenseDate.getMonth() + 1) + "." + expenseDate.getFullYear();
	}.bind(this);

	datePicker.show();
}

function onAddFilePressed() {
	Multimedia.pickFromGallery({
       type: Multimedia.Type.IMAGE,
       onSuccess: onSuccess.bind(this),
       page : this
    });

   function onSuccess(picked) { 
       var itemFile = new ItemFile();
       itemFile.marginLeft = 10;
       itemFile.filePreview.image = picked.image;
       this.attachmentsLayout.addChild(itemFile);
   }
}

module && (module.exports = Page_);