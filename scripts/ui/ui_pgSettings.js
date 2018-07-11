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
const TextView = extend(require('sf-core/ui/textview'));
const Switch = extend(require('sf-core/ui/switch'));

const HorizontalDivider = extend(require("../components/HorizontalDivider"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgSettings(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "flexlayout84", $Flexlayout84_, this);
  pageContextPatch(this, "pgSettings");
}
$PgSettings.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      visible: true
    }
  }
};
const $PgSettings_ = Page($PgSettings);

function $Flexlayout84(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout85", $Flexlayout84$$Flexlayout85_, pageInstance);
  addChild.call(this, "horizontalDivider", $Flexlayout84$$HorizontalDivider_, pageInstance);
  addChild.call(this, "flexlayout85_1", $Flexlayout84$$Flexlayout85_1_, pageInstance);
  addChild.call(this, "horizontaldivider_1", $Flexlayout84$$Horizontaldivider_1_, pageInstance);
  addChild.call(this, "layoutFinger", $Flexlayout84$$LayoutFinger_, pageInstance);
  addChild.call(this, "horizontalDividerFingerprint", $Flexlayout84$$HorizontalDividerFingerprint_, pageInstance);
  addChild.call(this, "layoutInstabug", $Flexlayout84$$LayoutInstabug_, pageInstance);
  addChild.call(this, "horizontalDividerInstabug", $Flexlayout84$$HorizontalDividerInstabug_, pageInstance);
  addChild.call(this, "layoutFabric", $Flexlayout84$$LayoutFabric_, pageInstance);
  addChild.call(this, "horizontalDividerFabric", $Flexlayout84$$HorizontalDividerFabric_, pageInstance);
  addChild.call(this, "layoutFirabase", $Flexlayout84$$LayoutFirabase_, pageInstance);
  addChild.call(this, "layoutAbout", $Flexlayout84$$LayoutAbout_, pageInstance);
  addChild.call(this, "txtAboutDesc", $Flexlayout84$$TxtAboutDesc_, pageInstance);
  addChild.call(this, "signoutLayout", $Flexlayout84$$SignoutLayout_, pageInstance);
}
$Flexlayout84.$$styleContext = {
  classNames: ".flexLayout .flexLayout-main",
  userProps: {
    height: null,
    paddingLeft: null,
    paddingRight: null,
    width: null
  }
};
const $Flexlayout84_ = FlexLayout($Flexlayout84);

function $Flexlayout84$$Flexlayout85(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtTheme", $Flexlayout84$$Flexlayout85$$TxtTheme_, pageInstance);
  addChild.call(this, "themeBlueLayout", $Flexlayout84$$Flexlayout85$$ThemeBlueLayout_, pageInstance);
  addChild.call(this, "themePurpleLayout", $Flexlayout84$$Flexlayout85$$ThemePurpleLayout_, pageInstance);
}
$Flexlayout84$$Flexlayout85.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85_ = FlexLayout($Flexlayout84$$Flexlayout85);

function $Flexlayout84$$Flexlayout85$$TxtTheme(_super, pageInstance) {
  _super(this, {
    text: "Theme"
  });
  pageInstance.txtTheme = this;
}
$Flexlayout84$$Flexlayout85$$TxtTheme.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85$$TxtTheme_ = TextView($Flexlayout84$$Flexlayout85$$TxtTheme);

function $Flexlayout84$$Flexlayout85$$ThemeBlueLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout247", $Flexlayout84$$Flexlayout85$$ThemeBlueLayout$$Flexlayout247_, pageInstance);
  pageInstance.themeBlueLayout = this;
}
$Flexlayout84$$Flexlayout85$$ThemeBlueLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    borderColor: "rgba( 195, 195, 195, 1 )",
    borderRadius: 8,
    borderWidth: 1,
    height: 35,
    marginLeft: 10,
    marginRight: null,
    width: 35
  }
};
const $Flexlayout84$$Flexlayout85$$ThemeBlueLayout_ = FlexLayout($Flexlayout84$$Flexlayout85$$ThemeBlueLayout);

function $Flexlayout84$$Flexlayout85$$ThemeBlueLayout$$Flexlayout247(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$Flexlayout85$$ThemeBlueLayout$$Flexlayout247.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 69, 73, 90, 1 )",
    borderColor: "rgba( 69, 73, 90, 1 )",
    borderRadius: 6,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 4,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85$$ThemeBlueLayout$$Flexlayout247_ = FlexLayout($Flexlayout84$$Flexlayout85$$ThemeBlueLayout$$Flexlayout247);

