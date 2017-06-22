/*globals lang*/
const extend = require("js-base/core/extend");
const AlertView = require("sf-core/ui/alertview");
const Application = require("sf-core/application");
const Data = require("sf-core/data");
const PageDesign = require("../../../ui/ui_pgSettings");
const Router = require("sf-core/ui/router");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);

		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			if (typeof _superOnLoad === "function") _superOnLoad.call(this);
			this.headerBar.title = lang["pgSettings.pageTitle"];
		};

		this.themeBlueLayout.onTouchEnded = function() {
		    changeTheme("Style1");
		}
		
		this.themePurpleLayout.onTouchEnded = function() {
		    changeTheme("Style2");
		}
		
		this.signoutLayout.onTouchEnded = function() {
			Router.goBack("login");
		}
		
		initCurrentTheme.call(this);
	}
);

function changeTheme(styleName) {
	if (Data.getStringVariable("theme") === styleName) {
		return;
	}

	var confirmationAlert = new AlertView({
		title: lang["alertView.confirmation"],
		message: lang["pgSettings.themeChangeMessage"]
	});
	confirmationAlert.addButton({
		text: lang["ok"],
		type: AlertView.Android.ButtonType.POSITIVE,
		onClick: function() {
			Data.setStringVariable("theme", styleName);
    		Application.restart();
		}
	});
	confirmationAlert.addButton({
		text: lang["cancel"],
		type: AlertView.Android.ButtonType.NEGATIVE
	});
	confirmationAlert.show();
}

function initCurrentTheme() {
	if (Data.getStringVariable("theme") !== "Style1") {
		this.themeBlueLayout.borderWidth = 0;
		this.themePurpleLayout.borderWidth = 1;
	}
}

module && (module.exports = Page_);