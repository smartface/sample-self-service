/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");
const TopTabBar = require("../components/TopTabBar");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgLeaveManagement_ = extend(Page)(
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
			height: 102,
			positionType: FlexLayout.PositionType.RELATIVE
		}); 
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgLeaveManagement");  
		this.layout.addChild(layoutHeaderBar);
		this.layoutHeaderBar = layoutHeaderBar;
	
		const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			width: null,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});  
		var flexlayout1 = new FlexLayout(flexlayout1Style);  
		this.layout.addChild(flexlayout1);
			
		const listViewContainerStyle = getCombinedStyle(".flexLayout", {
			backgroundColor: Color.create(0, 255, 255, 255),
			width: null,
			height: null,
			marginLeft: 10,
			marginRight: 10,
			flexGrow: 1,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});  
		var listViewContainer = new FlexLayout(listViewContainerStyle);  
		this.layout.addChild(listViewContainer);
		this.listViewContainer = listViewContainer;
	
		const listViewStyle = getCombinedStyle(".listView", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			itemCount: 0,
			flexGrow: 1
		});  
		var listView = new ListView(listViewStyle);  
		listView.onRowCreate = function(){ return new ListViewItem(); };
		listViewContainer.addChild(listView);
		this.listView = listView;
	
		const flexlayout30Style = getCombinedStyle(".flexLayout", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.STRETCH
		});  
		var flexlayout30 = new FlexLayout(flexlayout30Style);  
		flexlayout1.addChild(flexlayout30);
			
		const topTabBarStyle = getCombinedStyle(".flexLayout", {
			width: null,
			height: 50,
			left: 0,
			right: 0,
			backgroundColor: Color.create(0, 255, 255, 255),
			top: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			flexDirection: FlexLayout.FlexDirection.ROW,
			justifyContent: FlexLayout.JustifyContent.CENTER,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexGrow: null,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		}); 
		var topTabBar = new TopTabBar(topTabBarStyle, "pgLeaveManagement");  
		flexlayout1.addChild(topTabBar);
		this.topTabBar = topTabBar;
	
		const imageview11Style = getCombinedStyle(".imageView", {
			width: null,
			height: null,
			imageFillType: ImageFillType.ASPECTFIT,
			flexGrow: 1
		});  
		var imageview11 = new ImageView(imageview11Style);  
		flexlayout30.addChild(imageview11);
			
		const imageview11_1Style = getCombinedStyle(".imageView", {
			width: null,
			height: null,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graph2.png"),
			flexGrow: 1
		});  
		var imageview11_1 = new ImageView(imageview11_1Style);  
		flexlayout30.addChild(imageview11_1);
			
		const imageview11_1_1Style = getCombinedStyle(".imageView", {
			width: null,
			height: 60,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graphlegend.png"),
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.CENTER
		});  
		var imageview11_1_1 = new ImageView(imageview11_1_1Style);  
		flexlayout30.addChild(imageview11_1_1);
			
		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			flexlayout1: flexlayout1,
			listViewContainer: listViewContainer
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			flexlayout30: flexlayout30,
			topTabBar: topTabBar
		});
		
		//assign the children of listViewContainer
		listViewContainer.children = Object.assign({}, {
			listView: listView
		});
		
		//assign the children of flexlayout30
		flexlayout30.children = Object.assign({}, {
			imageview11: imageview11,
			imageview11_1: imageview11_1,
			imageview11_1_1: imageview11_1_1
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

  const pageStyle = getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 226, 226, 228)
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgLeaveManagement_);