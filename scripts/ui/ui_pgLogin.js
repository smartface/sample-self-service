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
const Label = extend(require('sf-core/ui/label'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));

const TextboxWithLine = extend(require("../components/TextboxWithLine"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgLogin(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "imageview156", $Imageview156_, this);
  addChild.call(this, "appName", $AppName_, this);
  addChild.call(this, "inputLayout", $InputLayout_, this);
  addChild.call(this, "buttonLayout", $ButtonLayout_, this);
  pageContextPatch(this, "pgLogin");
}
$PgLogin.$$styleContext = {
  classNames: ".page .page-login",
  userProps: {
    flexProps: {
      justifyContent: "SPACE_AROUND",
      alignItems: "STRETCH"
    }
  },
  statusBar: {
    classNames: ".statusBar .statusBar-login",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar .headerBar-login",
    userProps: {}
  }
};
const $PgLogin_ = Page($PgLogin);

function $Imageview156(_super, pageInstance) {
  _super(this);
}
$Imageview156.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: null,
    height: null,
    imageFillType: "STRETCH",
    image: "background.png",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $Imageview156_ = ImageView($Imageview156);

function $AppName(_super, pageInstance) {
  _super(this, {
    text: "EMPLOYEE\nSELF SERVICE"
  });
  pageInstance.appName = this;
}
$AppName.$$styleContext = {
  classNames: ".label .label-login.large",
  userProps: {
    textAlignment: "MIDCENTER",
    width: null,
    height: null,
    multiline: true,
    flexProps: {
      flexGrow: 5
    }
  }
};
const $AppName_ = Label($AppName);

function $InputLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "usernameLayout", $InputLayout$$UsernameLayout_, pageInstance);
  addChild.call(this, "passwordLayout", $InputLayout$$PasswordLayout_, pageInstance);
}
$InputLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    height: null,
    flexProps: {
      justifyContent: "CENTER",
      alignItems: "CENTER",
      flexGrow: 3
    }
  }
};
const $InputLayout_ = FlexLayout($InputLayout);

function $InputLayout$$UsernameLayout(_super, pageInstance) {
  _super(this);
  pageInstance.usernameLayout = this;
}
$InputLayout$$UsernameLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 60,
    left: 0,
    top: 0,
    width: 250,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    marginBottom: 5,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $InputLayout$$UsernameLayout_ = TextboxWithLine($InputLayout$$UsernameLayout);

function $InputLayout$$PasswordLayout(_super, pageInstance) {
  _super(this);
  pageInstance.passwordLayout = this;
}
$InputLayout$$PasswordLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 60,
    left: 0,
    top: 0,
    width: 250,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    marginTop: 5,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $InputLayout$$PasswordLayout_ = TextboxWithLine($InputLayout$$PasswordLayout);

function $ButtonLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "loadingImageView", $ButtonLayout$$LoadingImageView_, pageInstance);
  addChild.call(this, "signinButton", $ButtonLayout$$SigninButton_, pageInstance);
  pageInstance.buttonLayout = this;
}
$ButtonLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 5,
      alignItems: "CENTER",
      justifyContent: "CENTER"
    }
  }
};
const $ButtonLayout_ = FlexLayout($ButtonLayout);

function $ButtonLayout$$LoadingImageView(_super, pageInstance) {
  _super(this);
  pageInstance.loadingImageView = this;
}
$ButtonLayout$$LoadingImageView.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: null,
    height: 50,
    left: 0,
    right: 0,
    imageFillType: "NORMAL",
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $ButtonLayout$$LoadingImageView_ = ImageView($ButtonLayout$$LoadingImageView);

function $ButtonLayout$$SigninButton(_super, pageInstance) {
  _super(this, {
    text: "SIGN IN"
  });
  pageInstance.signinButton = this;
}
$ButtonLayout$$SigninButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: 250,
    height: 50,
    borderRadius: 25,
    borderColor: "rgba( 233, 233, 233, 1 )",
    borderWidth: 1,
    backgroundColor: "rgba( 23, 117, 208, 0 )"
  }
};
const $ButtonLayout$$SigninButton_ = Button($ButtonLayout$$SigninButton);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgLogin_);