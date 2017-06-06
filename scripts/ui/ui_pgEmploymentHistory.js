/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const ListView = require('sf-core/ui/listview');
const ListViewItem = require('sf-core/ui/listviewitem');
const Color = require('sf-core/ui/color');
const FlexLayout = require('sf-core/ui/flexlayout');



const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgEmploymentHistory_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		var listView = new ListView(getCombinedStyle(".listView", {
			width: null,
			height: null,
			backgroundColor: Color.create(0, 255, 255, 255),
			marginLeft: 10,
			marginRight: 10,
			marginBottom: null,
			marginTop: null,
			right: null,
			left: null,
			flexGrow: 1,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		})); 
		listView.onRowCreate = function(){ return new ListViewItem(); };
		this.layout.addChild(listView);
		this.listView = listView;

		//assign the children to page 
		this.children = Object.assign({}, {
			listView: listView
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
	Object.assign(this.layout, getCombinedStyle(".page", {
		backgroundColor: Color.create(255, 234, 234, 235)
	}));
}

module && (module.exports = PgEmploymentHistory_);