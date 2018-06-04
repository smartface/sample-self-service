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
const TextArea = extend(require('sf-core/ui/textarea'));

const LayoutHeaderBar = extend(require("../components/LayoutHeaderBar"));
const ListItemSwitch = extend(require("../components/ListItemSwitch"));
const PickerContainer = extend(require("../components/PickerContainer"));
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
function $PgOutOfOffice(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this),
    orientation: PageBase.Orientation.PORTRAIT
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "mainContainer", $MainContainer_, this);
  pageContextPatch(this, "pgOutOfOffice");
}
$PgOutOfOffice.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: "",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      backgroundColor: "rgba( 255, 255, 255, 1 )",
      visible: false
    }
  }
};
const $PgOutOfOffice_ = Page($PgOutOfOffice);

function $LayoutHeaderBar(_super, pageInstance) {
  _super(this);
  pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 92,
    left: 0,
    top: 0,
    width: null
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $MainContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout48", $MainContainer$$Flexlayout48_, pageInstance);
  addChild.call(this, "dateContainer", $MainContainer$$DateContainer_, pageInstance);
  addChild.call(this, "intExtContainer", $MainContainer$$IntExtContainer_, pageInstance);
  addChild.call(this, "noteContainer", $MainContainer$$NoteContainer_, pageInstance);
  pageInstance.mainContainer = this;
}
$MainContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: null
    },
    height: 610,
    marginLeft: null,
    marginRight: null,
    width: null
  }
};
const $MainContainer_ = FlexLayout($MainContainer);

function $MainContainer$$Flexlayout48(_super, pageInstance) {
  _super(this);
  addChild.call(this, "outOfOffice", $MainContainer$$Flexlayout48$$OutOfOffice_, pageInstance);
}
$MainContainer$$Flexlayout48.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 59,
    paddingLeft: 10,
    paddingRight: 10,
    width: null
  }
};
const $MainContainer$$Flexlayout48_ = FlexLayout($MainContainer$$Flexlayout48);

function $MainContainer$$Flexlayout48$$OutOfOffice(_super, pageInstance) {
  _super(this);
  pageInstance.outOfOffice = this;
}
$MainContainer$$Flexlayout48$$OutOfOffice.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      justifyContent: "SPACE_BETWEEN",
      positionType: "RELATIVE"
    },
    height: 59,
    left: null,
    marginLeft: null,
    top: null,
    width: null
  }
};
const $MainContainer$$Flexlayout48$$OutOfOffice_ = ListItemSwitch($MainContainer$$Flexlayout48$$OutOfOffice);

function $MainContainer$$DateContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "startTitle", $MainContainer$$DateContainer$$StartTitle_, pageInstance);
  addChild.call(this, "flexlayout742", $MainContainer$$DateContainer$$Flexlayout742_, pageInstance);
  addChild.call(this, "endTitle", $MainContainer$$DateContainer$$EndTitle_, pageInstance);
  addChild.call(this, "flexlayout742_1", $MainContainer$$DateContainer$$Flexlayout742_1_, pageInstance);
}
$MainContainer$$DateContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 190,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    top: null,
    width: null
  }
};
const $MainContainer$$DateContainer_ = FlexLayout($MainContainer$$DateContainer);

function $MainContainer$$DateContainer$$StartTitle(_super, pageInstance) {
  _super(this, {
    text: "START"
  });
  pageInstance.startTitle = this;
}
$MainContainer$$DateContainer$$StartTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    width: null
  }
};
const $MainContainer$$DateContainer$$StartTitle_ = TextView($MainContainer$$DateContainer$$StartTitle);

function $MainContainer$$DateContainer$$Flexlayout742(_super, pageInstance) {
  _super(this);
  addChild.call(this, "startDatePicker", $MainContainer$$DateContainer$$Flexlayout742$$StartDatePicker_, pageInstance);
  addChild.call(this, "startTimePicker", $MainContainer$$DateContainer$$Flexlayout742$$StartTimePicker_, pageInstance);
}
$MainContainer$$DateContainer$$Flexlayout742.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      justifyContent: "SPACE_BETWEEN"
    },
    height: 45,
    marginTop: 10,
    width: null
  }
};
const $MainContainer$$DateContainer$$Flexlayout742_ = FlexLayout($MainContainer$$DateContainer$$Flexlayout742);

