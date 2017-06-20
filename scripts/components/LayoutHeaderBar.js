/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const LayoutHeaderBar = require('library/LayoutHeaderBar');

const LayoutHeaderBar_ = extend(LayoutHeaderBar)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || LayoutHeaderBar.defaults );
		this.pageName = pageName;
		
		this.setRightItem1 = function(params) {
			this.rightItem1.image = params.image;
			this.rightItem1.onTouchEnded = params.onPress;
		}.bind(this);
		
		this.setRightItem2 = function(params) {
			this.rightItem2.image = params.image;
			this.rightItem2.onTouchEnded = params.onPress;
		}.bind(this);
	}
	
);

module && (module.exports = LayoutHeaderBar_);

