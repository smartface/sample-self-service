/*global lang*/
const extend = require("js-base/core/extend");
const Animator = require("sf-core/ui/animator");
const Image = require("sf-core/ui/image");
const Router = require("sf-core/router");
const System = require("sf-core/device/system");
const Timer = require("sf-core/timer");
const FingerPrintLib = require("sf-extension-utils/fingerprint");
const Data = require("sf-core/data");
const AlertUtil = require("lib/util/alert");
const rau = require("sf-extension-utils/rau");

const PageDesign = require("../../ui/ui_pgLogin");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		
		this.onShow = onShow.bind(this, this.onShow);
		this.signinButton.onPress = signin.bind(this.signinButton, this);
		this.appName.onTouchEnded = function()
		{
		    this.usernameLayout.innerTextbox.text = "Anthony Bell";
	        this.passwordLayout.innerTextbox.text = "123456";
		}.bind(this);
		
		initTexts(this);
	}
);

function onShow(parentOnShow, params) {
    if (typeof parentOnShow === "function") parentOnShow(params);
    
    this.usernameLayout.innerTextbox.ios.clearButtonEnabled = true;
	this.passwordLayout.innerTextbox.ios.clearButtonEnabled = true;
    // Reset sign in button status because if sign in animation ran it changes
    
    this.signinButton.width = 250;
    this.signinButton.alpha = 1;
    this.loadingImageView.alpha = 0;
    // FingerPrintLib.checkFingerPrint();
    rau.checkUpdate();
}


// Loads texts from language file
function initTexts(page) {
	page.passwordLayout.innerTextbox.isPassword = true;
	// button properties
	page.signinButton.text = lang["pgLogin.signin"];
	page.appName.text = lang["pgLogin.appName"];
	
	page.usernameLayout.textboxInfo.text = lang["pgLogin.inputs.username.info"];
	page.usernameLayout.innerTextbox.text = Data.getBooleanVariable("isUserAuthenticated") ? Data.getStringVariable("userName") : "";
	page.passwordLayout.textboxInfo.text = lang["pgLogin.inputs.password.info"];
}

// Runs sign in animation and calls sign in service
function signin(page) {
    if (page.usernameLayout.innerTextbox.text === "") {
    	AlertUtil.showAlert(lang["pgLogin.inputs.username.error"]);
		return;
	}
	
    if(!Data.getBooleanVariable('isNotFirstLogin')){
        if (page.passwordLayout.innerTextbox.text === "") {
            // Validate fingerPrint
    		AlertUtil.showAlert(lang["pgLogin.inputs.password.error"]);
    		return; 
    	}
    }
    
	if(FingerPrintLib.isUserVerifiedFingerprint){
		// Second+ logging. No need to register fingerprint user already do it before.
		if (page.passwordLayout.innerTextbox.text !== "") {
            // Validate fingerPrint
    		doLogin(page);
    	}
		else{
		    FingerPrintLib.validateFingerPrint(function(){
		        doLogin(page);
		    }, function() {
		        if (page.passwordLayout.innerTextbox.text === "") {
	                // Validate fingerPrint
	        		AlertUtil.showAlert(lang["pgLogin.inputs.password.error"]);
	        		return; 
	        	}
	        	doLogin(page);
		    });
		    return;
		}
	}
	else if(FingerPrintLib.isFingerprintAvailable){
	    if(FingerPrintLib.isUserAllowedFingerprint){
	    	// Second+ logging. But user not registered fingerprint. But password supplied skip fingerprint
			if (page.passwordLayout.innerTextbox.text !== "") {
	            // Validate fingerPrint
	    		doLogin(page);
	    	}
			else{
		        FingerPrintLib.validateFingerPrint(function(){
	    	        doLogin(page);
	    	    }, function(){
	    	        AlertUtil.showAlert("Fingerprint failed to validate.");
		            if (page.passwordLayout.innerTextbox.text === "") {
	                    // Validate fingerPrint
	            		AlertUtil.showAlert(lang["pgLogin.inputs.password.error"]);
	            		return; 
	            	}
	            	doLogin(page);
	    	    });
	    	    return;
			}
	    }
	    // first logging and ask user to register fingerprint
	    else if(!FingerPrintLib.isUserRejectedFingerprint){
	        FingerPrintLib.registerFingerPrint(function(){
    	        doLogin(page);
    	    }, function(){
    	        AlertUtil.showAlert("Fingerprint failed to register.");
	            if (page.passwordLayout.innerTextbox.text === "") {
                    // Validate fingerPrint
            		AlertUtil.showAlert(lang["pgLogin.inputs.password.error"]);
            		return; 
            	}
            	doLogin(page);
    	    });
    	    return;
	    }
	    
	}
	
	if (page.passwordLayout.innerTextbox.text === "") {
        // Validate fingerPrint
		AlertUtil.showAlert(lang["pgLogin.inputs.password.error"]);
		return; 
	}
	
	doLogin(page);
	
}

function doLogin(page){
    
	Data.setBooleanVariable("isUserAuthenticated", true);
	Data.setBooleanVariable('isNotFirstLogin', true);
	Data.setStringVariable("userName", page.usernameLayout.innerTextbox.text);
	if(page.passwordLayout.innerTextbox.text){
	    Data.setStringVariable("password", page.passwordLayout.innerTextbox.text);
	}
	
    startLoading(page);
	Timer.setTimeout({
	    task: function() {
            stopLoading();
            Router.go("tabs"); 
	    },
	    delay: 2000
	});
}

var loadingTimer = null;
function startLoading(uiComponents){
    var imageView = uiComponents.loadingImageView;

    uiComponents.signinButton.text = "";

    var layout;
    if(System.OS == 'Android'){
       layout = uiComponents.buttonLayout;
    }else{
       layout = uiComponents.layout;
    }
    
    Animator.animate(layout, 100, function() {
        uiComponents.signinButton.width = 50;
        uiComponents.signinButton.alpha = 0.2;
    }).complete(function() {
        uiComponents.signinButton.alpha = 0;
        rotateImage(imageView, uiComponents);
        Animator.animate(uiComponents.layout, 300, function() {
            imageView.alpha = 1;
        });
    });

    function rotateImage(imageView, page, onFinish){
        var image;
        if(System.OS == "Android"){
            const AndroidUnitConverter = require('sf-core/util/Android/unitconverter');
            var pixel = AndroidUnitConverter.dpToPixel(50);
            image = Image.createFromFile("images://loading.png").resize(pixel,pixel);
        } else {
            image = Image.createFromFile("images://loading.png").resize(50, 50);
        }
        
        var counter = 0;
        loadingTimer = Timer.setInterval({
            task: function(){
                imageView.image = image.rotate(++counter*7);
            },
            delay: 20
        });
    }
}

function stopLoading() {
    Timer.clearTimer(loadingTimer);
    loadingTimer = null;
}

module && (module.exports = Page_);