function $Flexlayout84$$Flexlayout85$$ThemePurpleLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout247_1", $Flexlayout84$$Flexlayout85$$ThemePurpleLayout$$Flexlayout247_1_, pageInstance);
  pageInstance.themePurpleLayout = this;
}
$Flexlayout84$$Flexlayout85$$ThemePurpleLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    borderColor: "rgba( 195, 195, 195, 1 )",
    borderRadius: 8,
    borderWidth: 0,
    height: 35,
    marginLeft: 10,
    marginRight: null,
    width: 35
  }
};
const $Flexlayout84$$Flexlayout85$$ThemePurpleLayout_ = FlexLayout($Flexlayout84$$Flexlayout85$$ThemePurpleLayout);

function $Flexlayout84$$Flexlayout85$$ThemePurpleLayout$$Flexlayout247_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$Flexlayout85$$ThemePurpleLayout$$Flexlayout247_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 124, 115, 192, 1 )",
    borderColor: "rgba( 69, 73, 90, 1 )",
    borderRadius: 6,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 4,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85$$ThemePurpleLayout$$Flexlayout247_1_ = FlexLayout($Flexlayout84$$Flexlayout85$$ThemePurpleLayout$$Flexlayout247_1);

function $Flexlayout84$$HorizontalDivider(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$HorizontalDivider.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$HorizontalDivider_ = HorizontalDivider($Flexlayout84$$HorizontalDivider);

function $Flexlayout84$$Flexlayout85_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtNotification", $Flexlayout84$$Flexlayout85_1$$TxtNotification_, pageInstance);
  addChild.call(this, "switch1", $Flexlayout84$$Flexlayout85_1$$Switch1_, pageInstance);
}
$Flexlayout84$$Flexlayout85_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85_1_ = FlexLayout($Flexlayout84$$Flexlayout85_1);

function $Flexlayout84$$Flexlayout85_1$$TxtNotification(_super, pageInstance) {
  _super(this, {
    text: "Notification"
  });
  pageInstance.txtNotification = this;
}
$Flexlayout84$$Flexlayout85_1$$TxtNotification.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85_1$$TxtNotification_ = TextView($Flexlayout84$$Flexlayout85_1$$TxtNotification);

