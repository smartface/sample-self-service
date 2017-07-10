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
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');
const Label = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Font = require('sf-core/ui/font');
const Button = require('sf-core/ui/button');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const Page1_ = extend(Page)(
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
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			visible: true,
			alpha: 1,
			width: null,
			marginLeft: null,
			marginRight: null,
			maxHeight: 60,
			marginTop: 10,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			flexGrow: 4
		});
		var img = new ImageView(imgStyle);
		this.layout.addChild(img);
		
		const lblStyle = getCombinedStyle(".label", {
			left: null,
			top: null,
			right: null,
			bottom: null,
			height: 90,
			backgroundColor: Color.create(0, 255, 255, 255),
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			visible: true,
			textAlignment: TextAlignment.MIDCENTER,
			alpha: 1,
			width: null,
			text: null,
			marginLeft: null,
			marginRight: null,
			multiline: true,
			marginTop: null,
			maxHeight: 90,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			flexGrow: 2,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var lbl = new Label(lblStyle);
		this.layout.addChild(lbl);
		
		const flexlayoutStyle = getCombinedStyle(".flexLayout", {
			right: null,
			bottom: null,
			height: 130,
			backgroundColor: Color.create(0, 255, 255, 255),
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0,
			visible: true,
			alpha: 1,
			width: null,
			left: null,
			marginLeft: null,
			marginRight: null,
			maxHeight: 130,
			alignContent: FlexLayout.AlignContent.STRETCH,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.CENTER,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			flexGrow: 3
		});
		var flexlayout = new FlexLayout(flexlayoutStyle);
		this.layout.addChild(flexlayout);
		
		const btnStyle = getCombinedStyle(".button", {
			left: null,
			top: null,
			right: 0,
			bottom: 0,
			height: 60,
			text: "Click me!",
			backgroundColor: Color.create(255, 0, 161, 241),
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			visible: true,
			alpha: 1,
			width: null,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var btn = new Button(btnStyle);
		flexlayout.addChild(btn);
		
		const btnNextStyle = getCombinedStyle(".button", {
			left: null,
			top: 10,
			right: 0,
			bottom: 0,
			height: 60,
			text: "Next Page",
			backgroundColor: Color.create(255, 0, 161, 241),
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			visible: true,
			alpha: 1,
			width: null,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var btnNext = new Button(btnNextStyle);
		flexlayout.addChild(btnNext);
		this.btnNext = btnNext;

		//assign the children to page 
		this.children = Object.assign({}, {
			img: img,
			lbl: lbl,
			flexlayout: flexlayout
		});
		
		//assign the children of flexlayout
		flexlayout.children = Object.assign({}, {
			btn: btn,
			btnNext: btnNext
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
		title: "page1",
		titleColor: Color.create(255, 0, 0, 0),
		visible: true
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create("#EEEEEE"),
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: null,
		paddingBottom: 10,
		flexDirection: FlexLayout.FlexDirection.COLUMN,
		alignItems: FlexLayout.AlignItems.CENTER,
		direction: FlexLayout.Direction.INHERIT,
		flexWrap: FlexLayout.FlexWrap.NOWRAP,
		justifyContent: FlexLayout.JustifyContent.SPACE_AROUND
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = Page1_);