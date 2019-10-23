/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const TopTabItemDesign = require('library/TopTabItem');

const TopTabItem = extend(TopTabItemDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || TopTabItemDesign.defaults );
		this.pageName = pageName;
		this.tabItemTitle.scrollEnabled = false;
	}
	
);

module && (module.exports = TopTabItem);

