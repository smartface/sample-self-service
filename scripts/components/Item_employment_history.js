/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Item_employment_history = require('library/Item_employment_history');

const Item_employment_history_ = extend(Item_employment_history)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Item_employment_history.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Item_employment_history_);

