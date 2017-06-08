const extend = require('js-base/core/extend');
const ScrollView = require("sf-core/ui/scrollview");

const PageDesign = require("../../../ui/ui_pgOverview");

const TITLE = "OVERVIEW";

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
});

function onLoad(superOnLoad) {
	superOnLoad();
	this.layoutHeaderBar.children.headerBarTitle.text = TITLE;
	wrapContentIntoScroll.call(this);
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.flexlayout500);
	this.scrollView.addChild(this.flexlayout500);
	this.layout.addChild(this.scrollView);
} 

module && (module.exports = Page_);