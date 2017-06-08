const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgOverview");

const TITLE = "OVERVIEW";

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params){
		// Initalizes super class for this page scope
		_super(this, params);
		
		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			typeof _superOnLoad === "function" && _superOnLoad();
			this.layoutHeaderBar.children.headerBarTitle.text = TITLE;
		}.bind(this);
});

module && (module.exports = Page_);