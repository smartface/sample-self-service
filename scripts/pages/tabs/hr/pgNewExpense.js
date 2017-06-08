const extend = require('js-base/core/extend');
const PageDesign = require("../../../ui/ui_pgNewExpense");
const ScrollView = require("sf-core/ui/scrollview");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onLoad(superOnLoad) {
	typeof superOnLoad === "function" && superOnLoad();
	wrapContentIntoScroll.call(this);
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1	
	});
	this.layout.removeChild(this.mainContainer);
	this.scrollView.addChild(this.mainContainer);
	this.layout.addChild(this.scrollView);
} 

module && (module.exports = Page_);