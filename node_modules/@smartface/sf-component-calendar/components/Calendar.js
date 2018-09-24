/**
 * Smartface Calendar Component
 * @module Calendar
 * @type {class}
 * @copyright Smartface 2018
*/

/**
 * @typedef {Object} DateDTO
 * @property {number} day
 * @property {number} month
 * @property {number} year
*/

/**
 * @typedef DayMonthInfoDTO
 * @property {string} longName
 * @property {string} shortName
 */
 
/** 
 * @typedef DayInfoDTO
 * @property {number} weekDay
 * @property {string} longName
 * @property {string} shortName
 * @property {Array.<string>} specialDay
 */ 
 
/** 
 * @typedef LocaleDateDTO
 * @property {string} day
 * @property {string} month
 * @property {string} year
 */

/** 
 * @typedef {Object} DateInfoDTO
 * @property {Calendar~LocaleDateDTO} localeDate
 * @property {Calendar~DateDTO} date
 * @property {Calendar~DayInfoDTO} dayInfo
 * @property {Calendar~DayMonthInfoDTO} daymonthInfo
 */
 
/**
 * @typedef CalendarOptions
 * @property {boolean} [useRangeSelection=true] - Activate range selection
 * @property {Object} [theme=null] - Sets custom theme
 * @property {boolean} [justCurrentDays=false] - To display only the month days
 * @property {boolean} [useContext=true] - To use internal calendar-context
 */
 
const CalendarDesign = require('library/Calendar');
const CalendarCore = require("./CalendarCore");
const extend = require('js-base/core/extend');
const calendarContext = require("./calendarContext");
const themeFile = require("../theme.json");

function getOptions({
			useRangeSelection=true,
			theme=null,
			justCurrentDays=false,
			calendarCore=null,
			useContext=true,
			useDaySelection=true
		}){
	
	return {
		useDaySelection,
		justCurrentDays,
		useRangeSelection,
		theme,
		calendarCore,
		useContext
	};
}

/**
 * Calendar Component
 * 
 * @example
 * 
 * const {Calendar} = require('@smartface/sf-component-calendar/components');
 * const specialDaysConf = require('./specialDays.json');
 *	
 * const myCalendar = new Calendar();
 *	
 * // Please use after Page:onShow event.
 * myCalendar.changeCalendar("en", "gregorian", specialDaysConf)
 * // when user select a date
 * myCalendar.onDaySelect = function(dateInfo){
 *	  //...
 * }
 *	
 * // changing calendar date
 * myCalendar.setSelectedDate({month:2, year:2017, day:12});
 * 
 * @class
 * @param {CalendarOptions} options
 */
function Calendar(_super, options) {
	_super(this);
	
	this.__options = getOptions(options || {});
	
	const {
		useRangeSelection,
		useDaySelection,
		justCurrentDays,
		theme,
		calendarCore,
		useContext
	} = this.__options;
	
	this._styleContext = useContext ? calendarContext(this, "calendar", theme || themeFile) : null;
	this._calendarCore = calendarCore || new CalendarCore();
	this._updateCalendar = this._updateCalendar.bind(this);
	this._unsubsciber = this._calendarCore.subscribe(this._updateCalendar);
	this._weeks = [];
	this._weekMode = false;
	
	this.children.navbar.onNext = this.nextMonth.bind(this);
	this.children.navbar.onPrev = this.prevMonth.bind(this);
	
	this._weeks.push(this.children.body.children.week1);
	this._weeks.push(this.children.body.children.week2);
	this._weeks.push(this.children.body.children.week3);
	this._weeks.push(this.children.body.children.week4);
	this._weeks.push(this.children.body.children.week5);
	this._weeks.push(this.children.body.children.week6);
	
	this._weeks.forEach((row, weekIndex) => {
		row.onDayLongPress = this._onLongPress.bind(this, weekIndex);
		if(useDaySelection !== false) {
			row.onDaySelect = this.selectDay.bind(this, weekIndex);
		} 
		
		if(useRangeSelection !== false) {
			row.onDayLongPress = (weekDayIndex) => {
				this._onSelectRange(weekIndex, weekDayIndex);
				this._onLongPress(weekIndex, weekDayIndex);
			}
		}
		
	});
	
	this.children.navbar.children.nextWeek.onPress = () => {
		this._calendarCore.nextWeek();
	};
	this.children.navbar.children.prevWeek.onPress = () => {
		this._calendarCore.prevWeek();
	};
	
}

