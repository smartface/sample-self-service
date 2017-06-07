/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const Color = require('sf-core/ui/color');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");

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
		
		const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			width: null,
			alignItems: FlexLayout.AlignItems.CENTER,
			justifyContent: FlexLayout.JustifyContent.CENTER
		});
		var flexlayout1 = new FlexLayout(flexlayout1Style);
		this.layout.addChild(flexlayout1);
		
		const listViewStyle = getCombinedStyle(".listView", {
			width: null,
			backgroundColor: Color.create(0, 204, 39, 39),
			marginLeft: 10,
			marginRight: 10,
			flexGrow: 1
		});
		var listView = new ListView(listViewStyle);
		listView.onRowCreate = function(){ return new ListViewItem(); };
		this.layout.addChild(listView);
		this.listView = listView;

		const imageview1Style = getCombinedStyle(".imageView", {
			height: 150,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graph2.png"),
			width: 150
		});
		var imageview1 = new ImageView(imageview1Style);
		flexlayout1.addChild(imageview1);
		
		const imageview2Style = getCombinedStyle(".imageView", {
			left: 291.5,
			top: 66,
			width: 74,
			height: 60,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graphlegend.png"),
			positionType: FlexLayout.PositionType.ABSOLUTE
		});
		var imageview2 = new ImageView(imageview2Style);
		flexlayout1.addChild(imageview2);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			flexlayout1: flexlayout1,
			listView: listView
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			imageview1: imageview1,
			imageview2: imageview2
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