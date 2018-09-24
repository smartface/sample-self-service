/*globals lang*/
const extend = require('js-base/core/extend');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewLeaveRequest");
const Router = require("sf-core/router");
const Dialog = require('sf-core/ui/dialog');
const FlexLayout = require('sf-core/ui/flexlayout');
const Screen = require('sf-core/device/screen');
const Calendar = require("@smartface/sf-component-calendar/components/Calendar");
const Button = require('sf-core/ui/button');
const Picker = require("sf-core/ui/picker");

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


function onLoad(parentOnLoad) {
	parentOnLoad();
	
	this.ios.safeAreaLayoutMode = true;

}

function onShow(parentOnShow) {
	if (typeof parentOnShow === "function") parentOnShow();
	this.headerBar.title = lang["pgNewLeaveRequest.pageTitle"];
	this.headerBar.itemColor = Color.WHITE;
	this.itemSpeech.page = this;
	this.itemSpeech.inputField = this.textbox1;
	this.btnRequest.onPress = function() {
		Router.goBack();
	};
}

function onLoad(parentOnLoad) {
	if (typeof parentOnLoad === "function") parentOnLoad();
	
    var items = [
        "Annual Leave",
        "Medical Leave",
        "Family Leave",
        "Personal Leave",
        "Maternity/Paternity Leave",
        "Administrative Leave",
        "Civic Duty",
        "Other"
    ];
    var myPicker = new Picker({
        items: items,
        index: 0
    });
    var okCallback = function(e) {
    	self.leaveTypePicker.pickerText.text = items[e.index];
    }
    var cancelCallback = function() {};
        
	var self = this;
    var myDialog = new Dialog();
	myDialog.layout.backgroundColor = Color.create(70,0,0,0);
	
	var margin = 30;
	const myCalendar = new Calendar();
	myCalendar.left = margin
	var height = Screen.width - margin*2;
	myCalendar.width = Screen.width - margin*2;
	myCalendar.height = height;
	var top = (Screen.height - (Screen.width - margin*2))/3;
	myCalendar.top = top;
	myCalendar.changeCalendar("en","gregorian",{});
	var selectedDate;
	myCalendar.onRangeSelectionComplete = function(startDate,endDate){
		console.log("111!!");
	  selectedDate = startDate.date.day + "/" +  startDate.date.month + "/" + startDate.date.year + " - " + endDate.date.day + "/" +  endDate.date.month + "/" + endDate.date.year
		console.log("selectedDate : " + selectedDate);
	}
	const newMonthLabelColorStyle = {
	  ".calendar":{
	    ".header":{
	      "&_navbar":{
	        "&_monthLabel":{
	          "textColor": "#1775d0"
	        }
	      }
	    },
	    ".day":{
	      "&-selected":{
	        "backgroundColor":"#2284e2",
	        "textColor":"#000000"
	      }
	    }
	  }
	};
	myCalendar.addStyles(newMonthLabelColorStyle);
	
	myDialog.layout.addChild(myCalendar);
    
    var buttonSelect = new Button();
    buttonSelect.height = 60;
    buttonSelect.width = Screen.width - margin*2;;
    buttonSelect.left = margin;
    buttonSelect.text = lang["pgNewLeaveRequest.selectDate"];
    buttonSelect.top = top + height - 10;
    buttonSelect.backgroundColor = Color.WHITE;
    buttonSelect.textColor = Color.create(23,117,208);
    buttonSelect.onPress = function(){
    	if (selectedDate) {
    		self.selectDatePicker.pickerText.text = selectedDate;
    	}else{
    		self.selectDatePicker.pickerText.text = "";
    	}
    	myDialog.hide();
    }
    myDialog.layout.addChild(buttonSelect);
    
    var buttonCancel= new Button();
    buttonCancel.height = 60;
    buttonCancel.width = Screen.width - margin*2;;
    buttonCancel.left = margin;
    buttonCancel.text = lang["cancel"];
    buttonCancel.top = top + height + - 5;
    buttonCancel.backgroundColor = Color.create(23,117,208);
    buttonCancel.onPress = function(){
    	myDialog.hide();
    };
    buttonCancel.textColor = Color.WHITE;
    myDialog.layout.addChild(buttonCancel);
    
    myDialog.layout.applyLayout();
    
	this.flexDate.onTouchEnded = function(){
		myDialog.show();
	};
	
	this.flexType.onTouchEnded = function(){
		myPicker.show(okCallback, cancelCallback);
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