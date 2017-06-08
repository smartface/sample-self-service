/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HierarchyControllerDesign = require('library/HierarchyController');

const HierarchyController = extend(HierarchyControllerDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HierarchyControllerDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HierarchyController);

