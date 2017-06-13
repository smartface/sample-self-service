const extend = require('js-base/core/extend');
const Image = require("sf-core/ui/image");
const PageDesign = require("../../../ui/ui_pgMyCompany");
const Data = require('sf-core/data');

const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		
		var _superOnLoad = this.onLoad;
		this.onLoad = function() {
			typeof _superOnLoad === "function" && _superOnLoad();
			
			console.log(Data.getStringVariable("theme"));
			this.layoutHeaderBar.children.headerBarTitle.text = lang["pgMyCompany.pageTitle"];
			if (Data.getStringVariable("theme") === "Style1") {
				this.comingSoon.image = Image.createFromFile("images://coming_soon.png");
			} else {
				this.comingSoon.image = Image.createFromFile("images://coming_soon_style2.png");
			}
		}.bind(this);
    }
);

module && (module.exports = Page_);