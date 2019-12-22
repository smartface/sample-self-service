//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const WebView = extend(require('sf-core/ui/webview'));
const ListView = extend(require('sf-core/ui/listview'));
const ListViewItem = extend(require('sf-core/ui/listviewitem'));
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const LayoutHeaderBar = extend(require('../components/LayoutHeaderBar'));
const TopTabBar = extend(require('../components/TopTabBar'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgLeaveManagement(_super, props) {
	// Initalizes super class for this page scope
	_super(
		this,
		Object.assign(
			{},
			{
				onLoad: onLoad.bind(this)
			},
			props || {}
		)
	);
	this.children = {};
	this.children['statusBar'] = this.statusBar || {};
	this.children['headerBar'] = this.headerBar;
	addChild.call(this, 'layoutHeaderBar', $LayoutHeaderBar_, this);
	addChild.call(this, 'flexlayout1', $Flexlayout1_, this);
	addChild.call(this, 'listViewContainer', $ListViewContainer_, this);
	pageContextPatch(this, 'pgLeaveManagement');
}
$PgLeaveManagement.$$styleContext = {
	classNames: '.page',
	defaultClassNames: ' .default_page',
	userProps: { backgroundColor: 'rgba( 226, 226, 228, 1 )' },
	statusBar: {
		classNames: '',
		defaultClassNames: ' .default_statusBar',
		userProps: {}
	},
	headerBar: {
		classNames: '.headerBar',
		defaultClassNames: ' .default_headerBar',
		userProps: { visible: false }
	}
};
const $PgLeaveManagement_ = Page($PgLeaveManagement);
function $LayoutHeaderBar(_super, pageInstance) {
	_super(this);

	pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
	classNames: '.flexLayout .flexLayout-headerBar',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: 102,
		left: 0,
		top: 0,
		width: null
	}
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $Flexlayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flexlayout30',
		$Flexlayout1$$Flexlayout30_,
		pageInstance
	);
	addChild.call(this, 'topTabBar', $Flexlayout1$$TopTabBar_, pageInstance);
}
$Flexlayout1.$$styleContext = {
	classNames: '.flexLayout .flexLayout-headerBar',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { alignItems: 'CENTER', justifyContent: 'CENTER' },
		width: null
	}
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);
function $Flexlayout1$$Flexlayout30(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'wvChart',
		$Flexlayout1$$Flexlayout30$$WvChart_,
		pageInstance
	);
}
$Flexlayout1$$Flexlayout30.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: {
			flexGrow: 1,
			alignSelf: 'STRETCH',
			flexDirection: 'ROW',
			alignItems: 'STRETCH'
		},
		height: null,
		width: null
	}
};
const $Flexlayout1$$Flexlayout30_ = FlexLayout($Flexlayout1$$Flexlayout30);
function $Flexlayout1$$Flexlayout30$$WvChart(_super, pageInstance) {
	_super(this);

	pageInstance.wvChart = this;
}
$Flexlayout1$$Flexlayout30$$WvChart.$$styleContext = {
	classNames: '.webView',
	defaultClassNames: '.default_common .default_webView',
	userProps: {
		flexProps: { flexGrow: 1 },
		height: null,
		visible: false,
		width: null
	}
};
const $Flexlayout1$$Flexlayout30$$WvChart_ = WebView(
	$Flexlayout1$$Flexlayout30$$WvChart
);

function $Flexlayout1$$TopTabBar(_super, pageInstance) {
	_super(this);

	pageInstance.topTabBar = this;
}
$Flexlayout1$$TopTabBar.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: {
			positionType: 'RELATIVE',
			flexDirection: 'ROW',
			justifyContent: 'CENTER',
			flexWrap: 'NOWRAP',
			flexGrow: null,
			alignSelf: 'STRETCH'
		},
		height: 50,
		left: 0,
		right: 0,
		top: 0,
		width: null
	}
};
const $Flexlayout1$$TopTabBar_ = TopTabBar($Flexlayout1$$TopTabBar);

function $ListViewContainer(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'listView', $ListViewContainer$$ListView_, pageInstance);
	pageInstance.listViewContainer = this;
}
$ListViewContainer.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { flexGrow: 1, justifyContent: 'CENTER' },
		height: null,
		marginLeft: 10,
		marginRight: 10,
		width: null
	}
};
const $ListViewContainer_ = FlexLayout($ListViewContainer);
function $ListViewContainer$$ListView(_super, pageInstance) {
	_super(this, { itemCount: 0 });
	var itemIndex = 0;
	this.onRowCreate = function() {
		var item = new ListViewItem();
		this.dispatch(actionAddChild(`item${++itemIndex}`, item));
		return item;
	};
	pageInstance.listView = this;
}
$ListViewContainer$$ListView.$$styleContext = {
	classNames: '.listView',
	defaultClassNames: '.default_common .default_listView',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { flexGrow: 1 },
		height: null,
		width: null
	}
};
const $ListViewContainer$$ListView_ = ListView($ListViewContainer$$ListView);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'newPage001';
}

module.exports = $PgLeaveManagement_;
