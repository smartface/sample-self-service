/*globals lang*/
const extend = require("js-base/core/extend");
const PageDesign = require("../../../ui/ui_pgOutOfOffice");
const ScrollView = require("sf-core/ui/scrollview");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad);
		
		wrapContentIntoScroll.call(this);
		initTexts.call(this);
		
        this.onError = function(e){
            console.log(e.message);
        }
});

function onLoad(parentOnLoad) {
    if (typeof parentOnLoad === "function") parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgOutOfOffice.pageTitle"];
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1
	});
	this.layout.removeChild(this.mainContainer);
	this.scrollView.addChild(this.mainContainer);
	this.layout.addChild(this.scrollView);
}

function initTexts() {
	this.internal.setText(lang["pgOutOfOffice.internal"]);
	this.external.setText(lang["pgOutOfOffice.external"]);
	this.outOfOffice.setText(lang["pgOutOfOffice.outOfOffice"]);
	this.noteTitle.text = lang["pgOutOfOffice.noteTitle"];
	this.intExtTitle.text = lang["pgOutOfOffice.intExtTitle"];
	this.startTitle.text = lang["pgOutOfOffice.startTitle"];
	this.endTitle.text = lang["pgOutOfOffice.endTitle"];
	this.startDatePicker.pickerTitle.text = lang["pgOutOfOffice.startDate"];
	this.startTimePicker.pickerTitle.text = lang["pgOutOfOffice.startTime"];
	this.endDatePicker.pickerTitle.text = lang["pgOutOfOffice.endDate"];
	this.endTimePicker.pickerTitle.text = lang["pgOutOfOffice.endTime"];
	this.description.hint = lang["pgOutOfOffice.description"];
}

module && (module.exports = Page_);