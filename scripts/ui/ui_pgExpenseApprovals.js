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
function $PgExpenseApprovals(_super, props) {
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
	addChild.call(this, 'topTabBar', $TopTabBar_, this);
	addChild.call(this, 'flexlayout1102', $Flexlayout1102_, this);
	addChild.call(this, 'listViewContainer', $ListViewContainer_, this);
	pageContextPatch(this, 'pgExpenseApprovals');
}
$PgExpenseApprovals.$$styleContext = {
	classNames: '.page',
	defaultClassNames: ' .default_page',
	userProps: {},
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
const $PgExpenseApprovals_ = Page($PgExpenseApprovals);
function $LayoutHeaderBar(_super, pageInstance) {
	_super(this);

	pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
	classNames: '.flexLayout .flexLayout-headerBar',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: 92,
		left: 0,
		top: 0,
		width: null
	}
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $TopTabBar(_super, pageInstance) {
	_super(this);

	pageInstance.topTabBar = this;
}
$TopTabBar.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		flexProps: {
			positionType: 'RELATIVE',
			flexDirection: 'ROW',
			justifyContent: 'CENTER',
			flexWrap: 'NOWRAP'
		},
		height: 50,
		left: 0,
		marginLeft: 10,
		marginRight: 10,
		right: 0,
		top: 0,
		width: null
	}
};
const $TopTabBar_ = TopTabBar($TopTabBar);

function $Flexlayout1102(_super, pageInstance) {
	_super(this);
}
$Flexlayout1102.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 151, 151, 151, 1 )',
		height: 1,
		marginLeft: 10,
		marginRight: 10,
		width: null
	}
};
const $Flexlayout1102_ = FlexLayout($Flexlayout1102);

function $ListViewContainer(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'listView', $ListViewContainer$$ListView_, pageInstance);
	pageInstance.listViewContainer = this;
}
$ListViewContainer.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 1, alignItems: 'CENTER', justifyContent: 'CENTER' },
		height: null,
		marginLeft: 10,
		marginRight: 10,
		paddingLeft: 10,
		paddingRight: 10,
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
		flexProps: { flexGrow: 1, alignSelf: 'STRETCH' },
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

module.exports = $PgExpenseApprovals_;
