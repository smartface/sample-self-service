/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HierachyflDesign = require('library/Hierachyfl');

const Hierachyfl = extend(HierachyflDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = Hierachyfl);