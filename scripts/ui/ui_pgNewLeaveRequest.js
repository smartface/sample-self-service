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
const TextArea = extend(require('sf-core/ui/textarea'));
const Button = extend(require('sf-core/ui/button'));

const PickerContainer = extend(require("../components/PickerContainer"));
const ItemSpeech = extend(require("../components/ItemSpeech"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
// Constructor
function $PgNewLeaveRequest(_super, props) {
  // Initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "flexlayout1", $Flexlayout1_, this);
  addChild.call(this, "flexlayout66", $Flexlayout66_, this);
  addChild.call(this, "bottomContainer", $BottomContainer_, this);
  pageContextPatch(this, "pgNewLeaveRequest");
}
$PgNewLeaveRequest.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: "",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {}
  }
};
const $PgNewLeaveRequest_ = Page($PgNewLeaveRequest);

function $Flexlayout1(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "informationTitle", $Flexlayout1$$InformationTitle_, pageInstance);
  addChild.call(this, "flexlayout2", $Flexlayout1$$Flexlayout2_, pageInstance);
}
$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 160,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: null,
    paddingRight: 10,
    paddingTop: 10,
    width: null
  }
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);

function $Flexlayout1$$InformationTitle(_super, pageInstance) {
  _super(this, {
    text: "WORK INFORMATION",
    skipDefaults: true
  });
  pageInstance.informationTitle = this;
}
$Flexlayout1$$InformationTitle.$$styleContext = {
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
const $Flexlayout1$$InformationTitle_ = TextView($Flexlayout1$$InformationTitle);

function $Flexlayout1$$Flexlayout2(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "flexType", $Flexlayout1$$Flexlayout2$$FlexType_, pageInstance);
  addChild.call(this, "flexDate", $Flexlayout1$$Flexlayout2$$FlexDate_, pageInstance);
}
$Flexlayout1$$Flexlayout2.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "COLUMN",
      flexGrow: 1
    },
    height: 66,
    width: null
  }
};
const $Flexlayout1$$Flexlayout2_ = FlexLayout($Flexlayout1$$Flexlayout2);

function $Flexlayout1$$Flexlayout2$$FlexType(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "leaveTypePicker", $Flexlayout1$$Flexlayout2$$FlexType$$LeaveTypePicker_, pageInstance);
  pageInstance.flexType = this;
}
$Flexlayout1$$Flexlayout2$$FlexType.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Flexlayout1$$Flexlayout2$$FlexType_ = FlexLayout($Flexlayout1$$Flexlayout2$$FlexType);

function $Flexlayout1$$Flexlayout2$$FlexType$$LeaveTypePicker(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  pageInstance.leaveTypePicker = this;
}
$Flexlayout1$$Flexlayout2$$FlexType$$LeaveTypePicker.$$styleContext = {
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
const $Flexlayout1$$Flexlayout2$$FlexType$$LeaveTypePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$FlexType$$LeaveTypePicker);

function $Flexlayout1$$Flexlayout2$$FlexDate(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "selectDatePicker", $Flexlayout1$$Flexlayout2$$FlexDate$$SelectDatePicker_, pageInstance);
  pageInstance.flexDate = this;
}
$Flexlayout1$$Flexlayout2$$FlexDate.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Flexlayout1$$Flexlayout2$$FlexDate_ = FlexLayout($Flexlayout1$$Flexlayout2$$FlexDate);

function $Flexlayout1$$Flexlayout2$$FlexDate$$SelectDatePicker(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  pageInstance.selectDatePicker = this;
}
$Flexlayout1$$Flexlayout2$$FlexDate$$SelectDatePicker.$$styleContext = {
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
const $Flexlayout1$$Flexlayout2$$FlexDate$$SelectDatePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$FlexDate$$SelectDatePicker);

function $Flexlayout66(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "flexlayout76", $Flexlayout66$$Flexlayout76_, pageInstance);
  addChild.call(this, "flexLayout1", $Flexlayout66$$FlexLayout1_, pageInstance);
}
$Flexlayout66.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginBottom: 10,
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
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "label85", $Flexlayout66$$Flexlayout76$$Label85_, pageInstance);
  addChild.call(this, "itemSpeech", $Flexlayout66$$Flexlayout76$$ItemSpeech_, pageInstance);
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
    width: null
  }
};
const $Flexlayout66$$Flexlayout76_ = FlexLayout($Flexlayout66$$Flexlayout76);

function $Flexlayout66$$Flexlayout76$$Label85(_super, pageInstance) {
  _super(this, {
    text: "DESCRIPTION",
    skipDefaults: true
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

function $Flexlayout66$$Flexlayout76$$ItemSpeech(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  pageInstance.itemSpeech = this;
}
$Flexlayout66$$Flexlayout76$$ItemSpeech.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 25,
    left: 0,
    top: 0,
    width: 14
  }
};
const $Flexlayout66$$Flexlayout76$$ItemSpeech_ = ItemSpeech($Flexlayout66$$Flexlayout76$$ItemSpeech);

function $Flexlayout66$$FlexLayout1(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "textbox1", $Flexlayout66$$FlexLayout1$$Textbox1_, pageInstance);
}
$Flexlayout66$$FlexLayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0.5,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Flexlayout66$$FlexLayout1_ = FlexLayout($Flexlayout66$$FlexLayout1);

function $Flexlayout66$$FlexLayout1$$Textbox1(_super, pageInstance) {
  _super(this, {
    text: "",
    skipDefaults: true
  });
  pageInstance.textbox1 = this;
}
$Flexlayout66$$FlexLayout1$$Textbox1.$$styleContext = {
  classNames: ".textArea",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    textAlignment: "TOPLEFT",
    textColor: "rgba( 109, 109, 109, 1 )",
    width: null
  }
};
const $Flexlayout66$$FlexLayout1$$Textbox1_ = TextArea($Flexlayout66$$FlexLayout1$$Textbox1);

function $BottomContainer(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "btnRequest", $BottomContainer$$BtnRequest_, pageInstance);
}
$BottomContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    height: 70,
    width: null
  }
};
const $BottomContainer_ = FlexLayout($BottomContainer);

function $BottomContainer$$BtnRequest(_super, pageInstance) {
  _super(this, {
    text: "REQUEST",
    skipDefaults: true
  });
  pageInstance.btnRequest = this;
}
$BottomContainer$$BtnRequest.$$styleContext = {
  classNames: ".button",
  userProps: {
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    },
    left: 0,
    right: 0,
    width: null
  }
};
const $BottomContainer$$BtnRequest_ = Button($BottomContainer$$BtnRequest);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  // HeaderBar props
  this.headerBar.title = "LEAVE REQUEST";

}

module.exports = $PgNewLeaveRequest_;