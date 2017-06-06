/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgSignUp_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));


	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
	Object.assign(this.statusBar, getCombinedStyle(".statusBar", {}));
  //HeaderBar props
	Object.assign(this.headerBar,	getCombinedStyle(".headerBar", {
		title: "newPage001"
	}));
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 
	Object.assign(this.layout, getCombinedStyle(".page", {}));
}

module && (module.exports = PgSignUp_);