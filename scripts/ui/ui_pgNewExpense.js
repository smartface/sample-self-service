/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const Button = require('sf-core/ui/button');
const Label = require('sf-core/ui/label');
const Font = require('sf-core/ui/font');
const TextBox = require('sf-core/ui/textbox');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');

const PickerContainer = require("../components/PickerContainer");
const ItemFile = require("../components/ItemFile");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgNewExpense_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const mainContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			height: 610,
			id: null,
			flexGrow: null,
			alignItems: FlexLayout.AlignItems.STRETCH
		});
		var mainContainer = new FlexLayout(mainContainerStyle);
		this.layout.addChild(mainContainer);
		this.mainContainer = mainContainer;

		const flexlayout190Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			marginBottom: 10,
			marginTop: 10
		});
		var flexlayout190 = new FlexLayout(flexlayout190Style);
		mainContainer.addChild(flexlayout190);
		
		const flexlayout66Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			height: 150,
			paddingLeft: 15,
			paddingRight: 15,
			paddingTop: 10,
			paddingBottom: 10,
			marginBottom: 10,
			flexGrow: null
		});
		var flexlayout66 = new FlexLayout(flexlayout66Style);
		mainContainer.addChild(flexlayout66);
		
		const flexlayout66_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			height: 150,
			paddingLeft: 15,
			paddingRight: 15,
			paddingTop: 10,
			paddingBottom: 10,
			marginBottom: null,
			flexGrow: null
		});
		var flexlayout66_1 = new FlexLayout(flexlayout66_1Style);
		mainContainer.addChild(flexlayout66_1);
		
		const button1Style = getCombinedStyle(".button", {
			height: 60,
			top: 10,
			width: null,
			text: "SUBMIT",
			marginLeft: 10,
			marginRight: 10,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var button1 = new Button(button1Style);
		mainContainer.addChild(button1);
		
		const flexlayout76Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76 = new FlexLayout(flexlayout76Style);
		flexlayout66.addChild(flexlayout76);
		
		const label139Style = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			left: null,
			text: "DETAILS",
			top: null,
			marginLeft: 10,
			marginTop: 5,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label139 = new Label(label139Style);
		flexlayout190.addChild(label139);
		
		const flexlayout76_1Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76_1 = new FlexLayout(flexlayout76_1Style);
		flexlayout66_1.addChild(flexlayout76_1);
		
		const flexlayout437Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			paddingLeft: null,
			flexGrow: 1,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout437 = new FlexLayout(flexlayout437Style);
		flexlayout66_1.addChild(flexlayout437);
		
		const pickerContainerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginTop: 5,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var pickerContainer = new PickerContainer(pickerContainerStyle, "pgNewExpense");
		flexlayout190.addChild(pickerContainer);
		
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
		
		const pickercontainer_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginTop: 5,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var pickercontainer_1 = new PickerContainer(pickercontainer_1Style, "pgNewExpense");
		flexlayout190.addChild(pickercontainer_1);
		
		const flexlayout191Style = getCombinedStyle(".flexLayout", {
			height: 50,
			width: null,
			marginTop: 5,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout191 = new FlexLayout(flexlayout191Style);
		flexlayout190.addChild(flexlayout191);
		
		const label85Style = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "NOTE",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label85 = new Label(label85Style);
		flexlayout76.addChild(label85);
		
		const itemFileStyle = getCombinedStyle(".flexLayout", {
			width: 65,
			height: 65,
			left: 0,
			top: 0,
			backgroundColor: Color.create(0, 255, 255, 255),
			borderColor: Color.create(255, 203, 204, 208),
			borderRadius: null,
			borderWidth: 0.5,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var itemFile = new ItemFile(itemFileStyle, "pgNewExpense");
		flexlayout437.addChild(itemFile);
		
		const label85_1Style = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "FILE ATTACHMENT",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label85_1 = new Label(label85_1Style);
		flexlayout76_1.addChild(label85_1);
		
		const flexlayout192Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var flexlayout192 = new PickerContainer(flexlayout192Style, "pgNewExpense");
		flexlayout191.addChild(flexlayout192);
		
		const imageview17Style = getCombinedStyle(".imageView", {
			width: 14,
			height: 25,
			image: Image.createFromFile("images://icon_microphone.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});
		var imageview17 = new ImageView(imageview17Style);
		flexlayout76.addChild(imageview17);
		
		const flexlayout192_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginLeft: 20,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var flexlayout192_1 = new PickerContainer(flexlayout192_1Style, "pgNewExpense");
		flexlayout191.addChild(flexlayout192_1);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			mainContainer: mainContainer
		});
		
		//assign the children of mainContainer
		mainContainer.children = Object.assign({}, {
			flexlayout190: flexlayout190,
			flexlayout66: flexlayout66,
			flexlayout66_1: flexlayout66_1,
			button1: button1
		});
		
		//assign the children of flexlayout190
		flexlayout190.children = Object.assign({}, {
			label139: label139,
			pickerContainer: pickerContainer,
			pickercontainer_1: pickercontainer_1,
			flexlayout191: flexlayout191
		});
		
		//assign the children of flexlayout66
		flexlayout66.children = Object.assign({}, {
			flexlayout76: flexlayout76,
			textbox1: textbox1
		});
		
		//assign the children of flexlayout66_1
		flexlayout66_1.children = Object.assign({}, {
			flexlayout76_1: flexlayout76_1,
			flexlayout437: flexlayout437
		});
		
		//assign the children of flexlayout76
		flexlayout76.children = Object.assign({}, {
			label85: label85,
			imageview17: imageview17
		});
		
		//assign the children of flexlayout76_1
		flexlayout76_1.children = Object.assign({}, {
			label85_1: label85_1
		});
		
		//assign the children of flexlayout437
		flexlayout437.children = Object.assign({}, {
			itemFile: itemFile
		});
		
		//assign the children of flexlayout191
		flexlayout191.children = Object.assign({}, {
			flexlayout192: flexlayout192,
			flexlayout192_1: flexlayout192_1
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
		title: "EXPENSE ENTRY"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 239, 239, 239)
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgNewExpense_);