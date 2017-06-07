const extend = require('js-base/core/extend');
const Color = require('sf-core/ui/color');

const PageDesign = require("../../ui/ui_pgLogin");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		
		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			typeof _superOnLoad === "function" && _superOnLoad();
			
			this.passwordLayout.children.textboxInfo.text = "Password";
			this.passwordLayout.children.innerTextbox.isPassword = true;
		}
	}
);

module && (module.exports = Page_);