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
const Button = extend(require('sf-core/ui/button'));

const TextboxWithLine = extend(require("../components/TextboxWithLine"));
const PickerContainer = extend(require("../components/PickerContainer"));
const ItemFile = extend(require("../components/ItemFile"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgNewExpense(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "mainContainer", $MainContainer_, this);
  pageContextPatch(this, "pgNewExpense");
}
$PgNewExpense.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 239, 239, 239, 1 )"
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
const $PgNewExpense_ = Page($PgNewExpense);

function $MainContainer(_super, pageInstance) {
  _super(this, {
    id: NaN
  });
  addChild.call(this, "detailsLayout", $MainContainer$$DetailsLayout_, pageInstance);
  addChild.call(this, "noteLayout", $MainContainer$$NoteLayout_, pageInstance);
  addChild.call(this, "fileAttachmentLayout", $MainContainer$$FileAttachmentLayout_, pageInstance);
  addChild.call(this, "requestButton", $MainContainer$$RequestButton_, pageInstance);
  pageInstance.mainContainer = this;
}
$MainContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: null,
      alignItems: "STRETCH"
    },
    height: 620,
    width: null
  }
};
const $MainContainer_ = FlexLayout($MainContainer);

function $MainContainer$$DetailsLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "detailsTitle", $MainContainer$$DetailsLayout$$DetailsTitle_, pageInstance);
  addChild.call(this, "titleInput", $MainContainer$$DetailsLayout$$TitleInput_, pageInstance);
  addChild.call(this, "expenseInput", $MainContainer$$DetailsLayout$$ExpenseInput_, pageInstance);
  addChild.call(this, "flexlayout191", $MainContainer$$DetailsLayout$$Flexlayout191_, pageInstance);
}
$MainContainer$$DetailsLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 210,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: null
  }
};
const $MainContainer$$DetailsLayout_ = FlexLayout($MainContainer$$DetailsLayout);

function $MainContainer$$DetailsLayout$$DetailsTitle(_super, pageInstance) {
  _super(this, {
    text: "DETAILS"
  });
  pageInstance.detailsTitle = this;
}
$MainContainer$$DetailsLayout$$DetailsTitle.$$styleContext = {
  classNames: ".label",
  userProps: {
    font: {
      size: 16
    },
    height: 25,
    left: null,
    marginLeft: 10,
    marginTop: 5,
    top: null,
    width: null
  }
};
const $MainContainer$$DetailsLayout$$DetailsTitle_ = TextView($MainContainer$$DetailsLayout$$DetailsTitle);

function $MainContainer$$DetailsLayout$$TitleInput(_super, pageInstance) {
  _super(this);
  pageInstance.titleInput = this;
}
$MainContainer$$DetailsLayout$$TitleInput.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 50,
    left: null,
    marginTop: 10,
    top: null,
    visible: true,
    width: null
  }
};
const $MainContainer$$DetailsLayout$$TitleInput_ = TextboxWithLine($MainContainer$$DetailsLayout$$TitleInput);

function $MainContainer$$DetailsLayout$$ExpenseInput(_super, pageInstance) {
  _super(this);
  pageInstance.expenseInput = this;
}
$MainContainer$$DetailsLayout$$ExpenseInput.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 50,
    left: 0,
    marginTop: 5,
    paddingLeft: null,
    paddingRight: null,
    top: 0,
    width: null
  }
};
const $MainContainer$$DetailsLayout$$ExpenseInput_ = TextboxWithLine($MainContainer$$DetailsLayout$$ExpenseInput);

function $MainContainer$$DetailsLayout$$Flexlayout191(_super, pageInstance) {
  _super(this);
  addChild.call(this, "typePicker", $MainContainer$$DetailsLayout$$Flexlayout191$$TypePicker_, pageInstance);
  addChild.call(this, "expenseDatePicker", $MainContainer$$DetailsLayout$$Flexlayout191$$ExpenseDatePicker_, pageInstance);
}
$MainContainer$$DetailsLayout$$Flexlayout191.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      alignItems: "CENTER",
      flexDirection: "ROW"
    },
    height: 50,
    marginTop: 5,
    width: null
  }
};
const $MainContainer$$DetailsLayout$$Flexlayout191_ = FlexLayout($MainContainer$$DetailsLayout$$Flexlayout191);

function $MainContainer$$DetailsLayout$$Flexlayout191$$TypePicker(_super, pageInstance) {
  _super(this);
  pageInstance.typePicker = this;
}
$MainContainer$$DetailsLayout$$Flexlayout191$$TypePicker.$$styleContext = {
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
const $MainContainer$$DetailsLayout$$Flexlayout191$$TypePicker_ = PickerContainer($MainContainer$$DetailsLayout$$Flexlayout191$$TypePicker);

function $MainContainer$$DetailsLayout$$Flexlayout191$$ExpenseDatePicker(_super, pageInstance) {
  _super(this);
  pageInstance.expenseDatePicker = this;
}
$MainContainer$$DetailsLayout$$Flexlayout191$$ExpenseDatePicker.$$styleContext = {
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
const $MainContainer$$DetailsLayout$$Flexlayout191$$ExpenseDatePicker_ = PickerContainer($MainContainer$$DetailsLayout$$Flexlayout191$$ExpenseDatePicker);

function $MainContainer$$NoteLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout76", $MainContainer$$NoteLayout$$Flexlayout76_, pageInstance);
  addChild.call(this, "description", $MainContainer$$NoteLayout$$Description_, pageInstance);
}
$MainContainer$$NoteLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: null
    },
    height: 150,
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
const $MainContainer$$NoteLayout_ = FlexLayout($MainContainer$$NoteLayout);

