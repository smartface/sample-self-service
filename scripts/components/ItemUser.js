/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemUserDesign = require('library/ItemUser');

const ItemUser = extend(ItemUserDesign)(
	//constructor
	function(_super, props, pageName){
		delete ItemUserDesign.defaults.width
		_super(this, props || ItemUserDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemUser);

