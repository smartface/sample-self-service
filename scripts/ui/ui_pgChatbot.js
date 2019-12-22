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
const ScrollView = extend(require('sf-core/ui/scrollview'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const TextArea = extend(require('sf-core/ui/textarea'));
const TextView = extend(require('sf-core/ui/textview'));

const LayoutHeaderBar = extend(require('../components/LayoutHeaderBar'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgChatbot(_super, props) {
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
	addChild.call(this, 'chatScrollView', $ChatScrollView_, this);
	addChild.call(this, 'sendTextfl', $SendTextfl_, this);
	pageContextPatch(this, 'pgChatbot');
}
$PgChatbot.$$styleContext = {
	classNames: '.page',
	defaultClassNames: ' .default_page',
	userProps: { backgroundColor: 'rgba( 255, 255, 255, 1 )' },
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
const $PgChatbot_ = Page($PgChatbot);
function $LayoutHeaderBar(_super, pageInstance) {
	_super(this);

	pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
	classNames: '.flexLayout .flexLayout-headerBar',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 69, 73, 90, 1 )',
		flexProps: { positionType: 'RELATIVE' },
		height: 70,
		left: 0,
		top: 0,
		width: null
	}
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $ChatScrollView(_super, pageInstance) {
	_super(this, { autoSizeEnabled: true });

	pageInstance.chatScrollView = this;
}
$ChatScrollView.$$styleContext = {
	classNames: '.scrollView',
	defaultClassNames: '.default_common .default_scrollView',
	userProps: {
		flexProps: { flexGrow: 1 },
		height: null,
		layout: null,
		width: null
	}
};
const $ChatScrollView_ = ScrollView($ChatScrollView);

function $SendTextfl(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'sendText', $SendTextfl$$SendText_, pageInstance);
	addChild.call(this, 'sendLabel', $SendTextfl$$SendLabel_, pageInstance);
	pageInstance.sendTextfl = this;
}
$SendTextfl.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 185, 173, 173, 0.12 )',
		flexProps: { flexDirection: 'ROW', justifyContent: 'CENTER' },
		height: 60,
		maxHeight: 80,
		width: null
	}
};
const $SendTextfl_ = FlexLayout($SendTextfl);
function $SendTextfl$$SendText(_super, pageInstance) {
	_super(this);

	pageInstance.sendText = this;
}
$SendTextfl$$SendText.$$styleContext = {
	classNames: '.textArea',
	defaultClassNames: '.default_common .default_textArea',
	userProps: {
		borderRadius: 10,
		borderWidth: null,
		flexProps: { flexGrow: 1 },
		font: { size: 17, bold: false, italic: false, family: 'HelveticaNeue' },
		height: null,
		left: 0,
		marginBottom: 7,
		marginLeft: 7,
		marginRight: 7,
		marginTop: 7,
		textAlignment: 'MIDLEFT',
		top: 0,
		width: null
	}
};
const $SendTextfl$$SendText_ = TextArea($SendTextfl$$SendText);

function $SendTextfl$$SendLabel(_super, pageInstance) {
	_super(this, { text: 'Send' });

	pageInstance.sendLabel = this;
}
$SendTextfl$$SendLabel.$$styleContext = {
	classNames: '.label',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { alignSelf: 'CENTER' },
		font: { size: 18, bold: true, italic: false, family: 'Arial', style: 'b' },
		height: 50,
		marginRight: 10,
		textColor: 'rgba( 74, 144, 226, 1 )',
		width: 50
	}
};
const $SendTextfl$$SendLabel_ = TextView($SendTextfl$$SendLabel);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'ChatBot';
}

module.exports = $PgChatbot_;