function $Flexlayout84$$Flexlayout85_1$$Switch1(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$Flexlayout85_1$$Switch1.$$styleContext = {
  classNames: ".switch",
  userProps: {
    minHeight: 31,
    minWidth: 51,
    width: null
  }
};
const $Flexlayout84$$Flexlayout85_1$$Switch1_ = Switch($Flexlayout84$$Flexlayout85_1$$Switch1);

function $Flexlayout84$$Horizontaldivider_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$Horizontaldivider_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$Horizontaldivider_1_ = HorizontalDivider($Flexlayout84$$Horizontaldivider_1);

function $Flexlayout84$$LayoutFinger(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtFingerPrint", $Flexlayout84$$LayoutFinger$$TxtFingerPrint_, pageInstance);
  addChild.call(this, "switchFinger", $Flexlayout84$$LayoutFinger$$SwitchFinger_, pageInstance);
  pageInstance.layoutFinger = this;
}
$Flexlayout84$$LayoutFinger.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$LayoutFinger_ = FlexLayout($Flexlayout84$$LayoutFinger);

function $Flexlayout84$$LayoutFinger$$TxtFingerPrint(_super, pageInstance) {
  _super(this, {
    text: "FingerPrint"
  });
  pageInstance.txtFingerPrint = this;
}
$Flexlayout84$$LayoutFinger$$TxtFingerPrint.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$LayoutFinger$$TxtFingerPrint_ = TextView($Flexlayout84$$LayoutFinger$$TxtFingerPrint);

function $Flexlayout84$$LayoutFinger$$SwitchFinger(_super, pageInstance) {
  _super(this);
  pageInstance.switchFinger = this;
}
$Flexlayout84$$LayoutFinger$$SwitchFinger.$$styleContext = {
  classNames: ".switch",
  userProps: {
    minHeight: 31,
    minWidth: 51,
    width: null
  }
};
const $Flexlayout84$$LayoutFinger$$SwitchFinger_ = Switch($Flexlayout84$$LayoutFinger$$SwitchFinger);

function $Flexlayout84$$HorizontalDividerFingerprint(_super, pageInstance) {
  _super(this);
  pageInstance.horizontalDividerFingerprint = this;
}
$Flexlayout84$$HorizontalDividerFingerprint.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$HorizontalDividerFingerprint_ = HorizontalDivider($Flexlayout84$$HorizontalDividerFingerprint);

function $Flexlayout84$$LayoutInstabug(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtInstabug", $Flexlayout84$$LayoutInstabug$$TxtInstabug_, pageInstance);
  addChild.call(this, "switchFinger", $Flexlayout84$$LayoutInstabug$$SwitchFinger_, pageInstance);
  pageInstance.layoutInstabug = this;
}
$Flexlayout84$$LayoutInstabug.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$LayoutInstabug_ = FlexLayout($Flexlayout84$$LayoutInstabug);

function $Flexlayout84$$LayoutInstabug$$TxtInstabug(_super, pageInstance) {
  _super(this, {
    text: "Instabug"
  });
  pageInstance.txtInstabug = this;
}
$Flexlayout84$$LayoutInstabug$$TxtInstabug.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$LayoutInstabug$$TxtInstabug_ = TextView($Flexlayout84$$LayoutInstabug$$TxtInstabug);

function $Flexlayout84$$LayoutInstabug$$SwitchFinger(_super, pageInstance) {
  _super(this);
  pageInstance.switchFinger = this;
}
$Flexlayout84$$LayoutInstabug$$SwitchFinger.$$styleContext = {
  classNames: ".switch",
  userProps: {
    minHeight: 31,
    minWidth: 51,
    width: null
  }
};
const $Flexlayout84$$LayoutInstabug$$SwitchFinger_ = Switch($Flexlayout84$$LayoutInstabug$$SwitchFinger);

function $Flexlayout84$$HorizontalDividerInstabug(_super, pageInstance) {
  _super(this);
  pageInstance.horizontalDividerInstabug = this;
}
$Flexlayout84$$HorizontalDividerInstabug.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$HorizontalDividerInstabug_ = HorizontalDivider($Flexlayout84$$HorizontalDividerInstabug);

function $Flexlayout84$$LayoutFabric(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtFabric", $Flexlayout84$$LayoutFabric$$TxtFabric_, pageInstance);
  addChild.call(this, "switchFinger", $Flexlayout84$$LayoutFabric$$SwitchFinger_, pageInstance);
  pageInstance.layoutFabric = this;
}
$Flexlayout84$$LayoutFabric.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$LayoutFabric_ = FlexLayout($Flexlayout84$$LayoutFabric);

function $Flexlayout84$$LayoutFabric$$TxtFabric(_super, pageInstance) {
  _super(this, {
    text: "Fabric"
  });
  pageInstance.txtFabric = this;
}
$Flexlayout84$$LayoutFabric$$TxtFabric.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$LayoutFabric$$TxtFabric_ = TextView($Flexlayout84$$LayoutFabric$$TxtFabric);

function $Flexlayout84$$LayoutFabric$$SwitchFinger(_super, pageInstance) {
  _super(this);
  pageInstance.switchFinger = this;
}
$Flexlayout84$$LayoutFabric$$SwitchFinger.$$styleContext = {
  classNames: ".switch",
  userProps: {
    minHeight: 31,
    minWidth: 51,
    width: null
  }
};
const $Flexlayout84$$LayoutFabric$$SwitchFinger_ = Switch($Flexlayout84$$LayoutFabric$$SwitchFinger);

function $Flexlayout84$$HorizontalDividerFabric(_super, pageInstance) {
  _super(this);
  pageInstance.horizontalDividerFabric = this;
}
$Flexlayout84$$HorizontalDividerFabric.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$HorizontalDividerFabric_ = HorizontalDivider($Flexlayout84$$HorizontalDividerFabric);

function $Flexlayout84$$LayoutFirabase(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtFirebase", $Flexlayout84$$LayoutFirabase$$TxtFirebase_, pageInstance);
  addChild.call(this, "switchFinger", $Flexlayout84$$LayoutFirabase$$SwitchFinger_, pageInstance);
  pageInstance.layoutFirabase = this;
}
$Flexlayout84$$LayoutFirabase.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$LayoutFirabase_ = FlexLayout($Flexlayout84$$LayoutFirabase);

function $Flexlayout84$$LayoutFirabase$$TxtFirebase(_super, pageInstance) {
  _super(this, {
    text: "Firebase"
  });
  pageInstance.txtFirebase = this;
}
$Flexlayout84$$LayoutFirabase$$TxtFirebase.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$LayoutFirabase$$TxtFirebase_ = TextView($Flexlayout84$$LayoutFirabase$$TxtFirebase);

function $Flexlayout84$$LayoutFirabase$$SwitchFinger(_super, pageInstance) {
  _super(this);
  pageInstance.switchFinger = this;
}
$Flexlayout84$$LayoutFirabase$$SwitchFinger.$$styleContext = {
  classNames: ".switch",
  userProps: {
    minHeight: 31,
    minWidth: 51,
    width: null
  }
};
const $Flexlayout84$$LayoutFirabase$$SwitchFinger_ = Switch($Flexlayout84$$LayoutFirabase$$SwitchFinger);

function $Flexlayout84$$LayoutAbout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "txtAbout", $Flexlayout84$$LayoutAbout$$TxtAbout_, pageInstance);
  addChild.call(this, "txtNewVersion", $Flexlayout84$$LayoutAbout$$TxtNewVersion_, pageInstance);
  pageInstance.layoutAbout = this;
}
$Flexlayout84$$LayoutAbout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: null,
      alignSelf: "STRETCH"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout84$$LayoutAbout_ = FlexLayout($Flexlayout84$$LayoutAbout);

