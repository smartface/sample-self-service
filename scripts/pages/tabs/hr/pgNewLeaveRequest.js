/*globals lang*/
const extend = require('js-base/core/extend');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewLeaveRequest");
const Router = require("sf-core/router");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow);
		
		initTexts.call(this);
	}
);

function onShow(parentOnShow) {
	if (typeof parentOnShow === "function") parentOnShow();
	this.headerBar.title = lang["pgNewLeaveRequest.pageTitle"];
	this.headerBar.itemColor = Color.WHITE;
	this.itemSpeech.page = this;
	this.itemSpeech.inputField = this.textbox1;
	this.btnRequest.onPress = function() {
		//Router.goBack("tabs/hr/leaveManagement");
	};
}

function initTexts() {
	this.informationTitle.text = lang["pgNewLeaveRequest.workInformation"];
	this.leaveTypePicker.pickerTitle.text = lang["pgNewLeaveRequest.leaveType"];
	this.timeTypePicker.pickerTitle.text = lang["pgNewLeaveRequest.timeType"];
	this.selectDatePicker.pickerTitle.text = lang["pgNewLeaveRequest.selectDate"];
	this.selectTimePicker.pickerTitle.text = lang["pgNewLeaveRequest.selectTime"];
}

module && (module.exports = Page_);