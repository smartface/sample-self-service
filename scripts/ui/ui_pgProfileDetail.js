/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');
const Label = require('sf-core/ui/label');
const Font = require('sf-core/ui/font');

const HierarchyController = require("../components/HierarchyController");
const ListItem1 = require("../components/ListItem1");
const HorizontalDivider = require("../components/HorizontalDivider");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgProfileDetail_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			width: null,
			height: 170,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var flexlayout1 = new FlexLayout(flexlayout1Style);
		this.layout.addChild(flexlayout1);
		
		const flexlayout500Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: 610,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: null
		});
		var flexlayout500 = new FlexLayout(flexlayout500Style);
		this.layout.addChild(flexlayout500);
		this.flexlayout500 = flexlayout500;

		const qualificationcontainerStyle = getCombinedStyle(".flexLayout", {
			width: null,
			left: null,
			right: null,
			top: null,
			marginLeft: 10,
			marginRight: 10,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			height: 220
		});
		var qualificationcontainer = new FlexLayout(qualificationcontainerStyle);
		flexlayout500.addChild(qualificationcontainer);
		
		const imageview111Style = getCombinedStyle(".imageView", {
			height: 85,
			width: 85,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://myavatar.png"),
			marginBottom: 5
		});
		var imageview111 = new ImageView(imageview111Style);
		flexlayout1.addChild(imageview111);
		
		const label827Style = getCombinedStyle(".label .label-overview-title", {
			width: 200,
			height: 25,
			text: "Anthony Bell",
			font: Font.create("Arial", 18, Font.NORMAL)
		});
		var label827 = new Label(label827Style);
		flexlayout1.addChild(label827);
		
		const hierarchyControllerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 360,
			height: 345,
			marginLeft: 10,
			marginRight: 10,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var hierarchyController = new HierarchyController(hierarchyControllerStyle, "pgProfileDetail");
		flexlayout500.addChild(hierarchyController);
		this.hierarchyController = hierarchyController;

		const label827_1Style = getCombinedStyle(".label .label-overview-title", {
			width: 200,
			height: 25,
			text: "Director of Sales & Marketing",
			font: Font.create("Arial", 14, Font.NORMAL)
		});
		var label827_1 = new Label(label827_1Style);
		flexlayout1.addChild(label827_1);
		
		const informationTitleStyle = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "INFORMATION",
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var informationTitle = new Label(informationTitleStyle);
		qualificationcontainer.addChild(informationTitle);
		this.informationTitle = informationTitle;

		const companyStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var company = new ListItem1(companyStyle, "pgProfileDetail");
		qualificationcontainer.addChild(company);
		this.company = company;

		const horizontalDividerStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			paddingBottom: null,
			marginBottom: 5,
			marginTop: 5,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var horizontalDivider = new HorizontalDivider(horizontalDividerStyle, "pgProfileDetail");
		qualificationcontainer.addChild(horizontalDivider);
		
		const emailStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			marginTop: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var email = new ListItem1(emailStyle, "pgProfileDetail");
		qualificationcontainer.addChild(email);
		this.email = email;

		const horizontaldivider_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			marginTop: 5,
			marginBottom: 5,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var horizontaldivider_1 = new HorizontalDivider(horizontaldivider_1Style, "pgProfileDetail");
		qualificationcontainer.addChild(horizontaldivider_1);
		
		const workPhoneStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			marginTop: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var workPhone = new ListItem1(workPhoneStyle, "pgProfileDetail");
		qualificationcontainer.addChild(workPhone);
		this.workPhone = workPhone;

		const horizontaldivider_1_1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			marginTop: 5,
			marginBottom: 5,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var horizontaldivider_1_1 = new HorizontalDivider(horizontaldivider_1_1Style, "pgProfileDetail");
		qualificationcontainer.addChild(horizontaldivider_1_1);
		
		const mobilePhoneStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			marginTop: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var mobilePhone = new ListItem1(mobilePhoneStyle, "pgProfileDetail");
		qualificationcontainer.addChild(mobilePhone);
		this.mobilePhone = mobilePhone;

		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout1: flexlayout1,
			flexlayout500: flexlayout500
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			imageview111: imageview111,
			label827: label827,
			label827_1: label827_1
		});
		
		//assign the children of flexlayout500
		flexlayout500.children = Object.assign({}, {
			qualificationcontainer: qualificationcontainer,
			hierarchyController: hierarchyController
		});
		
		//assign the children of qualificationcontainer
		qualificationcontainer.children = Object.assign({}, {
			informationTitle: informationTitle,
			company: company,
			horizontalDivider: horizontalDivider,
			email: email,
			horizontaldivider_1: horizontaldivider_1,
			workPhone: workPhone,
			horizontaldivider_1_1: horizontaldivider_1_1,
			mobilePhone: mobilePhone
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
		title: null,
		visible: true
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgProfileDetail_);