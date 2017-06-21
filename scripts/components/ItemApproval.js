/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemApprovalDesign = require('library/ItemApproval');

const ItemApproval = extend(ItemApprovalDesign)(
	//constructor
	function(_super, props, pageName) {
		// initalizes super class for this scope
		_super(this, props || ItemApprovalDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
	}
);

module && (module.exports = ItemApproval);