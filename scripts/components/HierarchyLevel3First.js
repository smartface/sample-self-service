/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HierarchyLevel3FirstDesign = require('library/HierarchyLevel3First');

const HierarchyLevel3First = extend(HierarchyLevel3FirstDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HierarchyLevel3FirstDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HierarchyLevel3First);

