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

const LayoutHeaderBar = require("../components/LayoutHeaderBar");
const ListItem1 = require("../components/ListItem1");
const HorizontalDivider = require("../components/HorizontalDivider");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgOverview_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const layoutHeaderBarStyle = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			left: 0,
			top: 0,
			width: null,
			height: 92,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgOverview");
		this.layout.addChild(layoutHeaderBar);
		
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
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1
		});
		var flexlayout500 = new FlexLayout(flexlayout500Style);
		this.layout.addChild(flexlayout500);
		
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
			height: 170
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
		
		const salarycontainerStyle = getCombinedStyle(".flexLayout", {
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
			height: 120
		});
		var salarycontainer = new FlexLayout(salarycontainerStyle);
		flexlayout500.addChild(salarycontainer);
		
		const label827Style = getCombinedStyle(".label .label-overview-title", {
			width: 200,
			height: 25,
			text: "Anthony Bell",
			font: Font.create("Arial", 18, Font.NORMAL)
		});
		var label827 = new Label(label827Style);
		flexlayout1.addChild(label827);
		
		const qualificationcontainer_1Style = getCombinedStyle(".flexLayout", {
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
			height: 170
		});
		var qualificationcontainer_1 = new FlexLayout(qualificationcontainer_1Style);
		flexlayout500.addChild(qualificationcontainer_1);
		
		const label827_1Style = getCombinedStyle(".label .label-overview-title", {
			width: 200,
			height: 25,
			text: "Director of Sales & Marketing",
			font: Font.create("Arial", 14, Font.NORMAL)
		});
		var label827_1 = new Label(label827_1Style);
		flexlayout1.addChild(label827_1);
		
		const label536_2Style = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "PERFORMANCE OBJECTIVE",
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label536_2 = new Label(label536_2Style);
		qualificationcontainer_1.addChild(label536_2);
		
		const label536Style = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "QUALIFICATION",
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label536 = new Label(label536Style);
		qualificationcontainer.addChild(label536);
		
		const label536_1Style = getCombinedStyle(".label .label-list-item-header", {
			height: 25,
			width: null,
			text: "SALARY",
			font: Font.create("Arial", 16, Font.NORMAL)
		});
		var label536_1 = new Label(label536_1Style);
		salarycontainer.addChild(label536_1);
		
		const listitem1_2Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var listitem1_2 = new ListItem1(listitem1_2Style, "pgOverview");
		salarycontainer.addChild(listitem1_2);
		
		const listitem1_3Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var listitem1_3 = new ListItem1(listitem1_3Style, "pgOverview");
		qualificationcontainer_1.addChild(listitem1_3);
		
		const listItem1Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: 326,
			height: 35,
			backgroundColor: Color.create(255, 255, 255, 255),
			flexDirection: FlexLayout.FlexDirection.ROW,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var listItem1 = new ListItem1(listItem1Style, "pgOverview");
		qualificationcontainer.addChild(listItem1);
		
		const horizontaldivider_2Style = getCombinedStyle(".flexLayout", {
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
		var horizontaldivider_2 = new HorizontalDivider(horizontaldivider_2Style, "pgOverview");
		salarycontainer.addChild(horizontaldivider_2);
		
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
		var horizontalDivider = new HorizontalDivider(horizontalDividerStyle, "pgOverview");
		qualificationcontainer.addChild(horizontalDivider);
		
		const horizontaldivider_3Style = getCombinedStyle(".flexLayout", {
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
		var horizontaldivider_3 = new HorizontalDivider(horizontaldivider_3Style, "pgOverview");
		qualificationcontainer_1.addChild(horizontaldivider_3);
		
		const listitem1_1Style = getCombinedStyle(".flexLayout", {
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
		var listitem1_1 = new ListItem1(listitem1_1Style, "pgOverview");
		qualificationcontainer.addChild(listitem1_1);
		
		const listitem1_1_2Style = getCombinedStyle(".flexLayout", {
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
		var listitem1_1_2 = new ListItem1(listitem1_1_2Style, "pgOverview");
		salarycontainer.addChild(listitem1_1_2);
		
		const listitem1_1_3Style = getCombinedStyle(".flexLayout", {
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
		var listitem1_1_3 = new ListItem1(listitem1_1_3Style, "pgOverview");
		qualificationcontainer_1.addChild(listitem1_1_3);
		
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
		var horizontaldivider_1 = new HorizontalDivider(horizontaldivider_1Style, "pgOverview");
		qualificationcontainer.addChild(horizontaldivider_1);
		
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
		var horizontaldivider_1_1 = new HorizontalDivider(horizontaldivider_1_1Style, "pgOverview");
		qualificationcontainer_1.addChild(horizontaldivider_1_1);
		
		const listitem1_1_1Style = getCombinedStyle(".flexLayout", {
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
		var listitem1_1_1 = new ListItem1(listitem1_1_1Style, "pgOverview");
		qualificationcontainer.addChild(listitem1_1_1);
		
		const performancecontainerStyle = getCombinedStyle(".flexLayout", {
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
		var performancecontainer = new ListItem1(performancecontainerStyle, "pgOverview");
		qualificationcontainer_1.addChild(performancecontainer);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
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
			salarycontainer: salarycontainer,
			qualificationcontainer_1: qualificationcontainer_1
		});
		
		//assign the children of qualificationcontainer
		qualificationcontainer.children = Object.assign({}, {
			label536: label536,
			listItem1: listItem1,
			horizontalDivider: horizontalDivider,
			listitem1_1: listitem1_1,
			horizontaldivider_1: horizontaldivider_1,
			listitem1_1_1: listitem1_1_1
		});
		
		//assign the children of salarycontainer
		salarycontainer.children = Object.assign({}, {
			label536_1: label536_1,
			listitem1_2: listitem1_2,
			horizontaldivider_2: horizontaldivider_2,
			listitem1_1_2: listitem1_1_2
		});
		
		//assign the children of qualificationcontainer_1
		qualificationcontainer_1.children = Object.assign({}, {
			label536_2: label536_2,
			listitem1_3: listitem1_3,
			horizontaldivider_3: horizontaldivider_3,
			listitem1_1_3: listitem1_1_3,
			horizontaldivider_1_1: horizontaldivider_1_1,
			performancecontainer: performancecontainer
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

module && (module.exports = PgOverview_);