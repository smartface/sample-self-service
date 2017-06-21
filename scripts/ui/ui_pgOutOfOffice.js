/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const Label = require('sf-core/ui/label');
const TextBox = require('sf-core/ui/textbox');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");
const ListItemSwitch = require("../components/ListItemSwitch");
const HorizontalDivider = require("../components/HorizontalDivider");
const PickerContainer = require("../components/PickerContainer");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgOutOfOffice_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this),
			orientation: Page.Orientation.PORTRAIT
		}, props || {}));

		const layoutHeaderBarStyle = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			left: 0,
			top: 0,
			width: null,
			height: 92,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgOutOfOffice");
		this.layout.addChild(layoutHeaderBar);
		this.layoutHeaderBar = layoutHeaderBar;

		const mainContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 610,
			marginLeft: 10,
			marginRight: 10,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: null
		});
		var mainContainer = new FlexLayout(mainContainerStyle);
		this.layout.addChild(mainContainer);
		this.mainContainer = mainContainer;

		const flexlayout48Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 59,
			paddingLeft: 10,
			paddingRight: 10
		});
		var flexlayout48 = new FlexLayout(flexlayout48Style);
		mainContainer.addChild(flexlayout48);
		
		const dateContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			top: null,
			paddingLeft: 10,
			paddingTop: 10,
			paddingRight: 10,
			height: 190,
			marginTop: 10
		});
		var dateContainer = new FlexLayout(dateContainerStyle);
		mainContainer.addChild(dateContainer);
		
		const intExtContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 160,
			top: null,
			marginLeft: null,
			marginTop: 10,
			paddingLeft: 10,
			paddingTop: 10,
			paddingRight: 10
		});
		var intExtContainer = new FlexLayout(intExtContainerStyle);
		mainContainer.addChild(intExtContainer);
		
		const noteContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			height: 160,
			paddingBottom: 10
		});
		var noteContainer = new FlexLayout(noteContainerStyle);
		mainContainer.addChild(noteContainer);
		
		const outOfOfficeStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 59,
			left: 0,
			top: 0,
			marginLeft: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var outOfOffice = new ListItemSwitch(outOfOfficeStyle, "pgOutOfOffice");
		flexlayout48.addChild(outOfOffice);
		this.outOfOffice = outOfOffice;

		const flexlayout97Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 25,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout97 = new FlexLayout(flexlayout97Style);
		noteContainer.addChild(flexlayout97);
		
		const intExtTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "LOREM IPSUM"
		});
		var intExtTitle = new Label(intExtTitleStyle);
		intExtContainer.addChild(intExtTitle);
		this.intExtTitle = intExtTitle;

		const startTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "START"
		});
		var startTitle = new Label(startTitleStyle);
		dateContainer.addChild(startTitle);
		this.startTitle = startTitle;

		const internalStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 59,
			left: 0,
			top: 0,
			marginLeft: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var internal = new ListItemSwitch(internalStyle, "pgOutOfOffice");
		intExtContainer.addChild(internal);
		this.internal = internal;

		const descriptionStyle = getCombinedStyle(".textBox", {
			width: null,
			height: null,
			marginTop: 10,
			text: null,
			borderWidth: 0.5,
			borderColor: Color.create(255, 203, 204, 208),
			flexGrow: 1
		});
		var description = new TextBox(descriptionStyle);
		noteContainer.addChild(description);
		this.description = description;

		const flexlayout742Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 45,
			marginTop: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN
		});
		var flexlayout742 = new FlexLayout(flexlayout742Style);
		dateContainer.addChild(flexlayout742);
		
		const endTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			marginLeft: null,
			marginTop: 10,
			text: "END"
		});
		var endTitle = new Label(endTitleStyle);
		dateContainer.addChild(endTitle);
		this.endTitle = endTitle;

		const horizontalDividerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var horizontalDivider = new HorizontalDivider(horizontalDividerStyle, "pgOutOfOffice");
		intExtContainer.addChild(horizontalDivider);
		
		const externalStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 59,
			left: 0,
			top: 0,
			marginLeft: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var external = new ListItemSwitch(externalStyle, "pgOutOfOffice");
		intExtContainer.addChild(external);
		this.external = external;

		const flexlayout742_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 45,
			marginTop: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN
		});
		var flexlayout742_1 = new FlexLayout(flexlayout742_1Style);
		dateContainer.addChild(flexlayout742_1);
		
		const startDatePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 140,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: null
		});
		var startDatePicker = new PickerContainer(startDatePickerStyle, "pgOutOfOffice");
		flexlayout742.addChild(startDatePicker);
		this.startDatePicker = startDatePicker;

		const noteTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "NOTE",
			flexGrow: 1
		});
		var noteTitle = new Label(noteTitleStyle);
		flexlayout97.addChild(noteTitle);
		this.noteTitle = noteTitle;

		const endDatePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 140,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: null
		});
		var endDatePicker = new PickerContainer(endDatePickerStyle, "pgOutOfOffice");
		flexlayout742_1.addChild(endDatePicker);
		this.endDatePicker = endDatePicker;

		const endTimePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 140,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: null
		});
		var endTimePicker = new PickerContainer(endTimePickerStyle, "pgOutOfOffice");
		flexlayout742_1.addChild(endTimePicker);
		this.endTimePicker = endTimePicker;

		const imageview44Style = getCombinedStyle(".imageView", {
			width: 14,
			image: Image.createFromFile("images://icon_microphone.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			height: null
		});
		var imageview44 = new ImageView(imageview44Style);
		flexlayout97.addChild(imageview44);
		
		const startTimePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 140,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: null
		});
		var startTimePicker = new PickerContainer(startTimePickerStyle, "pgOutOfOffice");
		flexlayout742.addChild(startTimePicker);
		this.startTimePicker = startTimePicker;

		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			mainContainer: mainContainer
		});
		
		//assign the children of mainContainer
		mainContainer.children = Object.assign({}, {
			flexlayout48: flexlayout48,
			dateContainer: dateContainer,
			intExtContainer: intExtContainer,
			noteContainer: noteContainer
		});
		
		//assign the children of flexlayout48
		flexlayout48.children = Object.assign({}, {
			outOfOffice: outOfOffice
		});
		
		//assign the children of dateContainer
		dateContainer.children = Object.assign({}, {
			startTitle: startTitle,
			flexlayout742: flexlayout742,
			endTitle: endTitle,
			flexlayout742_1: flexlayout742_1
		});
		
		//assign the children of intExtContainer
		intExtContainer.children = Object.assign({}, {
			intExtTitle: intExtTitle,
			internal: internal,
			horizontalDivider: horizontalDivider,
			external: external
		});
		
		//assign the children of noteContainer
		noteContainer.children = Object.assign({}, {
			flexlayout97: flexlayout97,
			description: description
		});
		
		//assign the children of flexlayout97
		flexlayout97.children = Object.assign({}, {
			noteTitle: noteTitle,
			imageview44: imageview44
		});
		
		//assign the children of flexlayout742
		flexlayout742.children = Object.assign({}, {
			startDatePicker: startDatePicker,
			startTimePicker: startTimePicker
		});
		
		//assign the children of flexlayout742_1
		flexlayout742_1.children = Object.assign({}, {
			endDatePicker: endDatePicker,
			endTimePicker: endTimePicker
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
		title: "newPage001",
		visible: false
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgOutOfOffice_);