/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemSalaryDesign = require('library/ItemSalary');

const ItemSalary = extend(ItemSalaryDesign)(
	//constructor
	function(_super, props, pageName){
		delete ItemSalaryDesign.defaults.width 
		_super(this, props || ItemSalaryDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemSalary);

