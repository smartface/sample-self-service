/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HiearchyLevel3RemainingDesign = require('library/HiearchyLevel3Remaining');

const HiearchyLevel3Remaining = extend(HiearchyLevel3RemainingDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HiearchyLevel3RemainingDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HiearchyLevel3Remaining);

