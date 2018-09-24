/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const CalendarYearDesign = require('library/CalendarYear');

const CalendarYear = extend(CalendarYearDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || CalendarYearDesign.defaults);
    this.pageName = pageName;
  },
  function(proto){
    proto.setYear = function(year){
      this.children.yearLabel.text = year;
    };
  }
);

module && (module.exports = CalendarYear);