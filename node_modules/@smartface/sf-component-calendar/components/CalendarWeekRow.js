const extend = require('js-base/core/extend');
const CalendarWeekRowDesign = require('library/CalendarWeekRow');

function selectDay(index) {
	if (index === -1) {
		throw new Error("Day index cannot be -1");
	}

	this.selectedIndex = index;
	this.rangeIndexes = [];
	this.children["weekDay" + (index + 1)].select();
}

function onDayPress(index) {
	this.onDaySelect && this.onDaySelect(index);
}

function selectRange(indexes) {
	this.rangeIndexes.push(indexes);
	indexes.forEach(index => this.children["weekDay" + (index + 1)].activate());
}

function onDayLongPress(index) {
	this.onDayLongPress && this.onDayLongPress(index);
}

function addDaySelectEvent(day, index) {
	day.onPress = onDayPress.bind(this, index);
	day.onLongPress = onDayLongPress.bind(this, index);
}

const CalendarWeekRow = extend(CalendarWeekRowDesign)(
	//constructor
	function(_super, props) {
		// initalizes super class for this scope
		_super(this, props || {});
		this.rangeIndexes = [];
		// data && this.setDays(data);
		this._days = ["weekDay1", "weekDay2", "weekDay3", "weekDay4", "weekDay5", "weekDay6", "weekDay7"];
		// it's displayed in weekMode
		this._available = true;
		this.init();
	},
	function(proto) {
		proto.setAvailable = function(mode) {
			this._available = mode;
		};

		proto.getAvailable = function() {
			return this._available;
		};

		proto.activateRangeSelection = function() {
			this.isRangeSelection = true;
			this._days.forEach((day, index) =>
				this.children[day].onTouch = this.onMove.bind(null, index));
		};

		proto.deactivateRangeSelection = function() {
			this.isRangeSelection = false;
			this._days.forEach((day, index) =>
				this.children[day].onTouch = null);
		};

		proto.getSelectedIndex = function() {
			return this.selectedIndex;
		};

		proto.isEmpty = function() {
			return this._isEmpty !== false;
		};

		proto.setSelectedIndex = function(index) {
			return selectDay.call(this, index);
		};

		proto.setRangeIndex = function(index) {
			return selectRange.call(this, index);
		};

		proto.isAvailable = function() {
			return this._available & !this._isEmpty;
		};

		proto.clearSelected = function() {
			this.selectedIndex > -1 && this.children["weekDay" + (this.selectedIndex + 1)].clearSelected();
			this.selectedIndex = -1;
			this.rangeIndexes = [];
		};

		proto.init = function() {
			this._days.forEach((day, index) =>
				addDaySelectEvent.call(this, this.children[day], index));
		};

		proto.show = function() {
			this.dispatch({
				type: "changeUserStyle",
				userStyle: (style) => {

					// delete style.height;
					style.height = 40;
					style.visible = true;

					return style;
				}
			});
		};

		proto.hide = function() {
			this.dispatch({
				type: "changeUserStyle",
				userStyle: (style) => {
					style.height = 0;
					style.visible = false;

					return style;
				}
			});
		};

		proto.invalidate = function() {
			this.dispatch({
				type: "changeUserStyle",
				userStyle: (style) => {
					this.isAvailable() ? style.height = 40 : style.height = 0;
					style.visible = this.isAvailable() === 1;
					// this._available && alert(this.isAvailable());

					return style;
				}
			});
		};
		
	/*	proto.subscribeContext = function(e){
			Object.assign(this, e.style);
		};*/

		proto.setDays = function(days, justCurrentDays = false, force=false) {
			if (!force && (days === undefined || !this._available)) {
				return;
			}

			this._isEmpty = true;
			this._days.forEach((day, index) => {
				if (justCurrentDays && days[index].month !== "current") {
					this.children[day].visible = false;
					return;
				} else if (days[index].month === "current") {
					this._isEmpty = false;
				}

				this.children[day].visible = true;
				this.children[day].setDay(days[index]);
			});
			
			this.invalidate();
		};
	}
);

module && (module.exports = CalendarWeekRow);
