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
const ImageView = extend(require('sf-core/ui/imageview'));
const TextView = extend(require('sf-core/ui/textview'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));

const TextboxWithLine = extend(require('../components/TextboxWithLine'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgLogin(_super, props) {
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
	addChild.call(this, 'imageview156', $Imageview156_, this);
	addChild.call(this, 'appName', $AppName_, this);
	addChild.call(this, 'inputLayout', $InputLayout_, this);
	addChild.call(this, 'buttonLayout', $ButtonLayout_, this);
	pageContextPatch(this, 'pgLogin');
}
$PgLogin.$$styleContext = {
	classNames: '.page .page-login',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { justifyContent: 'SPACE_AROUND', alignItems: 'STRETCH' }
	},
	statusBar: {
		classNames: '.statusBar .statusBar-login',
		defaultClassNames: ' .default_statusBar',
		userProps: {}
	},
	headerBar: {
		classNames: '.headerBar .headerBar-login',
		defaultClassNames: ' .default_headerBar',
		userProps: {}
	}
};
const $PgLogin_ = Page($PgLogin);
function $Imageview156(_super, pageInstance) {
	_super(this);
}
$Imageview156.$$styleContext = {
	classNames: '.imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		bottom: 0,
		flexProps: { positionType: 'ABSOLUTE' },
		height: null,
		image: 'background.png',
		imageFillType: 'STRETCH',
		left: 0,
		right: 0,
		top: 0,
		width: null
	}
};
const $Imageview156_ = ImageView($Imageview156);

function $AppName(_super, pageInstance) {
	_super(this, { text: 'EMPLOYEE\nSELF SERVICE' });

	pageInstance.appName = this;
}
$AppName.$$styleContext = {
	classNames: '.label .label-login.large',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { flexGrow: 5 },
		height: null,
		multiline: true,
		textAlignment: 'MIDCENTER',
		width: null
	}
};
const $AppName_ = TextView($AppName);

function $InputLayout(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'usernameLayout',
		$InputLayout$$UsernameLayout_,
		pageInstance
	);
	addChild.call(
		this,
		'passwordLayout',
		$InputLayout$$PasswordLayout_,
		pageInstance
	);
}
$InputLayout.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { justifyContent: 'CENTER', alignItems: 'CENTER', flexGrow: 3 },
		height: null,
		width: null
	}
};
const $InputLayout_ = FlexLayout($InputLayout);
function $InputLayout$$UsernameLayout(_super, pageInstance) {
	_super(this);

	pageInstance.usernameLayout = this;
}
$InputLayout$$UsernameLayout.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'RELATIVE' },
		height: 60,
		left: 0,
		marginBottom: 5,
		top: 0,
		width: 250
	}
};
const $InputLayout$$UsernameLayout_ = TextboxWithLine(
	$InputLayout$$UsernameLayout
);

function $InputLayout$$PasswordLayout(_super, pageInstance) {
	_super(this);

	pageInstance.passwordLayout = this;
}
$InputLayout$$PasswordLayout.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'RELATIVE' },
		height: 60,
		left: 0,
		marginTop: 5,
		top: 0,
		width: 250
	}
};
const $InputLayout$$PasswordLayout_ = TextboxWithLine(
	$InputLayout$$PasswordLayout
);

function $ButtonLayout(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'loadingImageView',
		$ButtonLayout$$LoadingImageView_,
		pageInstance
	);
	addChild.call(
		this,
		'signinButton',
		$ButtonLayout$$SigninButton_,
		pageInstance
	);
	pageInstance.buttonLayout = this;
}
$ButtonLayout.$$styleContext = {
	classNames: '.flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { flexGrow: 5, alignItems: 'CENTER', justifyContent: 'CENTER' },
		height: null,
		width: null
	}
};
const $ButtonLayout_ = FlexLayout($ButtonLayout);
function $ButtonLayout$$LoadingImageView(_super, pageInstance) {
	_super(this);

	pageInstance.loadingImageView = this;
}
$ButtonLayout$$LoadingImageView.$$styleContext = {
	classNames: '.imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { positionType: 'ABSOLUTE' },
		height: 50,
		imageFillType: 'NORMAL',
		left: 0,
		right: 0,
		width: null
	}
};
const $ButtonLayout$$LoadingImageView_ = ImageView(
	$ButtonLayout$$LoadingImageView
);

function $ButtonLayout$$SigninButton(_super, pageInstance) {
	_super(this, { text: 'SIGN IN' });

	pageInstance.signinButton = this;
}
$ButtonLayout$$SigninButton.$$styleContext = {
	classNames: '.button',
	defaultClassNames: '.default_common .default_button',
	userProps: {
		backgroundColor: 'rgba( 23, 117, 208, 0 )',
		borderColor: 'rgba( 233, 233, 233, 1 )',
		borderRadius: 25,
		borderWidth: 1,
		height: 50,
		width: 250
	}
};
const $ButtonLayout$$SigninButton_ = Button($ButtonLayout$$SigninButton);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'newPage001';
}

module.exports = $PgLogin_;
