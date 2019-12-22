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
const ImageView = extend(require('sf-core/ui/imageview'));

const LayoutHeaderBar = extend(require('../components/LayoutHeaderBar'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgMeetingRoomReservations(_super, props) {
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
	addChild.call(this, 'mainLayout', $MainLayout_, this);
	pageContextPatch(this, 'pgMeetingRoomReservations');
}
$PgMeetingRoomReservations.$$styleContext = {
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
const $PgMeetingRoomReservations_ = Page($PgMeetingRoomReservations);
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

function $MainLayout(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'comingSoon', $MainLayout$$ComingSoon_, pageInstance);
	pageInstance.mainLayout = this;
}
$MainLayout.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 1, alignItems: 'STRETCH', justifyContent: 'CENTER' },
		height: null,
		marginLeft: 10,
		marginRight: 10,
		width: null
	}
};
const $MainLayout_ = FlexLayout($MainLayout);
function $MainLayout$$ComingSoon(_super, pageInstance) {
	_super(this);

	pageInstance.comingSoon = this;
}
$MainLayout$$ComingSoon.$$styleContext = {
	classNames: '.imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'STRETCH' },
		height: 100,
		image: 'coming_soon.png',
		imageFillType: 'ASPECTFIT',
		width: null
	}
};
const $MainLayout$$ComingSoon_ = ImageView($MainLayout$$ComingSoon);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'newPage001';
}

module.exports = $PgMeetingRoomReservations_;
