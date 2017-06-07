/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Flexlayout321Design = require('library/Flexlayout321');

const Flexlayout321 = extend(Flexlayout321Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Flexlayout321Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Flexlayout321);

