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
const ImageView = extend(require('sf-core/ui/imageview'));
const TextBox = extend(require('sf-core/ui/textbox'));
const Button = extend(require('sf-core/ui/button'));

const PickerContainer = extend(require("../components/PickerContainer"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgNewWorklog(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "flexlayout35", $Flexlayout35_, this);
  addChild.call(this, "flexlayout66", $Flexlayout66_, this);
  addChild.call(this, "button1", $Button1_, this);
  pageContextPatch(this, "pgNewWorklog");
}
$PgNewWorklog.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 228, 228, 228, 1 )"
  },
  statusBar: {
    classNames: "",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {}
  }
};
const $PgNewWorklog_ = Page($PgNewWorklog);

function $Flexlayout35(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label39", $Flexlayout35$$Label39_, pageInstance);
  addChild.call(this, "pickerContainer", $Flexlayout35$$PickerContainer_, pageInstance);
  addChild.call(this, "pickercontainer_1", $Flexlayout35$$Pickercontainer_1_, pageInstance);
  addChild.call(this, "flexlayout51", $Flexlayout35$$Flexlayout51_, pageInstance);
}
$Flexlayout35.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 240,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: null
  }
};
const $Flexlayout35_ = FlexLayout($Flexlayout35);

function $Flexlayout35$$Label39(_super, pageInstance) {
  _super(this, {
    text: "WORK INFO"
  });
}
$Flexlayout35$$Label39.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: {
      size: 16
    },
    height: 25,
    marginLeft: 10,
    width: 250
  }
};
const $Flexlayout35$$Label39_ = TextView($Flexlayout35$$Label39);

function $Flexlayout35$$PickerContainer(_super, pageInstance) {
  _super(this);
}
$Flexlayout35$$PickerContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 45,
    left: 0,
    marginBottom: 10,
    marginTop: 10,
    top: 0,
    width: null
  }
};
const $Flexlayout35$$PickerContainer_ = PickerContainer($Flexlayout35$$PickerContainer);

function $Flexlayout35$$Pickercontainer_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout35$$Pickercontainer_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 45,
    left: 0,
    marginBottom: 10,
    top: 0,
    width: null
  }
};
const $Flexlayout35$$Pickercontainer_1_ = PickerContainer($Flexlayout35$$Pickercontainer_1);

function $Flexlayout35$$Flexlayout51(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout52", $Flexlayout35$$Flexlayout51$$Flexlayout52_, pageInstance);
  addChild.call(this, "flexlayout52_1", $Flexlayout35$$Flexlayout51$$Flexlayout52_1_, pageInstance);
}
$Flexlayout35$$Flexlayout51.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW"
    },
    height: 50,
    width: null
  }
};
const $Flexlayout35$$Flexlayout51_ = FlexLayout($Flexlayout35$$Flexlayout51);

function $Flexlayout35$$Flexlayout51$$Flexlayout52(_super, pageInstance) {
  _super(this);
}
$Flexlayout35$$Flexlayout51$$Flexlayout52.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    height: 45,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout35$$Flexlayout51$$Flexlayout52_ = PickerContainer($Flexlayout35$$Flexlayout51$$Flexlayout52);

function $Flexlayout35$$Flexlayout51$$Flexlayout52_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout35$$Flexlayout51$$Flexlayout52_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    },
    height: 45,
    left: 0,
    marginLeft: 20,
    top: 0,
    width: null
  }
};
const $Flexlayout35$$Flexlayout51$$Flexlayout52_1_ = PickerContainer($Flexlayout35$$Flexlayout51$$Flexlayout52_1);

function $Flexlayout66(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout76", $Flexlayout66$$Flexlayout76_, pageInstance);
  addChild.call(this, "textbox1", $Flexlayout66$$Textbox1_, pageInstance);
}
$Flexlayout66.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginBottom: 70,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    width: null
  }
};
const $Flexlayout66_ = FlexLayout($Flexlayout66);

function $Flexlayout66$$Flexlayout76(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label85", $Flexlayout66$$Flexlayout76$$Label85_, pageInstance);
  addChild.call(this, "imageview17", $Flexlayout66$$Flexlayout76$$Imageview17_, pageInstance);
}
$Flexlayout66$$Flexlayout76.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER"
    },
    height: 30,
    marginBottom: 5,
    width: 312
  }
};
const $Flexlayout66$$Flexlayout76_ = FlexLayout($Flexlayout66$$Flexlayout76);

function $Flexlayout66$$Flexlayout76$$Label85(_super, pageInstance) {
  _super(this, {
    text: "DESCRIPTION"
  });
}
$Flexlayout66$$Flexlayout76$$Label85.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignSelf: "STRETCH"
    },
    font: {
      size: 16
    },
    height: null,
    width: null
  }
};
const $Flexlayout66$$Flexlayout76$$Label85_ = TextView($Flexlayout66$$Flexlayout76$$Label85);

function $Flexlayout66$$Flexlayout76$$Imageview17(_super, pageInstance) {
  _super(this);
}
$Flexlayout66$$Flexlayout76$$Imageview17.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 25,
    image: "icon_microphone.png",
    imageFillType: "ASPECTFIT",
    width: 14
  }
};
const $Flexlayout66$$Flexlayout76$$Imageview17_ = ImageView($Flexlayout66$$Flexlayout76$$Imageview17);

function $Flexlayout66$$Textbox1(_super, pageInstance) {
  _super(this, {
    text: "Description"
  });
}
$Flexlayout66$$Textbox1.$$styleContext = {
  classNames: ".textBox",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0.5,
    flexProps: {
      flexGrow: 1
    },
    font: null,
    height: null,
    textColor: "rgba( 0, 0, 0, 0.28 )",
    width: null
  }
};
const $Flexlayout66$$Textbox1_ = TextBox($Flexlayout66$$Textbox1);

function $Button1(_super, pageInstance) {
  _super(this, {
    text: "SUBMIT"
  });
}
$Button1.$$styleContext = {
  classNames: ".button",
  userProps: {
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    font: null,
    height: 60,
    left: -1,
    right: 0,
    top: 543,
    width: null
  }
};
const $Button1_ = Button($Button1);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "NEW WORK LOG";

}

module && (module.exports = $PgNewWorklog_);