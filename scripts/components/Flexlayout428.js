/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Flexlayout428Design = require('library/Flexlayout428');

const Flexlayout428 = extend(Flexlayout428Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Flexlayout428Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Flexlayout428);

