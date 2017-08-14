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
const Button = require('sf-core/ui/button');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Font = require('sf-core/ui/font');

const ListItem1 = require("../components/ListItem1");
const HorizontalDivider = require("../components/HorizontalDivider");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgExpenseApprovalDetail_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const mainLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 810,
			marginLeft: null,
			marginRight: null,
			paddingLeft: null,
			paddingRight: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			top: null,
			flexGrow: null
		});  
		var mainLayout = new FlexLayout(mainLayoutStyle);  
		this.layout.addChild(mainLayout);
		this.mainLayout = mainLayout;
	
		const userInformationStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 90,
			paddingLeft: 10,
			paddingRight: 10,
			marginLeft: 10,
			marginRight: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});  
		var userInformation = new FlexLayout(userInformationStyle);  
		mainLayout.addChild(userInformation);
			
		const detailsLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			paddingLeft: 10,
			paddingTop: 10,
			paddingRight: 10,
			height: 210,
			marginLeft: 10,
			marginRight: 10
		});  
		var detailsLayout = new FlexLayout(detailsLayoutStyle);  
		mainLayout.addChild(detailsLayout);
			
		const noteLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 120,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			marginLeft: 10,
			marginRight: 10
		});  
		var noteLayout = new FlexLayout(noteLayoutStyle);  
		mainLayout.addChild(noteLayout);
			
		const fileLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 300,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			marginLeft: 10,
			marginRight: 10
		});  
		var fileLayout = new FlexLayout(fileLayoutStyle);  
		mainLayout.addChild(fileLayout);
		this.fileLayout = fileLayout;
	
		const buttonsLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 60,
			marginTop: 10,
			backgroundColor: Color.create(0, 255, 255, 255),
			marginLeft: 10,
			marginRight: 10,
			flexDirection: FlexLayout.FlexDirection.ROW
		});  
		var buttonsLayout = new FlexLayout(buttonsLayoutStyle);  
		mainLayout.addChild(buttonsLayout);
			
		const fileTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: 25,
			text: "FILE"
		});  
		var fileTitle = new Label(fileTitleStyle);  
		if(fileTitleStyle.scrollEnabled === false)
			fileTitle.ios && (fileTitle.ios.scrollEnabled = false);
		fileLayout.addChild(fileTitle);
		this.fileTitle = fileTitle;
	
		const noteTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: 25,
			text: "NOTE"
		});  
		var noteTitle = new Label(noteTitleStyle);  
		if(noteTitleStyle.scrollEnabled === false)
			noteTitle.ios && (noteTitle.ios.scrollEnabled = false);
		noteLayout.addChild(noteTitle);
		this.noteTitle = noteTitle;
	
		const detailsTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			width: null,
			height: 25,
			text: "DETAILS"
		});  
		var detailsTitle = new Label(detailsTitleStyle);  
		if(detailsTitleStyle.scrollEnabled === false)
			detailsTitle.ios && (detailsTitle.ios.scrollEnabled = false);
		detailsLayout.addChild(detailsTitle);
		this.detailsTitle = detailsTitle;
	
		const rejectStyle = getCombinedStyle(".button", {
			text: "REJECT",
			width: null,
			height: null,
			backgroundColor: Color.create(255, 255, 50, 75),
			flexGrow: 10
		});  
		var reject = new Button(rejectStyle);  
		buttonsLayout.addChild(reject);
		this.reject = reject;
	
		const avatarStyle = getCombinedStyle(".imageView", {
			width: 60,
			height: 60,
			image: Image.createFromFile("images://avatar1.png"),
			imageFillType: ImageFillType.ASPECTFIT
		});  
		var avatar = new ImageView(avatarStyle);  
		userInformation.addChild(avatar);
		this.avatar = avatar;
	
		const imageview22Style = getCombinedStyle(".imageView", {
			width: null,
			height: null,
			image: Image.createFromFile("images://invoice.png"),
			marginTop: 10,
			imageFillType: ImageFillType.ASPECTFIT,
			flexGrow: 1
		});  
		var imageview22 = new ImageView(imageview22Style);  
		fileLayout.addChild(imageview22);
			
		const noteStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			marginTop: 10,
			text: null,
			flexGrow: 1
		});  
		var note = new Label(noteStyle);  
		if(noteStyle.scrollEnabled === false)
			note.ios && (note.ios.scrollEnabled = false);
		noteLayout.addChild(note);
		this.note = note;
	
		const flexlayout109Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 60,
			marginLeft: 10,
			flexGrow: 1
		});  
		var flexlayout109 = new FlexLayout(flexlayout109Style);  
		userInformation.addChild(flexlayout109);
			
		const titleItemStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 40,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		}); 
		var titleItem = new ListItem1(titleItemStyle, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(titleItem);
		this.titleItem = titleItem;
	
		const flexlayout191Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});  
		var flexlayout191 = new FlexLayout(flexlayout191Style);  
		buttonsLayout.addChild(flexlayout191);
			
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
		var horizontalDivider = new HorizontalDivider(horizontalDividerStyle, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(horizontalDivider);
			
		const approveStyle = getCombinedStyle(".button", {
			text: "APPROVE",
			width: null,
			height: null,
			backgroundColor: Color.create(255, 62, 208, 151),
			flexGrow: 10
		});  
		var approve = new Button(approveStyle);  
		buttonsLayout.addChild(approve);
		this.approve = approve;
	
		const typeItemStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 40,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		}); 
		var typeItem = new ListItem1(typeItemStyle, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(typeItem);
		this.typeItem = typeItem;
	
		const horizontaldivider_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var horizontaldivider_1 = new HorizontalDivider(horizontaldivider_1Style, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(horizontaldivider_1);
			
		const expenseItemStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 40,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		}); 
		var expenseItem = new ListItem1(expenseItemStyle, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(expenseItem);
		this.expenseItem = expenseItem;
	
		const horizontaldivider_2Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var horizontaldivider_2 = new HorizontalDivider(horizontaldivider_2Style, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(horizontaldivider_2);
			
		const expenseDateItemStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 40,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		}); 
		var expenseDateItem = new ListItem1(expenseDateItemStyle, "pgExpenseApprovalDetail");  
		detailsLayout.addChild(expenseDateItem);
		this.expenseDateItem = expenseDateItem;
	
		const nameStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			text: "Adam Stewart",
			textColor: Color.create(255, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 18, Font.NORMAL)
		});  
		var name = new Label(nameStyle);  
		if(nameStyle.scrollEnabled === false)
			name.ios && (name.ios.scrollEnabled = false);
		flexlayout109.addChild(name);
		this.name = name;
	
		const positionStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			text: "Manager of S&M",
			textColor: Color.create(128, 74, 74, 74),
			flexGrow: 1,
			font: Font.create("Arial", 14, Font.NORMAL)
		});  
		var position = new Label(positionStyle);  
		if(positionStyle.scrollEnabled === false)
			position.ios && (position.ios.scrollEnabled = false);
		flexlayout109.addChild(position);
		this.position = position;
	
		//assign the children to page 
		this.children = Object.assign({}, {
			mainLayout: mainLayout
		});
		
		//assign the children of mainLayout
		mainLayout.children = Object.assign({}, {
			userInformation: userInformation,
			detailsLayout: detailsLayout,
			noteLayout: noteLayout,
			fileLayout: fileLayout,
			buttonsLayout: buttonsLayout
		});
		
		//assign the children of userInformation
		userInformation.children = Object.assign({}, {
			avatar: avatar,
			flexlayout109: flexlayout109
		});
		
		//assign the children of detailsLayout
		detailsLayout.children = Object.assign({}, {
			detailsTitle: detailsTitle,
			titleItem: titleItem,
			horizontalDivider: horizontalDivider,
			typeItem: typeItem,
			horizontaldivider_1: horizontaldivider_1,
			expenseItem: expenseItem,
			horizontaldivider_2: horizontaldivider_2,
			expenseDateItem: expenseDateItem
		});
		
		//assign the children of noteLayout
		noteLayout.children = Object.assign({}, {
			noteTitle: noteTitle,
			note: note
		});
		
		//assign the children of fileLayout
		fileLayout.children = Object.assign({}, {
			fileTitle: fileTitle,
			imageview22: imageview22
		});
		
		//assign the children of buttonsLayout
		buttonsLayout.children = Object.assign({}, {
			reject: reject,
			flexlayout191: flexlayout191,
			approve: approve
		});
		
		//assign the children of flexlayout109
		flexlayout109.children = Object.assign({}, {
			name: name,
			position: position
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

module && (module.exports = PgExpenseApprovalDetail_);