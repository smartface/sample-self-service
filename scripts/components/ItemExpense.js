/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemExpenseDesign = require('library/ItemExpense');

const ItemExpense = extend(ItemExpenseDesign)(
	//constructor
	function(_super, props, pageName){
		delete ItemExpenseDesign.defaults.width
		_super(this, props || ItemExpenseDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemExpense);

