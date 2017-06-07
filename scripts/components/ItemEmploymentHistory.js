/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemEmploymentHistory = require('library/ItemEmploymentHistory');

const ItemEmploymentHistory_ = extend(ItemEmploymentHistory)(
	//constructor
	function(_super, props, pageName){
		delete ItemEmploymentHistory.defaults.width
		_super(this, props || ItemEmploymentHistory.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemEmploymentHistory_);

