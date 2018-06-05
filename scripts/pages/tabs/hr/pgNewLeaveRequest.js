/*globals lang*/
const extend = require('js-base/core/extend');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewLeaveRequest");
const Router = require("sf-core/router");
const Dialog = require('sf-core/ui/dialog');
const FlexLayout = require('sf-core/ui/flexlayout');
const Screen = require('sf-core/device/screen');
const Calendar = require("@smartface/sf-component-calendar/components/Calendar");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow);
		this.onLoad = onLoad.bind(this, this.onLoad);
		initTexts.call(this);
		
        this.onError = function(e){
            console.log(e.message);
        }
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

function onLoad(parentOnLoad) {
	if (typeof parentOnLoad === "function") parentOnLoad();
    var myDialog = new Dialog();
    myDialog.layout.alignItems = FlexLayout.AlignItems.CENTER;
    myDialog.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
	
	var margin = 30;
	const myCalendar = new Calendar();
	myCalendar.left = margin
	myCalendar.width = Screen.width - margin*2;
	myCalendar.height = Screen.width - margin*2;
	myCalendar.top = (Screen.height - (Screen.width - margin*2))/2;
	myDialog.layout.addChild(myCalendar);
	myDialog.layout.alpha = 0.1;
    myDialog.layout.applyLayout();
    myCalendar.changeCalendar("en","gregorian",{});
	this.flexDate.onTouchEnded = function(){
		myDialog.show();
	};
}

function initTexts() {
	this.informationTitle.text = lang["pgNewLeaveRequest.workInformation"];
	this.leaveTypePicker.pickerTitle.text = lang["pgNewLeaveRequest.leaveType"];
	// this.timeTypePicker.pickerTitle.text = lang["pgNewLeaveRequest.timeType"];
	this.selectDatePicker.pickerTitle.text = lang["pgNewLeaveRequest.selectDate"];
	// this.selectTimePicker.pickerTitle.text = lang["pgNewLeaveRequest.selectTime"];
}

module && (module.exports = Page_);