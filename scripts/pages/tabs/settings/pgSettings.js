/*globals lang*/
const extend = require("js-base/core/extend");
const AlertView = require("sf-core/ui/alertview");
const Application = require("sf-core/application");
const Data = require("sf-core/data");
const PageDesign = require("../../../ui/ui_pgSettings");
const Router = require("sf-core/ui/router");
const FingerPrintLib = require("sf-extension-utils/fingerprint");
const System = require('sf-core/device/system');

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params); 

		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			if (typeof _superOnLoad === "function") _superOnLoad.call(this);
			this.headerBar.title = lang["pgSettings.pageTitle"];
			this.headerBar.leftItemEnabled = false;
			this.txtTheme.text = lang["pgSettings.theme"];
			this.txtNotification.text = lang["pgSettings.notifications"];
			this.txtAbout.text = lang["pgSettings.about"] + " v." + Application.version ;
			this.txtAboutDesc.text = lang["pgSettings.aboutDesc"];
			
			initFingerPrint.call(this);
		};
		
		this.themeBlueLayout.onTouchEnded = function() {
		    changeTheme("Style1");
		}
		
		this.themePurpleLayout.onTouchEnded = function() {
		    changeTheme("Style2");
		}
		
		this.signoutLayout.onTouchEnded = function() {
			Data.setBooleanVariable("isUserAuthenticated", false);
			Data.setStringVariable("userName", null);
			Data.setStringVariable("password", null);
			
			if (System.OS === "Android") {
				Router.go("login/pgLogin"); // TODO: remove after AND-2900
			} else {
				Router.goBack("login");
			}
		}

		this.layoutCheckUpdate.onTouchEnded = function() {
			const rau = require("sf-extension-utils/rau");
			rau.checkUpdate({
				showProgressCheck: true,
				showProgressErrorAlert: true
			});
		};
		
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

function initFingerPrint() {
	if(FingerPrintLib.isFingerprintAvailable){
		this.switchFinger.toggle = ((FingerPrintLib.isUserRejectedFingerprint === false) && (FingerPrintLib.isUserVerifiedFingerprint === true)) ;
	} else {
	    this.layoutFinger.height = Number.NaN;
	    this.layoutFinger.maxHeight = 0;
	    this.layoutFinger.flexGrow = 0;
	    this.layoutFinger.visible = false;
	    this.horizontalDividerFingerprint.height = Number.NaN;
	    this.horizontalDividerFingerprint.flexGrow = 0;
	    this.horizontalDividerFingerprint.maxHeight = 0;
	    this.horizontalDividerFingerprint.visible = false;
	}
	this.switchFinger.onToggleChanged = function( ){
	    FingerPrintLib.isUserRejectedFingerprint = (this.switchFinger.toggle === false);
	}.bind(this);
}

module && (module.exports = Page_);