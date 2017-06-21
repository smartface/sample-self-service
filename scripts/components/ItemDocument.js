/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemDocumentDesign = require('library/ItemDocument');

const ItemDocument = extend(ItemDocumentDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemDocumentDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
	}
	
);

module && (module.exports = ItemDocument);

