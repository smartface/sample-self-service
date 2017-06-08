/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const HierarchyLevel1Design = require('library/HierarchyLevel1');

const HierarchyLevel1 = extend(HierarchyLevel1Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || HierarchyLevel1Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = HierarchyLevel1);

