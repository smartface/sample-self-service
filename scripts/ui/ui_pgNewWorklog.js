/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Button = require('sf-core/ui/button');
const Label = require('sf-core/ui/label');
const Font = require('sf-core/ui/font');
const TextBox = require('sf-core/ui/textbox');
const Color = require('sf-core/ui/color');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');

const PickerContainer = require("../components/PickerContainer");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgNewWorklog_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const flexlayout35Style = getCombinedStyle(".flexLayout", {
			marginLeft: 10,
			marginRight: 10,
			marginTop: 10,
			marginBottom: 10,
			width: null,
			height: 240,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10
		});
		var flexlayout35 = new FlexLayout(flexlayout35Style);
		this.layout.addChild(flexlayout35);
		
		const flexlayout66Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			height: null,
			paddingLeft: 15,
			paddingRight: 15,
			paddingTop: 10,
			paddingBottom: 10,
			marginBottom: 70,
			flexGrow: 1
		});
		var flexlayout66 = new FlexLayout(flexlayout66Style);
		this.layout.addChild(flexlayout66);
		
		const button1Style = getCombinedStyle(".button", {
			height: 60,
			left: -1,
			top: 543,
			width: null,
			right: 0,
			bottom: 0,
			text: "SUBMIT",
			positionType: FlexLayout.PositionType.ABSOLUTE
		});
		var button1 = new Button(button1Style);
		this.layout.addChild(button1);
		
		const label39Style = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			marginLeft: 10,
			text: "WORK INFO",
			width: 250,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label39 = new Label(label39Style);
		flexlayout35.addChild(label39);
		
		const flexlayout76Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: 312,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76 = new FlexLayout(flexlayout76Style);
		flexlayout66.addChild(flexlayout76);
		
		const textbox1Style = getCombinedStyle(".textBox", {
			width: null,
			height: null,
			borderWidth: 0.5,
			backgroundColor: Color.create(255, 255, 255, 255),
			borderColor: Color.create(255, 203, 204, 208),
			text: "Description",
			textColor: Color.create(71, 0, 0, 0),
			flexGrow: 1
		});
		var textbox1 = new TextBox(textbox1Style);
		flexlayout66.addChild(textbox1);
		
		const pickerContainerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginTop: 10,
			marginBottom: 10,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var pickerContainer = new PickerContainer(pickerContainerStyle, "pgNewWorklog");
		flexlayout35.addChild(pickerContainer);
		
		const pickercontainer_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginBottom: 10,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var pickercontainer_1 = new PickerContainer(pickercontainer_1Style, "pgNewWorklog");
		flexlayout35.addChild(pickercontainer_1);
		
		const flexlayout51Style = getCombinedStyle(".flexLayout", {
			height: 50,
			width: null,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout51 = new FlexLayout(flexlayout51Style);
		flexlayout35.addChild(flexlayout51);
		
		const flexlayout52Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var flexlayout52 = new PickerContainer(flexlayout52Style, "pgNewWorklog");
		flexlayout51.addChild(flexlayout52);
		
		const label85Style = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "DESCRIPTION",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label85 = new Label(label85Style);
		flexlayout76.addChild(label85);
		
		const imageview17Style = getCombinedStyle(".imageView", {
			width: 14,
			height: 25,
			image: Image.createFromFile("images://icon_microphone.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});
		var imageview17 = new ImageView(imageview17Style);
		flexlayout76.addChild(imageview17);
		
		const flexlayout52_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginLeft: 20,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var flexlayout52_1 = new PickerContainer(flexlayout52_1Style, "pgNewWorklog");
		flexlayout51.addChild(flexlayout52_1);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout35: flexlayout35,
			flexlayout66: flexlayout66,
			button1: button1
		});
		
		//assign the children of flexlayout35
		flexlayout35.children = Object.assign({}, {
			label39: label39,
			pickerContainer: pickerContainer,
			pickercontainer_1: pickercontainer_1,
			flexlayout51: flexlayout51
		});
		
		//assign the children of flexlayout66
		flexlayout66.children = Object.assign({}, {
			flexlayout76: flexlayout76,
			textbox1: textbox1
		});
		
		//assign the children of flexlayout76
		flexlayout76.children = Object.assign({}, {
			label85: label85,
			imageview17: imageview17
		});
		
		//assign the children of flexlayout51
		flexlayout51.children = Object.assign({}, {
			flexlayout52: flexlayout52,
			flexlayout52_1: flexlayout52_1
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
		title: "NEW WORK LOG"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 228, 228, 228)
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgNewWorklog_);