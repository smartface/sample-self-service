/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const TextboxWithLineDesign = require('library/TextboxWithLine');

const TextboxWithLine = extend(TextboxWithLineDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || TextboxWithLineDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = TextboxWithLine);

