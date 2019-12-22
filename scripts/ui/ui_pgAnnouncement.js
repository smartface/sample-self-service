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
const Switch = extend(require('sf-core/ui/switch'));
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const LayoutHeaderBar = extend(require('../components/LayoutHeaderBar'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgAnnouncement(_super, props) {
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
	addChild.call(this, 'listViewContainer', $ListViewContainer_, this);
	addChild.call(this, 'switch1', $Switch1_, this);
	pageContextPatch(this, 'pgAnnouncement');
}
$PgAnnouncement.$$styleContext = {
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
const $PgAnnouncement_ = Page($PgAnnouncement);
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

function $ListViewContainer(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'listView', $ListViewContainer$$ListView_, pageInstance);
	pageInstance.listViewContainer = this;
}
$ListViewContainer.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 1 },
		height: null,
		marginLeft: 10,
		marginRight: 10,
		paddingLeft: null,
		paddingRight: null,
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
		flexProps: { flexGrow: 1 },
		height: null,
		marginLeft: 10,
		marginRight: 10,
		width: null
	}
};
const $ListViewContainer$$ListView_ = ListView($ListViewContainer$$ListView);

function $Switch1(_super, pageInstance) {
	_super(this, { toggle: true });
}
$Switch1.$$styleContext = {
	classNames: '.switch',
	defaultClassNames: '.default_common .default_switch',
	userProps: {}
};
const $Switch1_ = Switch($Switch1);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'newPage001';
}

module.exports = $PgAnnouncement_;
