/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const ImageView = require('sf-core/ui/imageview');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Image = require('sf-core/ui/image');

const LayoutHeaderBar = require("../components/LayoutHeaderBar");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgPerformance_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		var layoutHeaderBar = new LayoutHeaderBar(getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			left: 0,
			top: 0,
			width: null,
			height: 82,
			marginTop: 20,
			positionType: FlexLayout.PositionType.RELATIVE
		}), "pgPerformance");
		this.layout.addChild(layoutHeaderBar);
		
		var flexlayout1 = new FlexLayout(getCombinedStyle(".flexLayout .flexLayout-headerBar", {
			width: null
		})); 
		this.layout.addChild(flexlayout1);
		
		var imageview1 = new ImageView(getCombinedStyle(".imageView", {
			width: null,
			height: null,
			imageFillType: ImageFillType.ASPECTFIT,
			image: Image.createFromFile("images://graph.png"),
			flexGrow: 1
		})); 
		flexlayout1.addChild(imageview1);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			layoutHeaderBar: layoutHeaderBar,
			flexlayout1: flexlayout1
		});
		
		//assign the children of flexlayout1
		flexlayout1.children = Object.assign({}, {
			imageview1: imageview1
		});
		
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

module && (module.exports = PgPerformance_);