function $MainContainer$$DateContainer$$Flexlayout742$$StartDatePicker(_super, pageInstance) {
  _super(this);
  pageInstance.startDatePicker = this;
}
$MainContainer$$DateContainer$$Flexlayout742$$StartDatePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: null
    },
    height: 45,
    left: 0,
    top: 0,
    width: 140
  }
};
const $MainContainer$$DateContainer$$Flexlayout742$$StartDatePicker_ = PickerContainer($MainContainer$$DateContainer$$Flexlayout742$$StartDatePicker);

function $MainContainer$$DateContainer$$Flexlayout742$$StartTimePicker(_super, pageInstance) {
  _super(this);
  pageInstance.startTimePicker = this;
}
$MainContainer$$DateContainer$$Flexlayout742$$StartTimePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: null
    },
    height: 45,
    left: 0,
    top: 0,
    width: 140
  }
};
const $MainContainer$$DateContainer$$Flexlayout742$$StartTimePicker_ = PickerContainer($MainContainer$$DateContainer$$Flexlayout742$$StartTimePicker);

function $MainContainer$$DateContainer$$EndTitle(_super, pageInstance) {
  _super(this, {
    text: "END"
  });
  pageInstance.endTitle = this;
}
$MainContainer$$DateContainer$$EndTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    marginLeft: null,
    marginTop: 10,
    width: null
  }
};
const $MainContainer$$DateContainer$$EndTitle_ = TextView($MainContainer$$DateContainer$$EndTitle);

function $MainContainer$$DateContainer$$Flexlayout742_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "endDatePicker", $MainContainer$$DateContainer$$Flexlayout742_1$$EndDatePicker_, pageInstance);
  addChild.call(this, "endTimePicker", $MainContainer$$DateContainer$$Flexlayout742_1$$EndTimePicker_, pageInstance);
}
$MainContainer$$DateContainer$$Flexlayout742_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      justifyContent: "SPACE_BETWEEN"
    },
    height: 45,
    marginTop: 10,
    width: null
  }
};
const $MainContainer$$DateContainer$$Flexlayout742_1_ = FlexLayout($MainContainer$$DateContainer$$Flexlayout742_1);

function $MainContainer$$DateContainer$$Flexlayout742_1$$EndDatePicker(_super, pageInstance) {
  _super(this);
  pageInstance.endDatePicker = this;
}
$MainContainer$$DateContainer$$Flexlayout742_1$$EndDatePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: null
    },
    height: 45,
    left: 0,
    top: 0,
    width: 140
  }
};
const $MainContainer$$DateContainer$$Flexlayout742_1$$EndDatePicker_ = PickerContainer($MainContainer$$DateContainer$$Flexlayout742_1$$EndDatePicker);

function $MainContainer$$DateContainer$$Flexlayout742_1$$EndTimePicker(_super, pageInstance) {
  _super(this);
  pageInstance.endTimePicker = this;
}
$MainContainer$$DateContainer$$Flexlayout742_1$$EndTimePicker.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      positionType: "RELATIVE",
      flexGrow: null
    },
    height: 45,
    left: 0,
    top: 0,
    width: 140
  }
};
const $MainContainer$$DateContainer$$Flexlayout742_1$$EndTimePicker_ = PickerContainer($MainContainer$$DateContainer$$Flexlayout742_1$$EndTimePicker);

function $MainContainer$$IntExtContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "intExtTitle", $MainContainer$$IntExtContainer$$IntExtTitle_, pageInstance);
  addChild.call(this, "internal", $MainContainer$$IntExtContainer$$Internal_, pageInstance);
  addChild.call(this, "horizontalDivider", $MainContainer$$IntExtContainer$$HorizontalDivider_, pageInstance);
  addChild.call(this, "external", $MainContainer$$IntExtContainer$$External_, pageInstance);
}
$MainContainer$$IntExtContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 160,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    top: null,
    width: null
  }
};
const $MainContainer$$IntExtContainer_ = FlexLayout($MainContainer$$IntExtContainer);

