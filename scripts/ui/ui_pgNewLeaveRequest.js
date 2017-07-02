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

const PgNewLeaveRequest_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const flexlayout1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 160,
			marginLeft: 10,
			marginRight: 10,
			marginTop: 10,
			paddingLeft: null,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			marginBottom: 10
		});
		var flexlayout1 = new FlexLayout(flexlayout1Style);
		this.layout.addChild(flexlayout1);
		
		const flexlayout66Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			height: 230,
			paddingLeft: 15,
			paddingRight: 15,
			paddingTop: 10,
			paddingBottom: 10
		});
		var flexlayout66 = new FlexLayout(flexlayout66Style);
		this.layout.addChild(flexlayout66);
		
		const button1Style = getCombinedStyle(".button", {
			left: 0,
			top: null,
			width: null,
			height: 60,
			marginLeft: null,
			marginRight: null,
			marginBottom: null,
			right: 0,
			bottom: 0,
			text: "REQUEST",
			positionType: FlexLayout.PositionType.ABSOLUTE
		});
		var button1 = new Button(button1Style);
		this.layout.addChild(button1);
		
		const informationTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			text: "WORK INFORMATION",
			width: 250,
			marginLeft: 10,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var informationTitle = new Label(informationTitleStyle);
		flexlayout1.addChild(informationTitle);
		this.informationTitle = informationTitle;

		const flexlayout76Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76 = new FlexLayout(flexlayout76Style);
		flexlayout66.addChild(flexlayout76);
		
		const flexlayout2Style = getCombinedStyle(".flexLayout", {
			height: 66,
			width: null,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			flexGrow: 1
		});
		var flexlayout2 = new FlexLayout(flexlayout2Style);
		flexlayout1.addChild(flexlayout2);
		
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
		
		const flexlayout3Style = getCombinedStyle(".flexLayout", {
			height: null,
			width: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: 1
		});
		var flexlayout3 = new FlexLayout(flexlayout3Style);
		flexlayout2.addChild(flexlayout3);
		
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
		
		const flexlayout3_1Style = getCombinedStyle(".flexLayout", {
			height: null,
			width: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: 1
		});
		var flexlayout3_1 = new FlexLayout(flexlayout3_1Style);
		flexlayout2.addChild(flexlayout3_1);
		
		const imageview17Style = getCombinedStyle(".imageView", {
			width: 14,
			height: 25,
			image: Image.createFromFile("images://icon_microphone.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});
		var imageview17 = new ImageView(imageview17Style);
		flexlayout76.addChild(imageview17);
		
		const leaveTypePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var leaveTypePicker = new PickerContainer(leaveTypePickerStyle, "pgNewLeaveRequest");
		flexlayout3.addChild(leaveTypePicker);
		this.leaveTypePicker = leaveTypePicker;

		const selectDatePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var selectDatePicker = new PickerContainer(selectDatePickerStyle, "pgNewLeaveRequest");
		flexlayout3_1.addChild(selectDatePicker);
		this.selectDatePicker = selectDatePicker;

		const timeTypePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginLeft: 20,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var timeTypePicker = new PickerContainer(timeTypePickerStyle, "pgNewLeaveRequest");
		flexlayout3.addChild(timeTypePicker);
		this.timeTypePicker = timeTypePicker;

		const selectTimePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginLeft: 20,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var selectTimePicker = new PickerContainer(selectTimePickerStyle, "pgNewLeaveRequest");
		flexlayout3_1.addChild(selectTimePicker);
		this.selectTimePicker = selectTimePicker;

		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout1: flexlayout1,
			flexlayout66: flexlayout66,
			button1: button1
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			informationTitle: informationTitle,
			flexlayout2: flexlayout2
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
		
		//assign the children of flexlayout2
		flexlayout2.children = Object.assign({}, {
			flexlayout3: flexlayout3,
			flexlayout3_1: flexlayout3_1
		});
		
		//assign the children of flexlayout3
		flexlayout3.children = Object.assign({}, {
			leaveTypePicker: leaveTypePicker,
			timeTypePicker: timeTypePicker
		});
		
		//assign the children of flexlayout3_1
		flexlayout3_1.children = Object.assign({}, {
			selectDatePicker: selectDatePicker,
			selectTimePicker: selectTimePicker
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
		title: "LEAVE REQUEST"
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgNewLeaveRequest_);