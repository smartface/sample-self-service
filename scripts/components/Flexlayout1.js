/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Flexlayout1 = require('library/Flexlayout1');

const Flexlayout1_ = extend(Flexlayout1)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Flexlayout1.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Flexlayout1_);

