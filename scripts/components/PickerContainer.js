/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const PickerContainerDesign = require('library/PickerContainer');

const PickerContainer = extend(PickerContainerDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || PickerContainerDesign.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = PickerContainer);