const CalendarComp = extend(CalendarDesign)(Calendar);

function updateRows(days, date) {
	this._weeks.forEach((row, index) => {
		row.setDays(days[index], this.__options.justCurrentDays, true);
	});
}

/**
 * @event
 * @param {DateInfoDTO} start - Range start date
 */
Calendar.prototype.onRangeSelectionStart = function(start){};

/**
 * @event
 * @param {DateInfoDTO} start - Range start date
 * @param {DateInfoDTO} end - Range end date
 */
Calendar.prototype.onRangeSelectionComplete = function(start, end){};

/**
 * @private
 * 
 * @fires onRangeSelectionComplete
 * @fires onRangeSelectionStart
 * @fires onDaySelect
 */
Calendar.prototype._onSelectRange = function (weekIndex, weekDayIndex) {
	// this.onBeforeRangeSelectStart && this.onBeforeRangeSelectStart(weekIndex, weekDayIndex);
	// this.isRangeSelection !== true && activateRangeSelection.call(this);
	this._calendarCore.rangeSelection({weekIndex, weekDayIndex});
	const state = this._calendarCore.getState();
	
	if(state.rangeSelectionMode === 0){
		this.onRangeSelectionComplete 
			&& this.onRangeSelectionStart(Object.assign({}, state.rangeSelection.start));
	} else if(state.rangeSelectionMode === 1){
		this.onRangeSelectionComplete 
			&& this.onRangeSelectionComplete(Object.assign({}, state.rangeSelection.start), Object.assign({}, state.rangeSelection.end));
		this.onDaySelect && this.onDaySelect && this.onDaySelect(this._calendarCore.getState().selectedDays || []);
	}
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
 Calendar.prototype.changeCalendar = function(lang = "en", type = "gregorian", specialDays = null) {
	this.dispatch({
		type: "changeCalendar",
		lang: lang
	});
	
	this._calendarCore.changeCalendar(lang, type, specialDays);
};

/**
 * Subscribes to calendar-core and renders calendar when state is changed
 * @private
 * @param {object} oldState
 * @param {object} newState
 */
Calendar.prototype._updateCalendar = function(oldState, newState){
	if((oldState.rangeSelectionMode === -1 && newState.rangeSelectionMode === 0)
		|| (oldState.rangeSelectionMode === 1 && newState.rangeSelectionMode === -1)
	){
		this.dispatch({
			type: "deselectDays"
		});
	}
	
	if(newState.month !== oldState.month){
		this.dispatch({
			type: "resetDays"
		});
		
		this.currentMonth = newState.month;
		updateRows.call(this, newState.month.days, newState.month.date);
		this.children.navbar.setLabel(newState.month.longName+" "+newState.month.localeDate.year);
		this._weeks.forEach((row, i) => {
			row.invalidate();
		});
	
	}
	
	newState.selectedDaysByIndex.map(newState.rangeSelectionMode === -1
		? this._selectDay.bind(this)
		: this._selectDayasRange.bind(this)
	);

	newState.month.daysMin.forEach((day, index) => {
		this.children.calendarDays.children["dayName_" + index].text = day;
	});
	
	this._weekMode && this.setWeekMode(this._weekMode) || this.children.body.applyLayout();
	this.applyLayout();
};

/**
 * Changes Calendar styles
 * 
 * @param {Object} styles - A style object
 */
Calendar.prototype.addStyles = function(styles) {
	this._styleContext && this._styleContext(styles);
};

Calendar.prototype._selectDay = function({weekIndex, weekDayIndex}) {
	weekIndex >= 0 && weekDayIndex != null
		&& this._weeks[weekIndex].setSelectedIndex(weekDayIndex);
};

/**
 * Returns calendar weekmode
 * 
 * @returns {boolean}
 *
 */
Calendar.prototype.getWeekMode = function(){
	return this._weekMode;
};

/**
 * Displays only a week row
 * 
 * @param {boolean} value
 */
Calendar.prototype.setWeekMode = function(value){
	this._weekMode = value;
	const weekIndex = this._calendarCore.getState().weekIndex;
	this.children.navbar.weekMode(value);

	this._weeks.forEach((row, i) => {
		const available = !(value & i !== weekIndex);
		row.setAvailable(available);
		row.invalidate();
	});
	
	this.applyLayout();
};

Calendar.prototype._selectDayasRange = function({weekIndex, weekDayIndexes, weekDayIndex}) {
	if(this._weeks[weekIndex] === undefined)
		throw new TypeError(`${weekIndex} Week cannot be undefined`);
	this._weeks[weekIndex].setRangeIndex(
		weekDayIndexes 
			? weekDayIndexes 
			: weekDayIndex 
				? [weekDayIndex]
				: []
		);
};

/**
 * LongPress
 * @event
 * 
 * @param {number} weekIndex
 * @param {number} weekDayIndex
 */
Calendar.prototype.onLongPress = function(weekIndex, weekDayIndexes){};

Calendar.prototype._onLongPress = function(weekIndex, weekDayIndexes) {
	this.onLongPress && this.onLongPress(weekIndex, weekDayIndexes);
};

/**
 * Sets calendar day without the day selection
 * 
 * @param {DateDTO} date
 */
Calendar.prototype.setDate = function(date) {
	this.dispatch({
		type: "deselectDays"
	});
	const newDate = Object.assign({}, date);
	this._calendarCore.setDate(newDate);
};

/**
 * Sets range dates
 * 
 * @param {DateDTO} start - Start date {@link DateDTO}
 * @param {DateDTO} end - Final date {@link DateDTO}
 */
Calendar.prototype.setRangeDates = function(start, end) {
	this.dispatch({
		type: "deselectDays"
	});
	this._calendarCore.setRangeSelection(start, end);
};

/**
 * Sets calendar date and highlight the day
 * @param {DateDTO} date {@link DateDTO}
 */
Calendar.prototype.setSelectedDate = function(date) {
	this.dispatch({
		type: "deselectDays"
	});
	if(this.__options.useRangeSelection === false){
		this._calendarCore.setSelectedDate(date);
	} else {
		this._calendarCore.startRangeSelection({date});
	}
};

/**
 * Disposes the Component instance
 */
Calendar.prototype.dispose = function() {
	this._unsubsciber();
	this._unsubsciber = null;
	this._calendarCore = null;
	this._weeks = [];
	this._styleContext(null);
	this.dispatch = null;
	this._styleContext = null;
	this._calendarService = null;
	this.currentMonth = null;
	this.onChanged = null;
};

/**
 * @event
 * @param {DateDTO} date
 */
Calendar.prototype.onBeforeMonthChange = function(date){};

/**
 * @event
 * @params {DateDtO} date
 */
Calendar.prototype.onMonthChange = function(date){};

/**
 * Changes current to next month
 * 
 * @fires onBeforeMonthChange
 * @fires onMonthChange
 */
Calendar.prototype.nextMonth = function() {
	if(this.onBeforeMonthChange &&
		 this.onBeforeMonthChange(this.currentMonth.nextMonth.normalizedDate) === false
	){
		return;
	}
	
	if(this.currentMonth) {
		this._calendarCore.nextMonth();
		this.onMonthChange && this.onMonthChange(this.currentMonth.nextMonth.normalizedDate);
	}
};

/**
 * Changes selected date to now
 */
Calendar.prototype.now = function(){
	this._calendarCore.now();
};

/**
 * Changes current to previous month
 * @fires onBeforeMonthChange
 * @fires onMonthChange
 */
Calendar.prototype.prevMonth = function() {
	if(this.onBeforeMonthChange &&
		 this.onBeforeMonthChange(this.currentMonth.previousMonth.normalizedDate) === false
	){
		return;
	}
	
	if(this.currentMonth) {
		this._calendarCore.prevMonth();
		this.onMonthChange && this.onMonthChange(this.currentMonth.normalizedDate);
	}
};

/**
 * @event
 * @param {Array.<DateInfoDTO>} date - Selected date
 */
Calendar.prototype.onDaySelect = function(date){};

/**
 * Selects a day by week and day index
 * 
 * @fires onDaySelect
 * @param {number} weekIndex - Calendar row index
 * @param {number} weekDayIndex - Calendar column index
 * @param {boolean} [notify=true] - If fires selection event or not.
 */
Calendar.prototype.selectDay = function(weekIndex, weekDayIndex, notify=true){
	this._calendarCore.selectDay(weekIndex, weekDayIndex);
	notify && this.onDaySelect && this.onDaySelect(this._calendarCore.getState().selectedDays || []);
};
// Calendar.$$_styleContext = {
// 	'no-context': true
// };


module.exports = CalendarComp;
