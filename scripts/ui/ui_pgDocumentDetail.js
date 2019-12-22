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
const TextView = extend(require('sf-core/ui/textview'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgDocumentDetail(_super, props) {
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
	addChild.call(this, 'mainLayout', $MainLayout_, this);
	pageContextPatch(this, 'pgDocumentDetail');
}
$PgDocumentDetail.$$styleContext = {
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
		userProps: {}
	}
};
const $PgDocumentDetail_ = Page($PgDocumentDetail);
function $MainLayout(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'imageview42', $MainLayout$$Imageview42_, pageInstance);
	addChild.call(this, 'label322', $MainLayout$$Label322_, pageInstance);
	pageInstance.mainLayout = this;
}
$MainLayout.$$styleContext = {
	classNames: '.flexLayout .flexLayout-main',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { alignItems: 'CENTER', justifyContent: 'CENTER' },
		height: null,
		width: null
	}
};
const $MainLayout_ = FlexLayout($MainLayout);
function $MainLayout$$Imageview42(_super, pageInstance) {
	_super(this);
}
$MainLayout$$Imageview42.$$styleContext = {
	classNames: '.imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		height: 100,
		image: 'add_photo.png',
		imageFillType: 'ASPECTFIT',
		width: 100
	}
};
const $MainLayout$$Imageview42_ = ImageView($MainLayout$$Imageview42);

function $MainLayout$$Label322(_super, pageInstance) {
	_super(this, { text: 'Please Upload Your Document' });
}
$MainLayout$$Label322.$$styleContext = {
	classNames: '.label',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		font: null,
		textAlignment: 'MIDCENTER',
		textColor: 'rgba( 155, 155, 155, 1 )'
	}
};
const $MainLayout$$Label322_ = TextView($MainLayout$$Label322);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'newPage001';
}

module.exports = $PgDocumentDetail_;
