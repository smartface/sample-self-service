/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const Color = require('sf-core/ui/color');
const TextAlignment = require('sf-core/ui/textalignment');
const Font = require('sf-core/ui/font');
const Button = require('sf-core/ui/button');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const Page2_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this),
			orientation: Page.Orientation.PORTRAIT
		}, props || {}));

		const imgStyle = getCombinedStyle(".imageView", {
			left: null,
			top: null,
			right: 0,
			bottom: 0,
			height: 60.3,
			image: Image.createFromFile("images://smartface.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			visible: true,
			alpha: 1,
			width: null,
			borderWidth: null,
			marginLeft: 10,
			marginRight: 10,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var img = new ImageView(imgStyle);
		this.layout.addChild(img);
		
		const lblStyle = getCombinedStyle(".label", {
			left: null,
			top: null,
			right: 0,
			bottom: 0,
			height: 90.45000000000002,
			text: "This is second page",
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			backgroundColor: Color.create(0, 0, 0, 0),
			visible: true,
			textAlignment: TextAlignment.MIDCENTER,
			alpha: 1,
			width: null,
			marginLeft: 10,
			marginRight: 10,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var lbl = new Label(lblStyle);
		this.layout.addChild(lbl);
		
		const btnStyle = getCombinedStyle(".button", {
			left: null,
			top: null,
			right: null,
			bottom: null,
			height: 60,
			text: "Back",
			backgroundColor: Color.create(255, 0, 161, 241),
			visible: true,
			alpha: 1,
			width: null,
			borderWidth: null,
			marginLeft: 10,
			marginRight: 10,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var btn = new Button(btnStyle);
		this.layout.addChild(btn);
		this.btn = btn;

		//assign the children to page 
		this.children = Object.assign({}, {
			img: img,
			lbl: lbl,
			btn: btn
		});
		
	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
  const statusBarStyle = getCombinedStyle(".statusBar", {
		visible: true
	});
	
	Object.assign(this.statusBar, statusBarStyle);
	
	if(statusBarStyle.color)
	  this.statusBar.android && (this.statusBar.android.color = statusBarStyle.color);
	if(statusBarStyle.style)
	  this.statusBar.ios && (this.statusBar.ios.style = statusBarStyle.style);

  //HeaderBar props
  const headerBarStyle = getCombinedStyle(".headerBar", {
		title: "page2",
		titleColor: Color.create(255, 0, 0, 0),
		visible: true
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 197, 210, 28),
		alignItems: FlexLayout.AlignItems.CENTER,
		justifyContent: FlexLayout.JustifyContent.SPACE_AROUND,
		flexDirection: FlexLayout.FlexDirection.COLUMN,
		flexWrap: FlexLayout.FlexWrap.NOWRAP,
		direction: FlexLayout.Direction.INHERIT
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = Page2_);