function $MainContainer$$NoteLayout$$Flexlayout76(_super, pageInstance) {
  _super(this);
  addChild.call(this, "noteTitle", $MainContainer$$NoteLayout$$Flexlayout76$$NoteTitle_, pageInstance);
  addChild.call(this, "imageview17", $MainContainer$$NoteLayout$$Flexlayout76$$Imageview17_, pageInstance);
}
$MainContainer$$NoteLayout$$Flexlayout76.$$styleContext = {
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
const $MainContainer$$NoteLayout$$Flexlayout76_ = FlexLayout($MainContainer$$NoteLayout$$Flexlayout76);

function $MainContainer$$NoteLayout$$Flexlayout76$$NoteTitle(_super, pageInstance) {
  _super(this, {
    text: "NOTE"
  });
  pageInstance.noteTitle = this;
}
$MainContainer$$NoteLayout$$Flexlayout76$$NoteTitle.$$styleContext = {
  classNames: ".label",
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
const $MainContainer$$NoteLayout$$Flexlayout76$$NoteTitle_ = TextView($MainContainer$$NoteLayout$$Flexlayout76$$NoteTitle);

function $MainContainer$$NoteLayout$$Flexlayout76$$Imageview17(_super, pageInstance) {
  _super(this);
}
$MainContainer$$NoteLayout$$Flexlayout76$$Imageview17.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 25,
    image: "icon_microphone.png",
    imageFillType: "ASPECTFIT",
    width: 14
  }
};
const $MainContainer$$NoteLayout$$Flexlayout76$$Imageview17_ = ImageView($MainContainer$$NoteLayout$$Flexlayout76$$Imageview17);

function $MainContainer$$NoteLayout$$Description(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.description = this;
}
$MainContainer$$NoteLayout$$Description.$$styleContext = {
  classNames: ".textArea",
  userProps: {
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0.5,
    flexProps: {
      flexGrow: 1
    },
    height: null,
    textAlignment: "TOPLEFT",
    width: null
  }
};
const $MainContainer$$NoteLayout$$Description_ = TextArea($MainContainer$$NoteLayout$$Description);

function $MainContainer$$FileAttachmentLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout76_1", $MainContainer$$FileAttachmentLayout$$Flexlayout76_1_, pageInstance);
  addChild.call(this, "attachmentsLayout", $MainContainer$$FileAttachmentLayout$$AttachmentsLayout_, pageInstance);
}
$MainContainer$$FileAttachmentLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: null
    },
    height: 150,
    marginBottom: null,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    width: null
  }
};
const $MainContainer$$FileAttachmentLayout_ = FlexLayout($MainContainer$$FileAttachmentLayout);

function $MainContainer$$FileAttachmentLayout$$Flexlayout76_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "fileAttachmentTitle", $MainContainer$$FileAttachmentLayout$$Flexlayout76_1$$FileAttachmentTitle_, pageInstance);
}
$MainContainer$$FileAttachmentLayout$$Flexlayout76_1.$$styleContext = {
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
const $MainContainer$$FileAttachmentLayout$$Flexlayout76_1_ = FlexLayout($MainContainer$$FileAttachmentLayout$$Flexlayout76_1);

function $MainContainer$$FileAttachmentLayout$$Flexlayout76_1$$FileAttachmentTitle(_super, pageInstance) {
  _super(this, {
    text: "FILE ATTACHMENT"
  });
  pageInstance.fileAttachmentTitle = this;
}
$MainContainer$$FileAttachmentLayout$$Flexlayout76_1$$FileAttachmentTitle.$$styleContext = {
  classNames: ".label",
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
const $MainContainer$$FileAttachmentLayout$$Flexlayout76_1$$FileAttachmentTitle_ = TextView($MainContainer$$FileAttachmentLayout$$Flexlayout76_1$$FileAttachmentTitle);

function $MainContainer$$FileAttachmentLayout$$AttachmentsLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "addFile", $MainContainer$$FileAttachmentLayout$$AttachmentsLayout$$AddFile_, pageInstance);
  pageInstance.attachmentsLayout = this;
}
$MainContainer$$FileAttachmentLayout$$AttachmentsLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignItems: "CENTER",
      justifyContent: "FLEX_START",
      flexDirection: "ROW"
    },
    height: null,
    paddingLeft: null,
    width: null
  }
};
const $MainContainer$$FileAttachmentLayout$$AttachmentsLayout_ = FlexLayout($MainContainer$$FileAttachmentLayout$$AttachmentsLayout);

function $MainContainer$$FileAttachmentLayout$$AttachmentsLayout$$AddFile(_super, pageInstance) {
  _super(this);
  pageInstance.addFile = this;
}
$MainContainer$$FileAttachmentLayout$$AttachmentsLayout$$AddFile.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderRadius: null,
    borderWidth: 0.5,
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "CENTER",
      positionType: "RELATIVE"
    },
    height: 65,
    left: 0,
    top: 0,
    width: 65
  }
};
const $MainContainer$$FileAttachmentLayout$$AttachmentsLayout$$AddFile_ = ItemFile($MainContainer$$FileAttachmentLayout$$AttachmentsLayout$$AddFile);

function $MainContainer$$RequestButton(_super, pageInstance) {
  _super(this, {
    text: "REQUEST"
  });
  pageInstance.requestButton = this;
}
$MainContainer$$RequestButton.$$styleContext = {
  classNames: ".button",
  userProps: {
    flexProps: {
      alignSelf: "STRETCH"
    },
    font: null,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    top: 10,
    width: null
  }
};
const $MainContainer$$RequestButton_ = Button($MainContainer$$RequestButton);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props

}

module && (module.exports = $PgNewExpense_);