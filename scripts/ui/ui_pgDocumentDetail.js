/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Color = require('sf-core/ui/color');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgDocumentDetail_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const mainLayoutStyle = getCombinedStyle(".flexLayout .flexLayout-main", {
			width: null,
			height: null,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var mainLayout = new FlexLayout(mainLayoutStyle);
		this.layout.addChild(mainLayout);
		this.mainLayout = mainLayout;

		const imageview42Style = getCombinedStyle(".imageView", {
			image: Image.createFromFile("images://add_photo.png"),
			height: 100,
			width: 100,
			imageFillType: ImageFillType.ASPECTFIT
		});
		var imageview42 = new ImageView(imageview42Style);
		mainLayout.addChild(imageview42);
		
		const label322Style = getCombinedStyle(".label", {
			textAlignment: TextAlignment.MIDCENTER,
			text: "Please Upload Your Document",
			textColor: Color.create(255, 155, 155, 155)
		});
		var label322 = new Label(label322Style);
		mainLayout.addChild(label322);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			mainLayout: mainLayout
		});
		
		//assign the children of mainLayout
		mainLayout.children = Object.assign({}, {
			imageview42: imageview42,
			label322: label322
		});
		
	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {});
	
	Object.assign(this.statusBar, statusBarStyle);
	
	if(statusBarStyle.color)
	  this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
	if(statusBarStyle.style)
	  this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
		title: "newPage001"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgDocumentDetail_);