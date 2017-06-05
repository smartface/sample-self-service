/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HorizontalDivider = require('library/HorizontalDivider');

const HorizontalDivider_ = extend(HorizontalDivider)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HorizontalDivider.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HorizontalDivider_);

