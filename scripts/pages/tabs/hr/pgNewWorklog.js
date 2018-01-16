const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Color = require('sf-core/ui/color');
const PageDesign = require("../../../ui/ui_pgNewWorklog");


const Page_ = extend(PageDesign)(
	// Constructor
	function(_super){
		// Initalizes super class for this page scope
		_super(this, {
			//onLoad: onLoad.bind(this)
		});
		
        this.onError = function(e){
            console.log(e.message);
        }
		
});

module && (module.exports = Page_);