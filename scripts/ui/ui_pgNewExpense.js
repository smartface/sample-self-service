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
			height: 620,
			id: null,
			flexGrow: null,
			alignItems: FlexLayout.AlignItems.STRETCH
		});
		var mainContainer = new FlexLayout(mainContainerStyle);
		this.layout.addChild(mainContainer);
		this.mainContainer = mainContainer;

		const detailsLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			marginBottom: 10,
			marginTop: 10,
			height: 210
		});
		var detailsLayout = new FlexLayout(detailsLayoutStyle);
		mainContainer.addChild(detailsLayout);
		
		const noteLayoutStyle = getCombinedStyle(".flexLayout", {
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
		var noteLayout = new FlexLayout(noteLayoutStyle);
		mainContainer.addChild(noteLayout);
		
		const fileAttachmentLayoutStyle = getCombinedStyle(".flexLayout", {
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
		var fileAttachmentLayout = new FlexLayout(fileAttachmentLayoutStyle);
		mainContainer.addChild(fileAttachmentLayout);
		
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
		if(detailsTitleStyle.scrollEnabled === false)
			detailsTitle.ios && (detailsTitle.ios.scrollEnabled = false);
		detailsLayout.addChild(detailsTitle);
		this.detailsTitle = detailsTitle;

		const flexlayout76_1Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76_1 = new FlexLayout(flexlayout76_1Style);
		fileAttachmentLayout.addChild(flexlayout76_1);
		
		const flexlayout76Style = getCombinedStyle(".flexLayout", {
			height: 30,
			width: null,
			marginBottom: 5,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout76 = new FlexLayout(flexlayout76Style);
		noteLayout.addChild(flexlayout76);
		
		const titleInputStyle = getCombinedStyle(".flexLayout", {
			height: 50,
			left: null,
			top: null,
			width: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			visible: true,
			marginTop: 10,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var titleInput = new TextboxWithLine(titleInputStyle, "pgNewExpense");
		detailsLayout.addChild(titleInput);
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
		if(descriptionStyle.hintTextColor)
			description.android && (description.android.hintTextColor = descriptionStyle.hintTextColor);
		if(descriptionStyle.elevation)
			description.android && (description.android.elevation = descriptionStyle.elevation);
		if(descriptionStyle.keyboardAppearance)
			description.ios && (description.ios.keyboardAppearance = descriptionStyle.keyboardAppearance);
		if(descriptionStyle.clearButtonEnabled)
			description.ios && (description.ios.clearButtonEnabled = descriptionStyle.clearButtonEnabled);
		if(descriptionStyle.minimumFontSize)
			description.ios && (description.ios.minimumFontSize = descriptionStyle.minimumFontSize);
		if(descriptionStyle.adjustFontSizeToFit)
			description.ios && (description.ios.adjustFontSizeToFit = descriptionStyle.adjustFontSizeToFit);
		noteLayout.addChild(description);
		this.description = description;

		const attachmentsLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			paddingLeft: null,
			flexGrow: 1,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var attachmentsLayout = new FlexLayout(attachmentsLayoutStyle);
		fileAttachmentLayout.addChild(attachmentsLayout);
		this.attachmentsLayout = attachmentsLayout;

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
		detailsLayout.addChild(expenseInput);
		this.expenseInput = expenseInput;

		const flexlayout191Style = getCombinedStyle(".flexLayout", {
			height: 50,
			width: null,
			marginTop: 5,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexDirection: FlexLayout.FlexDirection.ROW
		});
		var flexlayout191 = new FlexLayout(flexlayout191Style);
		detailsLayout.addChild(flexlayout191);
		
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

		const addFileStyle = getCombinedStyle(".flexLayout", {
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
		var addFile = new ItemFile(addFileStyle, "pgNewExpense");
		attachmentsLayout.addChild(addFile);
		this.addFile = addFile;

		const noteTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: null,
			text: "NOTE",
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var noteTitle = new Label(noteTitleStyle);
		if(noteTitleStyle.scrollEnabled === false)
			noteTitle.ios && (noteTitle.ios.scrollEnabled = false);
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
		if(fileAttachmentTitleStyle.scrollEnabled === false)
			fileAttachmentTitle.ios && (fileAttachmentTitle.ios.scrollEnabled = false);
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
			detailsLayout: detailsLayout,
			noteLayout: noteLayout,
			fileAttachmentLayout: fileAttachmentLayout,
			requestButton: requestButton
		});
		
		//assign the children of detailsLayout
		detailsLayout.children = Object.assign({}, {
			detailsTitle: detailsTitle,
			titleInput: titleInput,
			expenseInput: expenseInput,
			flexlayout191: flexlayout191
		});
		
		//assign the children of noteLayout
		noteLayout.children = Object.assign({}, {
			flexlayout76: flexlayout76,
			description: description
		});
		
		//assign the children of fileAttachmentLayout
		fileAttachmentLayout.children = Object.assign({}, {
			flexlayout76_1: flexlayout76_1,
			attachmentsLayout: attachmentsLayout
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
		
		//assign the children of attachmentsLayout
		attachmentsLayout.children = Object.assign({}, {
			addFile: addFile
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