/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemLeaveManagement = require('library/ItemLeaveManagement');

const ItemLeaveManagement_ = extend(ItemLeaveManagement)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemLeaveManagement.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemLeaveManagement_);

