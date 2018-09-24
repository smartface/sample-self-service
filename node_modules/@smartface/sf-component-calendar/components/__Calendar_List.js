const extend = require('js-base/core/extend');
const ScrollView = require('sf-core/ui/scrollview');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');

/**
 * CalendarList Component constructor
 * @constructor
 */
function CalendarList(_super) {
  _super(this, {
     flexGrow: 1,
     alignSelf: FlexLayout.AlignSelf.STRETCH,
     backgroundColor: Color.GREEN, 
  });
  
  this.init();
}

function Calendar(_super) {
  _super(this);
}

Calendar.$$styleContext = {
  classNames: ".flexLayout .calendar-self",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      justifyContent: "FLEX_START",
      alignItems: "STRETCH",
      alignContent: "FLEX_START",
      positionType: "RELATIVE",
      flexGrow: 1
    },
    height: 330,
    width: 300
  }
};

const $Calendar = extend(require("./Calendar"))(Calendar);

CalendarList.$$styleContext = {
  "no-context": true
};

function CalendarListPrototype(proto) {
  proto.init = function() {
    this.currentMonthCalendar = new $Calendar();
    this.nextMonthCalendar = new $Calendar();
  
    this.layout.addChild(this.currentMonthCalendar);
    this.layout.addChild(this.nextMonthCalendar);

    this.currentMonthCalendar.onDaySelect = onDaySelectinCurrent.bind(this);
    this.nextMonthCalendar.onDaySelect = onDaySelectinNext.bind(this);
    
    this.changeCalendar("en", "gregorian", {});
  };
  
  proto.changeCalendar = function(lang, calendar, sp){
  	this.currentMonthCalendar.changeCalendar(lang, calendar, sp);
  	this.nextMonthCalendar.changeCalendar(lang, calendar, sp);
  	
    this.currentMonthCalendar.setSelectedDate({"month":10,"year":2017,"day":1});
    this.nextMonthCalendar.setSelectedDate({"month":11,"year":2017,"day":1});
    
  	this.applyLayout();
  };

  
  function onDaySelectinCurrent(date){
	}
  
  function onDaySelectinNext(date){
	}
}

/**
 * CalendarList Component Class
 * @class
 * @type CalendarList
 */
const klass = extend(ScrollView)(CalendarList, CalendarListPrototype);

module.exports = klass;
