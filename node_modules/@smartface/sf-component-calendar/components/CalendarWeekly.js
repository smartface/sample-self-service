/**
* Smartface Calendar Component
* @module CalendarWeekly
* @type {class}
* @copyright Smartface 2018
*/

const extend = require('js-base/core/extend');
const CalendarCore = require("./CalendarCore");
const CalendarWeeklyDesign = require('library/CalendarWeekly');
const createService = require("../services/CalendarService");
const calendarContext = require("./calendarContext");
const themeFile = require("../theme.json");
const noop = function(){};

/**
 * Calendar Component
 * 
 * @example
 * 
 * const {CalendarWeekly:Calendar} = require('@smartface/sf-component-calendar/components/CalendarWeekly');
 * const specialDaysConf = require('./specialDays.json');
 *	
 *	const myCalendar = new Calendar();
 *	
 *	// Please use after Page:onShow event.
 *	myCalendar.changeCalendar("en", "gregorian", specialDaysConf)
 *	// when user select a date
 *	myCalendar.onDaySelect = function(dateInfo){
 *	  //...
 *	}
 *	
 *	// changing calendar date
 *	myCalendar.setSelectedDate({month:2, year:2017, day:12});
 * 
 * @class
 * @param {object} options
 */
function CalendarWeekly(_super, options) {
  _super(this);

	this.styleContext = calendarContext(this, "calendar", themeFile);
	this.calendarCore = new CalendarCore();
	this._updateCalendar = this._updateCalendar.bind(this);
	this.calendarCore.subscribe(this._updateCalendar);
	this.children.navbar.onNext = this.nextMonth.bind(this);
	this.children.navbar.onPrev = this.prevMonth.bind(this);
	
  this.children.week.onDaySelected = this.selectDay.bind(this, null);
}

/**
 * Called when some days are selected.
 * 
 * @callback onDaySelect
 * @param {Calendar~DateInfoDTO} - {@link Calendar~DateInfoDTO}
 */


const CalendarWeeklyComp = extend(CalendarWeeklyDesign)(CalendarWeekly);

/**
 * Changes current to next month
 */
CalendarWeekly.prototype.nextMonth = function() {
	if(this.onBeforeMonthChange &&
		 this.onBeforeMonthChange(this.currentMonth.nextMonth.normalizedDate) === false
	){
		return;
	}
	
	if(this.currentMonth) {
		this.dispatch({
			type: "resetDays"
		});
		
		this.calendarCore.nextMonth();
		this.onMonthChange && this.onMonthChange(this.currentMonth.nextMonth.normalizedDate);
	}
};

/**
 * Selects a day by week and day index
 * 
 * @param {number} weekIndex - Calendar row index
 * @param {number} weekDayIndex - Calendar column index
 * @param {bool} notify - If fires selection event or not.
 */
CalendarWeekly.prototype.selectDay = function(weekIndex, weekDayIndex, notify=true){
	const state = this.calendarCore.getState();
	if(weekIndex === null && state.selectedDaysByIndex.length > 0){
		this.calendarCore.selectDay(state.selectedDaysByIndex[0].weekIndex, weekDayIndex);
	} else if(weekIndex !== null && weekDayIndex !== null) {
		this.calendarCore.selectDay(weekIndex, weekDayIndex);
	}
	notify && this.onDaySelect !== noop && this.onDaySelect(this.calendarCore.getState().selectedDays);
};

/**
 * Changes current to previous month
 *
 */
CalendarWeekly.prototype.prevMonth = function() {
	if(this.onBeforeMonthChange &&
		 this.onBeforeMonthChange(this.currentMonth.previousMonth.normalizedDate) === false
	){
		return;
	}
	
	if(this.currentMonth) {
		// this._updateCalendar(this._calendarService.getCalendarMonth(this.currentMonth.previousMonth.normalizedDate));
		this.dispatch({
			type: "resetDays"
		});
		this.calendarCore.prevMonth();
		this.onMonthChange && this.onMonthChange(this.currentMonth.normalizedDate);
	}
};

/**
 * Jumps to the next week. If the week is the last week then jumps to 
 * the next month and its first week.
 *
 */
CalendarWeekly.prototype.nextWeek = function(){
	this.dispatch({
		type: "resetDays"
	});
	
	this.calendarCore.nextWeek();
};

/**
 * Jumps to the previous week. If the week is the first week then jumps to 
 * the previous month and its last week.
 *
 */
CalendarWeekly.prototype.prevWeek = function(){
	this.dispatch({
		type: "resetDays"
	});
	this.calendarCore.prevWeek();
};

/**
 * Changes calendar creating new calendar data and resets view
 * 
 **Supported Calendars:**
  - CalendarTypes.HIJRI
  - CalendarTypes.GREGORIAN
 * 
 **Supported Languages:**
  - Turkish : "tr"
  - German : "de"
  - French : "fr"
  - Arabic: "ar"
  - Arabic (Saudi): "ar-sa"
  - Dutch : "nl"
   and all languages that are supported by [moment.js](https://github.com/moment/moment/tree/develop/locale)
 * 
 * @param {string} [lang="en"] - Language code like 'en, en-US, tr, ar-SA etc.'
 * @param {string} [type="gregorian"] - Calendar type, values can only be gregorian or hijri.
 * @param {(object|null)} [specialDays=null] - Specialdays objects
 */
CalendarWeekly.prototype.changeCalendar = function(lang = "en", type = "gregorian", specialDays = null) {
	this.dispatch({
		type: "changeCalendar",
		lang: lang
	});
	
	this.calendarCore.changeCalendar(lang, type, specialDays);
};

CalendarWeekly.prototype._setDate = function(date) {
	this.dispatch({
		type: "resetDays"
	});
	
	this.calendarCore.setDate(date);
};


/**
 * Sets calendar date and highlight the day
 * @param {Calendar~DateDTO} date
 */
CalendarWeekly.prototype.setSelectedDate = function(date) {
	this.dispatch({
		type: "resetDays"
	});
	this.calendarCore.setSelectedDate(date);
};

CalendarWeekly.prototype._selectDay = function(currentWeek, {weekIndex, weekDayIndex}) {
	weekIndex === currentWeek 
	&& weekIndex >= 0 
	&& weekDayIndex != null
	&& this.children.week.setSelectedIndex(weekDayIndex);
};

/**
 * Subscribes to calendar-core and renders calendar when state is changed
 * @private
 * @param {object} oldState
 * @param {object} newState
 */
CalendarWeekly.prototype._updateCalendar = function(oldState, newState){
	this.currentMonth = newState.month;
	this.children.week.setDays(newState.month.days[newState.weekIndex]);

	if(newState.month !== oldState.month){
		this.children.navbar.setLabel(newState.month.longName+" "+newState.month.localeDate.year);
		newState.month.daysMin.forEach(function(day, index) {
			this.children.calendarDays.children["dayName_" + index].text = day;
		}.bind(this));
	}
	
	newState.selectedDaysByIndex.map(newState.rangeSelectionMode === -1 
		? this._selectDay.bind(this, newState.weekIndex)
		: this._selectDayasRange.bind(this)
	);
};

module && (module.exports = CalendarWeeklyComp);
