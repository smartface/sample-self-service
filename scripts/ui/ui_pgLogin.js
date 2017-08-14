/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Color = require('sf-core/ui/color');
const Button = require('sf-core/ui/button');

const TextboxWithLine = require("../components/TextboxWithLine");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgLogin_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const imageview156Style = getCombinedStyle(".imageView", {
			left: 0,
			right: 0,
			bottom: 0,
			top: 0,
			width: null,
			height: null,
			imageFillType: ImageFillType.STRETCH,
			image: Image.createFromFile("images://background.png"),
			positionType: FlexLayout.PositionType.ABSOLUTE
		});  
		var imageview156 = new ImageView(imageview156Style);  
		this.layout.addChild(imageview156);
			
		const appNameStyle = getCombinedStyle(".label .label-login.large .label-login", {
			text: "EMPLOYEE\nSELF SERVICE",
			textAlignment: TextAlignment.MIDCENTER,
			width: null,
			height: null,
			multiline: true,
			flexGrow: 5
		});  
		var appName = new Label(appNameStyle);  
		if(appNameStyle.scrollEnabled === false)
			appName.ios && (appName.ios.scrollEnabled = false);
		this.layout.addChild(appName);
		this.appName = appName;
	
		const inputLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			height: null,
			justifyContent: FlexLayout.JustifyContent.CENTER,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: 3
		});  
		var inputLayout = new FlexLayout(inputLayoutStyle);  
		this.layout.addChild(inputLayout);
			
		const buttonLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 5,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});  
		var buttonLayout = new FlexLayout(buttonLayoutStyle);  
		this.layout.addChild(buttonLayout);
		this.buttonLayout = buttonLayout;
	
		const loadingImageViewStyle = getCombinedStyle(".imageView", {
			width: null,
			height: 50,
			left: 0,
			right: 0,
			imageFillType: ImageFillType.NORMAL,
			positionType: FlexLayout.PositionType.ABSOLUTE
		});  
		var loadingImageView = new ImageView(loadingImageViewStyle);  
		buttonLayout.addChild(loadingImageView);
		this.loadingImageView = loadingImageView;
	
		const usernameLayoutStyle = getCombinedStyle(".flexLayout", {
			height: 60,
			left: 0,
			top: 0,
			width: 250,
			backgroundColor: Color.create(0, 255, 255, 255),
			marginBottom: 5,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var usernameLayout = new TextboxWithLine(usernameLayoutStyle, "pgLogin");  
		inputLayout.addChild(usernameLayout);
		this.usernameLayout = usernameLayout;
	
		const signinButtonStyle = getCombinedStyle(".button", {
			text: "SIGN IN",
			width: 250,
			height: 50,
			borderRadius: 25,
			borderColor: Color.create(255, 233, 233, 233),
			borderWidth: 1,
			backgroundColor: Color.create(0, 23, 117, 208)
		});  
		var signinButton = new Button(signinButtonStyle);  
		buttonLayout.addChild(signinButton);
		this.signinButton = signinButton;
	
		const passwordLayoutStyle = getCombinedStyle(".flexLayout", {
			height: 60,
			left: 0,
			top: 0,
			width: 250,
			backgroundColor: Color.create(0, 255, 255, 255),
			marginTop: 5,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var passwordLayout = new TextboxWithLine(passwordLayoutStyle, "pgLogin");  
		inputLayout.addChild(passwordLayout);
		this.passwordLayout = passwordLayout;
	
		//assign the children to page 
		this.children = Object.assign({}, {
			imageview156: imageview156,
			appName: appName,
			inputLayout: inputLayout,
			buttonLayout: buttonLayout
		});
		
		//assign the children of inputLayout
		inputLayout.children = Object.assign({}, {
			usernameLayout: usernameLayout,
			passwordLayout: passwordLayout
		});
		
		//assign the children of buttonLayout
		buttonLayout.children = Object.assign({}, {
			loadingImageView: loadingImageView,
			signinButton: signinButton
		});
		
	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar .statusBar-login", {});
	
	Object.assign(this.statusBar, statusBarStyle);
	
	if(statusBarStyle.color)
	  this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
	if(statusBarStyle.style)
	  this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar .headerBar-login", {
		title: "newPage001"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page .page-login", {
		justifyContent: FlexLayout.JustifyContent.SPACE_AROUND,
		alignItems: FlexLayout.AlignItems.STRETCH
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgLogin_);