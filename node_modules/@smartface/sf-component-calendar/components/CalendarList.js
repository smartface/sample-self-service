const extend = require('js-base/core/extend');

const CalendarListDesign = require('library/CalendarList');

const CalendarList = extend(CalendarListDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = CalendarList);