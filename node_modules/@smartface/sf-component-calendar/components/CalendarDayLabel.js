const extend = require('js-base/core/extend');
const CalendarDayLabelDesign = require('library/CalendarDayLabel');

const CalendarDayLabel = extend(CalendarDayLabelDesign)(
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || {} );
		this.pageName = pageName;
	}
);

module && (module.exports = CalendarDayLabel);
