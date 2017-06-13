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

const TextboxWithLine = require("../components/TextboxWithLine");
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

		const detailsContainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			marginBottom: 10,
			marginTop: 10
		});
		var detailsContainer = new FlexLayout(detailsContainerStyle);
		mainContainer.addChild(detailsContainer);
		
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
		
		const requestButtonStyle = getCombinedStyle(".button", {
			height: 60,
			top: 10,
			width: null,
			text: "REQUEST",
			marginLeft: 10,
			marginRight: 10,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var requestButton = new Button(requestButtonStyle);
		mainContainer.addChild(requestButton);
		this.requestButton = requestButton;

		const detailsTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			left: null,
			text: "DETAILS",
			top: null,
			marginLeft: 10,
			marginTop: 5,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var detailsTitle = new Label(detailsTitleStyle);
		detailsContainer.addChild(detailsTitle);
		this.detailsTitle = detailsTitle;

		const flexlayout76_1Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76_1 = new FlexLayout(flexlayout76_1Style);
		flexlayout66_1.addChild(flexlayout76_1);
		
		const flexlayout76Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76 = new FlexLayout(flexlayout76Style);
		flexlayout66.addChild(flexlayout76);
		
		const titleInputStyle = getCombinedStyle(".flexLayout", {
			height: 50,
			left: null,
			top: null,
			width: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			visible: true,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var titleInput = new TextboxWithLine(titleInputStyle, "pgNewExpense");
		detailsContainer.addChild(titleInput);
		this.titleInput = titleInput;

		const descriptionStyle = getCombinedStyle(".textBox", {
			width: null,
			height: null,
			borderWidth: 0.5,
			backgroundColor: Color.create(255, 255, 255, 255),
			borderColor: Color.create(255, 203, 204, 208),
			text: null,
			textColor: Color.create(71, 0, 0, 0),
			flexGrow: 1
		});
		var description = new TextBox(descriptionStyle);
		flexlayout66.addChild(description);
		this.description = description;

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
		
		const expenseInputStyle = getCombinedStyle(".flexLayout", {
			height: 50,
			left: 0,
			top: 0,
			width: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			paddingLeft: null,
			paddingRight: null,
			marginTop: 5,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var expenseInput = new TextboxWithLine(expenseInputStyle, "pgNewExpense");
		detailsContainer.addChild(expenseInput);
		this.expenseInput = expenseInput;

		const flexlayout191Style = getCombinedStyle(".flexLayout", {
			height: 50,
			width: null,
			marginTop: 5,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout191 = new FlexLayout(flexlayout191Style);
		detailsContainer.addChild(flexlayout191);
		
		const typePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var typePicker = new PickerContainer(typePickerStyle, "pgNewExpense");
		flexlayout191.addChild(typePicker);
		this.typePicker = typePicker;

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
		
		const noteTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "NOTE",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var noteTitle = new Label(noteTitleStyle);
		flexlayout76.addChild(noteTitle);
		this.noteTitle = noteTitle;

		const fileAttachmentTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "FILE ATTACHMENT",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var fileAttachmentTitle = new Label(fileAttachmentTitleStyle);
		flexlayout76_1.addChild(fileAttachmentTitle);
		this.fileAttachmentTitle = fileAttachmentTitle;

		const expenseDatePickerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 45,
			marginLeft: 20,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexGrow: 1
		});
		var expenseDatePicker = new PickerContainer(expenseDatePickerStyle, "pgNewExpense");
		flexlayout191.addChild(expenseDatePicker);
		this.expenseDatePicker = expenseDatePicker;

		const imageview17Style = getCombinedStyle(".imageView", {
			width: 14,
			height: 25,
			image: Image.createFromFile("images://icon_microphone.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});
		var imageview17 = new ImageView(imageview17Style);
		flexlayout76.addChild(imageview17);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			mainContainer: mainContainer
		});
		
		//assign the children of mainContainer
		mainContainer.children = Object.assign({}, {
			detailsContainer: detailsContainer,
			flexlayout66: flexlayout66,
			flexlayout66_1: flexlayout66_1,
			requestButton: requestButton
		});
		
		//assign the children of detailsContainer
		detailsContainer.children = Object.assign({}, {
			detailsTitle: detailsTitle,
			titleInput: titleInput,
			expenseInput: expenseInput,
			flexlayout191: flexlayout191
		});
		
		//assign the children of flexlayout66
		flexlayout66.children = Object.assign({}, {
			flexlayout76: flexlayout76,
			description: description
		});
		
		//assign the children of flexlayout66_1
		flexlayout66_1.children = Object.assign({}, {
			flexlayout76_1: flexlayout76_1,
			flexlayout437: flexlayout437
		});
		
		//assign the children of flexlayout76_1
		flexlayout76_1.children = Object.assign({}, {
			fileAttachmentTitle: fileAttachmentTitle
		});
		
		//assign the children of flexlayout76
		flexlayout76.children = Object.assign({}, {
			noteTitle: noteTitle,
			imageview17: imageview17
		});
		
		//assign the children of flexlayout437
		flexlayout437.children = Object.assign({}, {
			itemFile: itemFile
		});
		
		//assign the children of flexlayout191
		flexlayout191.children = Object.assign({}, {
			typePicker: typePicker,
			expenseDatePicker: expenseDatePicker
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
		title: null
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