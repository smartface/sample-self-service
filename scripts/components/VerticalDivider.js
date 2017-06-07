/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const VerticalDividerDesign = require('library/VerticalDivider');

const VerticalDivider = extend(VerticalDividerDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || VerticalDividerDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = VerticalDivider);

