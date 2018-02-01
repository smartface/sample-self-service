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
const Label = extend(require('sf-core/ui/label'));
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
//constructor
function $PgNewLeaveRequest(_super, props) {
  // initalizes super class for this page scope
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
  _super(this);
  addChild.call(this, "informationTitle", $Flexlayout1$$InformationTitle_, pageInstance);
  addChild.call(this, "flexlayout2", $Flexlayout1$$Flexlayout2_, pageInstance);
}
$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 160,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: null,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  }
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);

function $Flexlayout1$$InformationTitle(_super, pageInstance) {
  _super(this, {
    text: "WORK INFORMATION"
  });
  pageInstance.informationTitle = this;
}
$Flexlayout1$$InformationTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    height: 25,
    width: 250,
    marginLeft: 10,
    font: {
      size: 16
    }
  }
};
const $Flexlayout1$$InformationTitle_ = Label($Flexlayout1$$InformationTitle);

function $Flexlayout1$$Flexlayout2(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout3", $Flexlayout1$$Flexlayout2$$Flexlayout3_, pageInstance);
  addChild.call(this, "flexlayout3_1", $Flexlayout1$$Flexlayout2$$Flexlayout3_1_, pageInstance);
}
$Flexlayout1$$Flexlayout2.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 66,
    width: null,
    flexProps: {
      flexDirection: "COLUMN",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2_ = FlexLayout($Flexlayout1$$Flexlayout2);

function $Flexlayout1$$Flexlayout2$$Flexlayout3(_super, pageInstance) {
  _super(this);
  addChild.call(this, "leaveTypePicker", $Flexlayout1$$Flexlayout2$$Flexlayout3$$LeaveTypePicker_, pageInstance);
  addChild.call(this, "timeTypePicker", $Flexlayout1$$Flexlayout2$$Flexlayout3$$TimeTypePicker_, pageInstance);
}
$Flexlayout1$$Flexlayout2$$Flexlayout3.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: null,
    width: null,
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3_ = FlexLayout($Flexlayout1$$Flexlayout2$$Flexlayout3);

function $Flexlayout1$$Flexlayout2$$Flexlayout3$$LeaveTypePicker(_super, pageInstance) {
  _super(this);
  pageInstance.leaveTypePicker = this;
}
$Flexlayout1$$Flexlayout2$$Flexlayout3$$LeaveTypePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 45,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3$$LeaveTypePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$Flexlayout3$$LeaveTypePicker);

function $Flexlayout1$$Flexlayout2$$Flexlayout3$$TimeTypePicker(_super, pageInstance) {
  _super(this);
  pageInstance.timeTypePicker = this;
}
$Flexlayout1$$Flexlayout2$$Flexlayout3$$TimeTypePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 45,
    marginLeft: 20,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3$$TimeTypePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$Flexlayout3$$TimeTypePicker);

function $Flexlayout1$$Flexlayout2$$Flexlayout3_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "selectDatePicker", $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectDatePicker_, pageInstance);
  addChild.call(this, "selectTimePicker", $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectTimePicker_, pageInstance);
}
$Flexlayout1$$Flexlayout2$$Flexlayout3_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: null,
    width: null,
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3_1_ = FlexLayout($Flexlayout1$$Flexlayout2$$Flexlayout3_1);

function $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectDatePicker(_super, pageInstance) {
  _super(this);
  pageInstance.selectDatePicker = this;
}
$Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectDatePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 45,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectDatePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectDatePicker);

function $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectTimePicker(_super, pageInstance) {
  _super(this);
  pageInstance.selectTimePicker = this;
}
$Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectTimePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 45,
    marginLeft: 20,
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: 1
    }
  }
};
const $Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectTimePicker_ = PickerContainer($Flexlayout1$$Flexlayout2$$Flexlayout3_1$$SelectTimePicker);

function $Flexlayout66(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout76", $Flexlayout66$$Flexlayout76_, pageInstance);
  addChild.call(this, "textbox1", $Flexlayout66$$Textbox1_, pageInstance);
}
$Flexlayout66.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  }
};
const $Flexlayout66_ = FlexLayout($Flexlayout66);

function $Flexlayout66$$Flexlayout76(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label85", $Flexlayout66$$Flexlayout76$$Label85_, pageInstance);
  addChild.call(this, "itemSpeech", $Flexlayout66$$Flexlayout76$$ItemSpeech_, pageInstance);
}
$Flexlayout66$$Flexlayout76.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 30,
    width: null,
    marginBottom: 5,
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER"
    }
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
    width: null,
    height: null,
    font: {
      size: 16
    },
    flexProps: {
      flexGrow: 1,
      alignSelf: "STRETCH"
    }
  }
};
const $Flexlayout66$$Flexlayout76$$Label85_ = Label($Flexlayout66$$Flexlayout76$$Label85);

function $Flexlayout66$$Flexlayout76$$ItemSpeech(_super, pageInstance) {
  _super(this);
  pageInstance.itemSpeech = this;
}
$Flexlayout66$$Flexlayout76$$ItemSpeech.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    left: 0,
    top: 0,
    width: 14,
    height: 25,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $Flexlayout66$$Flexlayout76$$ItemSpeech_ = ItemSpeech($Flexlayout66$$Flexlayout76$$ItemSpeech);

function $Flexlayout66$$Textbox1(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.textbox1 = this;
}
$Flexlayout66$$Textbox1.$$styleContext = {
  classNames: ".textArea",
  userProps: {
    width: null,
    height: null,
    borderWidth: 0.5,
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    borderColor: "rgba( 203, 204, 208, 1 )",
    textColor: "rgba( 0, 0, 0, 1 )",
    textAlignment: "TOPLEFT",
    flexProps: {
      flexGrow: 1
    }
  }
};
const $Flexlayout66$$Textbox1_ = TextArea($Flexlayout66$$Textbox1);

function $BottomContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "btnRequest", $BottomContainer$$BtnRequest_, pageInstance);
}
$BottomContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    }
  }
};
const $BottomContainer_ = FlexLayout($BottomContainer);

function $BottomContainer$$BtnRequest(_super, pageInstance) {
  _super(this, {
    text: "REQUEST"
  });
  pageInstance.btnRequest = this;
}
$BottomContainer$$BtnRequest.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    left: 0,
    right: 0,
    bottom: 0,
    flexProps: {
      positionType: "ABSOLUTE"
    }
  }
};
const $BottomContainer$$BtnRequest_ = Button($BottomContainer$$BtnRequest);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "LEAVE REQUEST";

}

module && (module.exports = $PgNewLeaveRequest_);