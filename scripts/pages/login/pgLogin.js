const extend = require("js-base/core/extend");
const Animator = require("sf-core/ui/animator");
const Image = require("sf-core/ui/image");
const Router = require("sf-core/router");
const System = require("sf-core/device/system");
const Timer = require("sf-core/timer");
const updater = require("lib/updater");

const PageDesign = require("../../ui/ui_pgLogin");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		
		this.onLoad = onLoad.bind(this, this.onLoad);
		this.onShow = onShow.bind(this, this.onShow);
		this.signinButton.onPress = signin.bind(this.signinButton, this);
		
		initTexts(this);
	}
);

function onShow(parentOnShow, params) {
    if (typeof parentOnShow === "function") parentOnShow(params);
    // updater.checkUpdate();
}

function onLoad(parentOnLoad) {
    if (typeof parentOnLoad === "function") parentOnLoad();
}

function initTexts(page) {
	page.usernameLayout.textboxInfo.text = lang["pgLogin.inputs.username.info"];
	page.passwordLayout.textboxInfo.text = lang["pgLogin.inputs.password.info"];
	page.passwordLayout.innerTextbox.isPassword = true;
	page.dontHaveAccount.text = lang["pgLogin.dontHaveAccount"];
	page.signupLabel.text = lang["pgLogin.signup"];
	page.signinButton.text = lang["pgLogin.signin"];
}

function signin(page) {
	if (page.usernameLayout.innerTextbox.text === "") {
		return alert(lang["pgLogin.inputs.username.error"]);
	}
	if (page.passwordLayout.innerTextbox.text === "") {
		return alert(lang["pgLogin.inputs.password.error"]);
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