const extend = require("js-base/core/extend");
const AlertView = require("sf-core/ui/alertview");
const Application = require("sf-core/application");
const Color = require("sf-core/ui/color");
const Data = require("sf-core/data");
const Page = require("sf-core/ui/page");
const PageDesign = require("../../../ui/ui_pgSettings");
const settings = require("../../../settings.json");

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

		this.btnBlue.onPress = function() {
		    changeTheme("Style1");
		}
		this.btnPurple.onPress = function() {
		    changeTheme("Style2");
		}
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

module && (module.exports = Page_);