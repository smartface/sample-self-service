/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const LayoutHeaderBar = require('library/LayoutHeaderBar');

const LayoutHeaderBar_ = extend(LayoutHeaderBar)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || LayoutHeaderBar.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = LayoutHeaderBar_);

