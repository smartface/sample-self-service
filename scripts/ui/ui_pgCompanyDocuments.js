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

const LayoutHeaderBar = require("../components/LayoutHeaderBar");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgCompanyDocuments_ = extend(Page)(
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
		var layoutHeaderBar = new LayoutHeaderBar(layoutHeaderBarStyle, "pgCompanyDocuments");
		this.layout.addChild(layoutHeaderBar);
		this.layoutHeaderBar = layoutHeaderBar;

		const listViewContainerStyle = getCombinedStyle(".flexLayout .flexLayout-main", {
			width: null,
			height: null
		});
		var listViewContainer = new FlexLayout(listViewContainerStyle);
		this.layout.addChild(listViewContainer);
		this.listViewContainer = listViewContainer;

		const listViewStyle = getCombinedStyle(".listView", {
			width: null,
			height: null,
			flexGrow: 1
		});
		var listView = new ListView(listViewStyle);
		listView.onRowCreate = function(){ return new ListViewItem(); };
		listViewContainer.addChild(listView);
		this.listView = listView;

		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			listViewContainer: listViewContainer
		});
		
		//assign the children of listViewContainer
		listViewContainer.children = Object.assign({}, {
			listView: listView
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

  const pageStyle = getCombinedStyle(".page", {});
	
	Object.assign(this.layout, pageStyle);
	
}

module && (module.exports = PgCompanyDocuments_);