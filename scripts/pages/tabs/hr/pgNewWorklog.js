const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewWorklog");


const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this)
		});
});

function onLoad() { 
    this.headerBar.visible = true;
    this.headerBar.title = "pgNewWorklog";
    this.headerBar.titleColor = Color.create("#000000");
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = true;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
}

module && (module.exports = Page_);