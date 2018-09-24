/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CalendarWeekRowWithLabelDesign = require('library/CalendarWeekRowWithLabel');

const CalendarWeekRowWithLabel = extend(CalendarWeekRowWithLabelDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || CalendarWeekRowWithLabelDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = CalendarWeekRowWithLabel);

