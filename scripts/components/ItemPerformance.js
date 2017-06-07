/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemPerformanceDesign = require('library/ItemPerformance');

const ItemPerformance = extend(ItemPerformanceDesign)(
	
	function(_super, props, pageName){
		delete ItemPerformanceDesign.defaults.width
		_super(this, props || ItemPerformanceDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = ItemPerformance);

