/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Flexlayout354Design = require('library/Flexlayout354');

const Flexlayout354 = extend(Flexlayout354Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Flexlayout354Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Flexlayout354);

