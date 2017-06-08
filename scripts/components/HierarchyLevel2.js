/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HierarchyLevel2Design = require('library/HierarchyLevel2');

const HierarchyLevel2 = extend(HierarchyLevel2Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HierarchyLevel2Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HierarchyLevel2);