function $MainContainer$$IntExtContainer$$IntExtTitle(_super, pageInstance) {
  _super(this, {
    text: "LOREM IPSUM"
  });
  pageInstance.intExtTitle = this;
}
$MainContainer$$IntExtContainer$$IntExtTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    width: null
  }
};
const $MainContainer$$IntExtContainer$$IntExtTitle_ = TextView($MainContainer$$IntExtContainer$$IntExtTitle);

function $MainContainer$$IntExtContainer$$Internal(_super, pageInstance) {
  _super(this);
  pageInstance.internal = this;
}
$MainContainer$$IntExtContainer$$Internal.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      justifyContent: "SPACE_BETWEEN",
      positionType: "RELATIVE"
    },
    height: 59,
    left: 0,
    marginLeft: null,
    top: 0,
    width: null
  }
};
const $MainContainer$$IntExtContainer$$Internal_ = ListItemSwitch($MainContainer$$IntExtContainer$$Internal);

function $MainContainer$$IntExtContainer$$HorizontalDivider(_super, pageInstance) {
  _super(this);
}
$MainContainer$$IntExtContainer$$HorizontalDivider.$$styleContext = {
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
const $MainContainer$$IntExtContainer$$HorizontalDivider_ = HorizontalDivider($MainContainer$$IntExtContainer$$HorizontalDivider);

function $MainContainer$$IntExtContainer$$External(_super, pageInstance) {
  _super(this);
  pageInstance.external = this;
}
$MainContainer$$IntExtContainer$$External.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      justifyContent: "SPACE_BETWEEN",
      positionType: "RELATIVE"
    },
    height: 59,
    left: 0,
    marginLeft: null,
    top: 0,
    width: null
  }
};
const $MainContainer$$IntExtContainer$$External_ = ListItemSwitch($MainContainer$$IntExtContainer$$External);

function $MainContainer$$NoteContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout97", $MainContainer$$NoteContainer$$Flexlayout97_, pageInstance);
  addChild.call(this, "description", $MainContainer$$NoteContainer$$Description_, pageInstance);
}
$MainContainer$$NoteContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 160,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: null
  }
};
const $MainContainer$$NoteContainer_ = FlexLayout($MainContainer$$NoteContainer);

function $MainContainer$$NoteContainer$$Flexlayout97(_super, pageInstance) {
  _super(this);
  addChild.call(this, "noteTitle", $MainContainer$$NoteContainer$$Flexlayout97$$NoteTitle_, pageInstance);
  addChild.call(this, "imageview44", $MainContainer$$NoteContainer$$Flexlayout97$$Imageview44_, pageInstance);
}
$MainContainer$$NoteContainer$$Flexlayout97.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW"
    },
    height: 25,
    width: null
  }
};
const $MainContainer$$NoteContainer$$Flexlayout97_ = FlexLayout($MainContainer$$NoteContainer$$Flexlayout97);

function $MainContainer$$NoteContainer$$Flexlayout97$$NoteTitle(_super, pageInstance) {
  _super(this, {
    text: "NOTE"
  });
  pageInstance.noteTitle = this;
}
$MainContainer$$NoteContainer$$Flexlayout97$$NoteTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    font: null,
    height: null,
    width: null
  }
};
const $MainContainer$$NoteContainer$$Flexlayout97$$NoteTitle_ = TextView($MainContainer$$NoteContainer$$Flexlayout97$$NoteTitle);

function $MainContainer$$NoteContainer$$Flexlayout97$$Imageview44(_super, pageInstance) {
  _super(this);
}
$MainContainer$$NoteContainer$$Flexlayout97$$Imageview44.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: null,
    image: "icon_microphone.png",
    imageFillType: "ASPECTFIT",
    width: 14
  }
};
const $MainContainer$$NoteContainer$$Flexlayout97$$Imageview44_ = ImageView($MainContainer$$NoteContainer$$Flexlayout97$$Imageview44);

function $MainContainer$$NoteContainer$$Description(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.description = this;
}
$MainContainer$$NoteContainer$$Description.$$styleContext = {
  classNames: ".textArea",
  userProps: {
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0.5,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    marginTop: 10,
    textAlignment: "TOPLEFT",
    width: null
  }
};
const $MainContainer$$NoteContainer$$Description_ = TextArea($MainContainer$$NoteContainer$$Description);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgOutOfOffice_);