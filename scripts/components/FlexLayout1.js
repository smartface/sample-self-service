/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const FlexLayout1Design = require('library/FlexLayout1');

const FlexLayout1 = extend(FlexLayout1Design)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = FlexLayout1);