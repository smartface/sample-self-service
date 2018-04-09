/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const UserSendLabelDesign = require('library/UserSendLabel');

const UserSendLabel = extend(UserSendLabelDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || {});
    this.pageName = pageName;
  }

);

module && (module.exports = UserSendLabel);