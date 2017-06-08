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
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');
const Color = require('sf-core/ui/color');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgSalary_ = extend(Page)(
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
			height: 82,
			marginTop: null,
			positionType: FlexLayout.PositionType.RELATIVE
		});
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgSalary");
		this.layout.addChild(layoutHeaderBar);
		this.layoutHeaderBar = layoutHeaderBar;

		const flexlayout1Style = getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			height: 180,
			width: null
		});
		var flexlayout1 = new FlexLayout(flexlayout1Style);
		this.layout.addChild(flexlayout1);
		
		const listViewStyle = getCombinedStyle(".listView", {
			width: null,
			marginLeft: 10,
			marginRight: 10,
			flexGrow: 1
		});
		var listView = new ListView(listViewStyle);
		listView.onRowCreate = function(){ return new ListViewItem(); };
		this.layout.addChild(listView);
		this.listView = listView;

		const imageview1Style = getCombinedStyle(".imageView", {
			height: null,
			width: null,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graph.png"),
			flexGrow: 1
		});
		var imageview1 = new ImageView(imageview1Style);
		flexlayout1.addChild(imageview1);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			flexlayout1: flexlayout1,
			listView: listView
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			imageview1: imageview1
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
		backgroundColor: Color.create(255, 228, 228, 228)
	});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgSalary_);