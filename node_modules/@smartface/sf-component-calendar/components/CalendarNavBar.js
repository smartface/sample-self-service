const extend = require('js-base/core/extend');

const CalendarNavBarDesign = require('library/CalendarNavBar');

const CalendarNavBar = extend(CalendarNavBarDesign)(
	//constructor
	function(_super, props){
		// initalizes super class for this scope
		_super(this, props || {} );

		this.weekMode = function(mode){
			this.children.prevWeek.dispatch({
				type: "updateUserStyle",
				userStyle: {
					visible: mode
				}
			});
			this.children.nextWeek.dispatch({
				type: "updateUserStyle",
				userStyle: {
					visible: mode
				}
			});
		};
		
		this.children.nextMonth.onPress = function(){
			this.onNext();
		}.bind(this);
		
		this.children.prevMonth.onPress = function(){
			this.onPrev();
		}.bind(this);
		
		this.setLabel = function(text){
			this.children.monthLabel.text = text;
		}.bind(this);
	}
);

module && (module.exports = CalendarNavBar);
