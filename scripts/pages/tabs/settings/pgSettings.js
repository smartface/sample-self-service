const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgSettings");
const settings = require("../../../.settings.json");
const Application = require("sf-core/application");
const Data = require('sf-core/data');



const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this);
		this.btnBlue.onPress = function()
		{
		    changeTheme("Style1");
		}
		this.btnPurple.onPress = function()
		{
		    changeTheme("Style2");
		}
});

function changeTheme(styleName)
{
        Data.setStringVariable("theme", styleName);
        Application.restart();
}

module && (module.exports = Page_);