const extend = require('js-base/core/extend');
const Router = require("sf-core/router");

const PageDesign = require("../../ui/ui_pgLogin");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		
		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			typeof _superOnLoad === "function" && _superOnLoad();
			
			this.passwordLayout.textboxInfo.text = "Password";
			this.passwordLayout.innerTextbox.isPassword = true;
			this.signinButton.onPress = signin.bind(this);
			
			initTexts(this);
		}
	}
);

function initTexts(page) {
	page.usernameLayout.textboxInfo.text = lang["pgLogin.inputs.username.info"];
	page.passwordLayout.textboxInfo.text = lang["pgLogin.inputs.password.info"];
}

function signin() {
	if (this.usernameLayout.innerTextbox.text === "") {
		return alert(lang["pgLogin.inputs.username.error"]);
	}
	if (this.passwordLayout.innerTextbox.text === "") {
		return alert(lang["pgLogin.inputs.password.error"]);
	}
	
	Router.go("tabs");
}

module && (module.exports = Page_);