/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemFileDesign = require('library/ItemFile');

const ItemFile = extend(ItemFileDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemFileDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemFile);

