/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Flexlayout2 = require('library/Flexlayout2');

const Flexlayout2_ = extend(Flexlayout2)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Flexlayout2.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Flexlayout2_);

