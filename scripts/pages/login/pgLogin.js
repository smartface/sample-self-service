const extend = require("js-base/core/extend");
const Animator = require("sf-core/ui/animator");
const FlexLayout = require("sf-core/ui/flexlayout");
const Image = require("sf-core/ui/image");
const ImageView = require("sf-core/ui/imageview");
const Router = require("sf-core/router");
const Timer = require("sf-core/timer");

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
			this.signinButton.onPress = signin.bind(this.signinButton, this);
			
			initTexts(this);
		}
	}
);

function initTexts(page) {
	page.usernameLayout.textboxInfo.text = lang["pgLogin.inputs.username.info"];
	page.passwordLayout.textboxInfo.text = lang["pgLogin.inputs.password.info"];
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
	
	loading(page, function() {
		Router.go("tabs");
	});
}

function loading(uiComponents, onFinish){
    var imageView = uiComponents.loadingImageView;

    uiComponents.signinButton.text = "";

    var layout;
    if(Device.deviceOS == 'Android'){
       layout = uiComponents.buttonLayout;
    }else{
       layout = uiComponents.layout;
    }
    
    Animator.animate(layout, 100, function() {
        uiComponents.signinButton.width = 50;
        uiComponents.signinButton.alpha = 0.2;
    }).complete(function() {
        uiComponents.signinButton.alpha = 0;
        rotateImage(imageView, uiComponents, onFinish);
        Animator.animate(uiComponents.layout, 300, function() {
            imageView.alpha = 1;
        });
    });
}

function rotateImage(imageView, page, onFinish){
    var image;
    if(Device.deviceOS == "Android"){
        const AndroidUnitConverter = require('sf-core/util/Android/unitconverter');
        var pixel = AndroidUnitConverter.dpToPixel(50);
        image = Image.createFromFile("images://loading.png").resize(pixel,pixel);
    } else {
        image = Image.createFromFile("images://loading.png").resize(50, 50);
    }
    
    var counter = 0;
    var myTimer = Timer.setInterval({
        task: function(){
            imageView.image = image.rotate(++counter*7);
            if(counter === 100){
                Timer.clearTimer(myTimer);
                onFinish();
            }
        },
        delay: 20
    });
}

module && (module.exports = Page_);