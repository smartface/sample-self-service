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

const HorizontalDivider = require("../components/HorizontalDivider");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgSettings_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		const flexlayout84Style = getCombinedStyle(".flexLayout", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			marginTop: 10,
			paddingLeft: 10,
			paddingRight: 10,
			paddingTop: 10,
			paddingBottom: 10
		});
		var flexlayout84 = new FlexLayout(flexlayout84Style);
		this.layout.addChild(flexlayout84);
		
		const flexlayout85Style = getCombinedStyle(".flexLayout", {
			height: 40,
			width: null,
			marginRight: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		var flexlayout85 = new FlexLayout(flexlayout85Style);
		flexlayout84.addChild(flexlayout85);
		
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
		var horizontalDivider = new HorizontalDivider(horizontalDividerStyle, "pgSettings");
		flexlayout84.addChild(horizontalDivider);
		
		const label108Style = getCombinedStyle(".label", {
			text: "Change Theme",
			width: null,
			height: 70,
			left: 5,
			flexGrow: 1
		});
		var label108 = new Label(label108Style);
		flexlayout85.addChild(label108);
		
		const btnBlueStyle = getCombinedStyle(".button", {
			width: 30,
			height: 30,
			text: null,
			marginRight: 20,
			marginLeft: 10
		});
		var btnBlue = new Button(btnBlueStyle);
		flexlayout85.addChild(btnBlue);
		this.btnBlue = btnBlue;

		const btnPurpleStyle = getCombinedStyle(".button", {
			width: 30,
			height: 30,
			text: null,
			backgroundColor: Color.create(255, 124, 115, 192),
			marginRight: 10
		});
		var btnPurple = new Button(btnPurpleStyle);
		flexlayout85.addChild(btnPurple);
		this.btnPurple = btnPurple;

		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout84: flexlayout84
		});
		
		//assign the children of flexlayout84
		flexlayout84.children = Object.assign({}, {
			flexlayout85: flexlayout85,
			horizontalDivider: horizontalDivider
		});
		
		//assign the children of flexlayout85
		flexlayout85.children = Object.assign({}, {
			label108: label108,
			btnBlue: btnBlue,
			btnPurple: btnPurple
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
		title: "Settings",
		visible: true
	});
	
	Object.assign(this.headerBar,	headerBarStyle);
	
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgSettings_);