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
const TextAlignment = require('sf-core/ui/textalignment');
const Font = require('sf-core/ui/font');
const Switch = require('sf-core/ui/switch');

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

		const flexlayout84Style = getCombinedStyle(".flexLayout .flexLayout-main", {
			height: null,
			width: null,
			paddingLeft: null,
			paddingRight: null
		});  
		var flexlayout84 = new FlexLayout(flexlayout84Style);  
		this.layout.addChild(flexlayout84);
			
		const flexlayout85Style = getCombinedStyle(".flexLayout", {
			height: 60,
			width: null,
			marginRight: 10,
			marginLeft: 10,
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
			
		const flexlayout85_1Style = getCombinedStyle(".flexLayout", {
			height: 60,
			width: null,
			marginRight: 10,
			marginLeft: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});  
		var flexlayout85_1 = new FlexLayout(flexlayout85_1Style);  
		flexlayout84.addChild(flexlayout85_1);
			
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
		var horizontaldivider_1 = new HorizontalDivider(horizontaldivider_1Style, "pgSettings");  
		flexlayout84.addChild(horizontaldivider_1);
			
		const layoutFingerStyle = getCombinedStyle(".flexLayout", {
			height: 60,
			width: null,
			marginRight: 10,
			marginLeft: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});  
		var layoutFinger = new FlexLayout(layoutFingerStyle);  
		flexlayout84.addChild(layoutFinger);
		this.layoutFinger = layoutFinger;
	
		const horizontalDividerFingerprintStyle = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var horizontalDividerFingerprint = new HorizontalDivider(horizontalDividerFingerprintStyle, "pgSettings");  
		flexlayout84.addChild(horizontalDividerFingerprint);
		this.horizontalDividerFingerprint = horizontalDividerFingerprint;
	
		const layoutAboutStyle = getCombinedStyle(".flexLayout", {
			height: 60,
			width: null,
			marginRight: 10,
			marginLeft: 10,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER,
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});  
		var layoutAbout = new FlexLayout(layoutAboutStyle);  
		flexlayout84.addChild(layoutAbout);
		this.layoutAbout = layoutAbout;
	
		const txtAboutDescStyle = getCombinedStyle(".label", {
			width: null,
			height: 100,
			marginLeft: 15,
			marginRight: 10,
			marginTop: null,
			text: "",
			multiline: true,
			textColor: Color.create(255, 155, 155, 155),
			textAlignment: TextAlignment.TOPLEFT,
			font: Font.create("Arial", 14, Font.NORMAL)
		});  
		var txtAboutDesc = new Label(txtAboutDescStyle);  
		if(txtAboutDescStyle.scrollEnabled === false)
			txtAboutDesc.ios && (txtAboutDesc.ios.scrollEnabled = false);
		flexlayout84.addChild(txtAboutDesc);
		this.txtAboutDesc = txtAboutDesc;
	
		const signoutLayoutStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 61,
			marginLeft: null,
			marginRight: null,
			marginBottom: null,
			left: 0,
			right: 0,
			bottom: 0,
			top: null,
			positionType: FlexLayout.PositionType.ABSOLUTE
		});  
		var signoutLayout = new FlexLayout(signoutLayoutStyle);  
		flexlayout84.addChild(signoutLayout);
		this.signoutLayout = signoutLayout;
	
		const txtNotificationStyle = getCombinedStyle(".label .label-list-item-title", {
			text: "Notification",
			width: null,
			height: 70,
			left: 5,
			flexGrow: 1
		});  
		var txtNotification = new Label(txtNotificationStyle);  
		if(txtNotificationStyle.scrollEnabled === false)
			txtNotification.ios && (txtNotification.ios.scrollEnabled = false);
		flexlayout85_1.addChild(txtNotification);
		this.txtNotification = txtNotification;
	
		const flexlayout731Style = getCombinedStyle(".flexLayout", {
			left: 0,
			top: 0,
			width: null,
			height: 1,
			backgroundColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			flexGrow: null,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var flexlayout731 = new HorizontalDivider(flexlayout731Style, "pgSettings");  
		signoutLayout.addChild(flexlayout731);
			
		const txtFingerPrintStyle = getCombinedStyle(".label .label-list-item-title", {
			text: "FingerPrint",
			width: null,
			height: 70,
			left: 5,
			flexGrow: 1
		});  
		var txtFingerPrint = new Label(txtFingerPrintStyle);  
		if(txtFingerPrintStyle.scrollEnabled === false)
			txtFingerPrint.ios && (txtFingerPrint.ios.scrollEnabled = false);
		layoutFinger.addChild(txtFingerPrint);
		this.txtFingerPrint = txtFingerPrint;
	
		const txtThemeStyle = getCombinedStyle(".label .label-list-item-title", {
			text: "Theme",
			width: null,
			height: 70,
			left: 5,
			flexGrow: 1
		});  
		var txtTheme = new Label(txtThemeStyle);  
		if(txtThemeStyle.scrollEnabled === false)
			txtTheme.ios && (txtTheme.ios.scrollEnabled = false);
		flexlayout85.addChild(txtTheme);
		this.txtTheme = txtTheme;
	
		const txtAboutStyle = getCombinedStyle(".label .label-list-item-title", {
			text: "About",
			width: null,
			height: 70,
			left: 5,
			flexGrow: 1
		});  
		var txtAbout = new Label(txtAboutStyle);  
		if(txtAboutStyle.scrollEnabled === false)
			txtAbout.ios && (txtAbout.ios.scrollEnabled = false);
		layoutAbout.addChild(txtAbout);
		this.txtAbout = txtAbout;
	
		const txtNewVersionStyle = getCombinedStyle(".label .label-list-item-title", {
			text: "New Version Avaliable!",
			width: null,
			height: 70,
			left: null,
			textAlignment: TextAlignment.MIDRIGHT,
			right: 5,
			textColor: Color.create(255, 74, 144, 226),
			visible: true,
			flexGrow: 1
		});  
		var txtNewVersion = new Label(txtNewVersionStyle);  
		if(txtNewVersionStyle.scrollEnabled === false)
			txtNewVersion.ios && (txtNewVersion.ios.scrollEnabled = false);
		layoutAbout.addChild(txtNewVersion);
		this.txtNewVersion = txtNewVersion;
	
		const switchFingerStyle = getCombinedStyle(".switch", {
			width: null,
			toggle: false,
			minHeight: 31,
			minWidth: 51
		});  
		var switchFinger = new Switch(switchFingerStyle);  
		if(switchFingerStyle.toggleOffColor)
			switchFinger.android && (switchFinger.android.toggleOffColor = switchFingerStyle.toggleOffColor);
		layoutFinger.addChild(switchFinger);
		this.switchFinger = switchFinger;
	
		const switch1Style = getCombinedStyle(".switch", {
			width: null,
			toggle: false,
			minHeight: 31,
			minWidth: 51
		});  
		var switch1 = new Switch(switch1Style);  
		if(switch1Style.toggleOffColor)
			switch1.android && (switch1.android.toggleOffColor = switch1Style.toggleOffColor);
		flexlayout85_1.addChild(switch1);
			
		const themeBlueLayoutStyle = getCombinedStyle(".flexLayout", {
			width: 35,
			height: 35,
			borderRadius: 8,
			borderWidth: 1,
			borderColor: Color.create(255, 195, 195, 195),
			marginLeft: 10,
			marginRight: null
		});  
		var themeBlueLayout = new FlexLayout(themeBlueLayoutStyle);  
		flexlayout85.addChild(themeBlueLayout);
		this.themeBlueLayout = themeBlueLayout;
	
		const lblSignOutStyle = getCombinedStyle(".label", {
			width: null,
			height: null,
			text: "Sign out",
			textAlignment: TextAlignment.MIDCENTER,
			textColor: Color.create(255, 255, 50, 75),
			flexGrow: 1
		});  
		var lblSignOut = new Label(lblSignOutStyle);  
		if(lblSignOutStyle.scrollEnabled === false)
			lblSignOut.ios && (lblSignOut.ios.scrollEnabled = false);
		signoutLayout.addChild(lblSignOut);
		this.lblSignOut = lblSignOut;
	
		const themePurpleLayoutStyle = getCombinedStyle(".flexLayout", {
			width: 35,
			height: 35,
			borderRadius: 8,
			borderWidth: 0,
			borderColor: Color.create(255, 195, 195, 195),
			marginLeft: 10,
			marginRight: null
		});  
		var themePurpleLayout = new FlexLayout(themePurpleLayoutStyle);  
		flexlayout85.addChild(themePurpleLayout);
		this.themePurpleLayout = themePurpleLayout;
	
		const flexlayout247_1Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			marginLeft: 4,
			marginTop: 4,
			marginRight: 4,
			marginBottom: 4,
			borderColor: Color.create(255, 69, 73, 90),
			backgroundColor: Color.create(255, 124, 115, 192),
			borderRadius: 6,
			flexGrow: 1
		});  
		var flexlayout247_1 = new FlexLayout(flexlayout247_1Style);  
		themePurpleLayout.addChild(flexlayout247_1);
			
		const flexlayout247Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			marginLeft: 4,
			marginTop: 4,
			marginRight: 4,
			marginBottom: 4,
			borderColor: Color.create(255, 69, 73, 90),
			backgroundColor: Color.create(255, 69, 73, 90),
			borderRadius: 6,
			flexGrow: 1
		});  
		var flexlayout247 = new FlexLayout(flexlayout247Style);  
		themeBlueLayout.addChild(flexlayout247);
			
		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout84: flexlayout84
		});
		
		//assign the children of flexlayout84
		flexlayout84.children = Object.assign({}, {
			flexlayout85: flexlayout85,
			horizontalDivider: horizontalDivider,
			flexlayout85_1: flexlayout85_1,
			horizontaldivider_1: horizontaldivider_1,
			layoutFinger: layoutFinger,
			horizontalDividerFingerprint: horizontalDividerFingerprint,
			layoutAbout: layoutAbout,
			txtAboutDesc: txtAboutDesc,
			signoutLayout: signoutLayout
		});
		
		//assign the children of flexlayout85
		flexlayout85.children = Object.assign({}, {
			txtTheme: txtTheme,
			themeBlueLayout: themeBlueLayout,
			themePurpleLayout: themePurpleLayout
		});
		
		//assign the children of flexlayout85_1
		flexlayout85_1.children = Object.assign({}, {
			txtNotification: txtNotification,
			switch1: switch1
		});
		
		//assign the children of layoutFinger
		layoutFinger.children = Object.assign({}, {
			txtFingerPrint: txtFingerPrint,
			switchFinger: switchFinger
		});
		
		//assign the children of layoutAbout
		layoutAbout.children = Object.assign({}, {
			txtAbout: txtAbout,
			txtNewVersion: txtNewVersion
		});
		
		//assign the children of signoutLayout
		signoutLayout.children = Object.assign({}, {
			flexlayout731: flexlayout731,
			lblSignOut: lblSignOut
		});
		
		//assign the children of themeBlueLayout
		themeBlueLayout.children = Object.assign({}, {
			flexlayout247: flexlayout247
		});
		
		//assign the children of themePurpleLayout
		themePurpleLayout.children = Object.assign({}, {
			flexlayout247_1: flexlayout247_1
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