/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');



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
			marginTop: 10
		});
		var flexlayout84 = new FlexLayout(flexlayout84Style);
		this.layout.addChild(flexlayout84);
		
		const flexlayout85Style = getCombinedStyle(".flexLayout", {
			height: 40,
			width: null,
			flexDirection: FlexLayout.FlexDirection.ROW,
			alignItems: FlexLayout.AlignItems.CENTER
		});
		var flexlayout85 = new FlexLayout(flexlayout85Style);
		flexlayout84.addChild(flexlayout85);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			flexlayout84: flexlayout84
		});
		
		//assign the children of flexlayout84
		flexlayout84.children = Object.assign({}, {
			flexlayout85: flexlayout85
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

module && (module.exports = PgSettings_);