function $Flexlayout84$$LayoutAbout$$TxtAbout(_super, pageInstance) {
  _super(this, {
    text: "About"
  });
  pageInstance.txtAbout = this;
}
$Flexlayout84$$LayoutAbout$$TxtAbout.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: 5,
    width: null
  }
};
const $Flexlayout84$$LayoutAbout$$TxtAbout_ = TextView($Flexlayout84$$LayoutAbout$$TxtAbout);

function $Flexlayout84$$LayoutAbout$$TxtNewVersion(_super, pageInstance) {
  _super(this, {
    text: "New Version Avaliable!"
  });
  pageInstance.txtNewVersion = this;
}
$Flexlayout84$$LayoutAbout$$TxtNewVersion.$$styleContext = {
  classNames: ".label .label-list-item-title",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 70,
    left: null,
    right: 5,
    textAlignment: "MIDRIGHT",
    textColor: "rgba( 74, 144, 226, 1 )",
    visible: true,
    width: null
  }
};
const $Flexlayout84$$LayoutAbout$$TxtNewVersion_ = TextView($Flexlayout84$$LayoutAbout$$TxtNewVersion);

function $Flexlayout84$$TxtAboutDesc(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.txtAboutDesc = this;
}
$Flexlayout84$$TxtAboutDesc.$$styleContext = {
  classNames: ".label",
  userProps: {
    font: {
      size: 14
    },
    height: 100,
    marginLeft: 15,
    marginRight: 10,
    marginTop: null,
    multiline: true,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 155, 155, 155, 1 )",
    width: null
  }
};
const $Flexlayout84$$TxtAboutDesc_ = TextView($Flexlayout84$$TxtAboutDesc);

function $Flexlayout84$$SignoutLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout731", $Flexlayout84$$SignoutLayout$$Flexlayout731_, pageInstance);
  addChild.call(this, "lblSignOut", $Flexlayout84$$SignoutLayout$$LblSignOut_, pageInstance);
  pageInstance.signoutLayout = this;
}
$Flexlayout84$$SignoutLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    height: 61,
    left: 0,
    marginBottom: null,
    marginLeft: null,
    marginRight: null,
    right: 0,
    top: null,
    width: null
  }
};
const $Flexlayout84$$SignoutLayout_ = FlexLayout($Flexlayout84$$SignoutLayout);

function $Flexlayout84$$SignoutLayout$$Flexlayout731(_super, pageInstance) {
  _super(this);
}
$Flexlayout84$$SignoutLayout$$Flexlayout731.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    alpha: 1,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexGrow: null,
      positionType: "RELATIVE"
    },
    height: 1,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout84$$SignoutLayout$$Flexlayout731_ = HorizontalDivider($Flexlayout84$$SignoutLayout$$Flexlayout731);

function $Flexlayout84$$SignoutLayout$$LblSignOut(_super, pageInstance) {
  _super(this, {
    text: "Sign out"
  });
  pageInstance.lblSignOut = this;
}
$Flexlayout84$$SignoutLayout$$LblSignOut.$$styleContext = {
  classNames: ".label",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 255, 50, 75, 1 )",
    width: null
  }
};
const $Flexlayout84$$SignoutLayout$$LblSignOut_ = TextView($Flexlayout84$$SignoutLayout$$LblSignOut);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "Settings";

}

module && (module.exports = $PgSettings_);