/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ListItem1 = require('library/ListItem1');

const ListItem1_ = extend(ListItem1)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ListItem1.defaults );
		this.pageName = pageName;
		this.value.scrollEnabled = false;
	}
	
);

module && (module.exports = ListItem1_);

