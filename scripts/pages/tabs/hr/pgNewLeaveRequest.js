/*globals lang*/
const extend = require('js-base/core/extend');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewLeaveRequest");

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		this.onLoad = onLoad.bind(this, this.onLoad);
	}
);

function onLoad(parentOnLoad) {
	if (typeof parentOnLoad === "function") parentOnLoad();
	this.headerBar.title = lang["pgNewLeaveRequest.pageTitle"];
	this.headerBar.itemColor = Color.WHITE;
}

module && (module.exports = Page_);