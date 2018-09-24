//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const TextView = extend(require('sf-core/ui/textview'));

//constructor
function CalendarDayLabel(_super, props) {
  // initalizes super class for this component scope
  _super(this, props);
}
CalendarDayLabel.$$styleContext = {
  classNames: ".label",
  userProps: {
    borderRadius: 18,
    borderWidth: 1,
    height: 61.66666622819572,
    width: 58.218390366126755
  }
};
const CalendarDayLabel_ = TextView(CalendarDayLabel);

module && (module.exports = CalendarDayLabel_);