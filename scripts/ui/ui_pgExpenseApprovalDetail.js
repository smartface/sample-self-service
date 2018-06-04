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
const Button = extend(require('sf-core/ui/button'));

const ListItem1 = extend(require("../components/ListItem1"));
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
function $PgExpenseApprovalDetail(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "mainLayout", $MainLayout_, this);
  pageContextPatch(this, "pgExpenseApprovalDetail");
}
$PgExpenseApprovalDetail.$$styleContext = {
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
const $PgExpenseApprovalDetail_ = Page($PgExpenseApprovalDetail);

function $MainLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "userInformation", $MainLayout$$UserInformation_, pageInstance);
  addChild.call(this, "detailsLayout", $MainLayout$$DetailsLayout_, pageInstance);
  addChild.call(this, "noteLayout", $MainLayout$$NoteLayout_, pageInstance);
  addChild.call(this, "fileLayout", $MainLayout$$FileLayout_, pageInstance);
  addChild.call(this, "buttonsLayout", $MainLayout$$ButtonsLayout_, pageInstance);
  pageInstance.mainLayout = this;
}
$MainLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: null
    },
    height: 810,
    marginLeft: null,
    marginRight: null,
    paddingLeft: null,
    paddingRight: null,
    top: null,
    width: null
  }
};
const $MainLayout_ = FlexLayout($MainLayout);

function $MainLayout$$UserInformation(_super, pageInstance) {
  _super(this);
  addChild.call(this, "avatar", $MainLayout$$UserInformation$$Avatar_, pageInstance);
  addChild.call(this, "flexlayout109", $MainLayout$$UserInformation$$Flexlayout109_, pageInstance);
}
$MainLayout$$UserInformation.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER"
    },
    height: 90,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: null
  }
};
const $MainLayout$$UserInformation_ = FlexLayout($MainLayout$$UserInformation);

function $MainLayout$$UserInformation$$Avatar(_super, pageInstance) {
  _super(this);
  pageInstance.avatar = this;
}
$MainLayout$$UserInformation$$Avatar.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 60,
    image: "avatar1.png",
    imageFillType: "ASPECTFIT",
    width: 60
  }
};
const $MainLayout$$UserInformation$$Avatar_ = ImageView($MainLayout$$UserInformation$$Avatar);

function $MainLayout$$UserInformation$$Flexlayout109(_super, pageInstance) {
  _super(this);
  addChild.call(this, "name", $MainLayout$$UserInformation$$Flexlayout109$$Name_, pageInstance);
  addChild.call(this, "position", $MainLayout$$UserInformation$$Flexlayout109$$Position_, pageInstance);
}
$MainLayout$$UserInformation$$Flexlayout109.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: 60,
    marginLeft: 10,
    width: null
  }
};
const $MainLayout$$UserInformation$$Flexlayout109_ = FlexLayout($MainLayout$$UserInformation$$Flexlayout109);

function $MainLayout$$UserInformation$$Flexlayout109$$Name(_super, pageInstance) {
  _super(this, {
    text: "Adam Stewart"
  });
  pageInstance.name = this;
}
$MainLayout$$UserInformation$$Flexlayout109$$Name.$$styleContext = {
  classNames: ".label",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    font: {
      size: 18
    },
    height: null,
    textColor: "rgba( 74, 74, 74, 1 )",
    width: null
  }
};
const $MainLayout$$UserInformation$$Flexlayout109$$Name_ = TextView($MainLayout$$UserInformation$$Flexlayout109$$Name);

function $MainLayout$$UserInformation$$Flexlayout109$$Position(_super, pageInstance) {
  _super(this, {
    text: "Manager of S&M"
  });
  pageInstance.position = this;
}
$MainLayout$$UserInformation$$Flexlayout109$$Position.$$styleContext = {
  classNames: ".label",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    font: {
      size: 14
    },
    height: null,
    textColor: "rgba( 74, 74, 74, 0.5 )",
    width: null
  }
};
const $MainLayout$$UserInformation$$Flexlayout109$$Position_ = TextView($MainLayout$$UserInformation$$Flexlayout109$$Position);

function $MainLayout$$DetailsLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "detailsTitle", $MainLayout$$DetailsLayout$$DetailsTitle_, pageInstance);
  addChild.call(this, "titleItem", $MainLayout$$DetailsLayout$$TitleItem_, pageInstance);
  addChild.call(this, "horizontalDivider", $MainLayout$$DetailsLayout$$HorizontalDivider_, pageInstance);
  addChild.call(this, "typeItem", $MainLayout$$DetailsLayout$$TypeItem_, pageInstance);
  addChild.call(this, "horizontaldivider_1", $MainLayout$$DetailsLayout$$Horizontaldivider_1_, pageInstance);
  addChild.call(this, "expenseItem", $MainLayout$$DetailsLayout$$ExpenseItem_, pageInstance);
  addChild.call(this, "horizontaldivider_2", $MainLayout$$DetailsLayout$$Horizontaldivider_2_, pageInstance);
  addChild.call(this, "expenseDateItem", $MainLayout$$DetailsLayout$$ExpenseDateItem_, pageInstance);
}
$MainLayout$$DetailsLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 210,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    width: null
  }
};
const $MainLayout$$DetailsLayout_ = FlexLayout($MainLayout$$DetailsLayout);

function $MainLayout$$DetailsLayout$$DetailsTitle(_super, pageInstance) {
  _super(this, {
    text: "DETAILS"
  });
  pageInstance.detailsTitle = this;
}
$MainLayout$$DetailsLayout$$DetailsTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    width: null
  }
};
const $MainLayout$$DetailsLayout$$DetailsTitle_ = TextView($MainLayout$$DetailsLayout$$DetailsTitle);

function $MainLayout$$DetailsLayout$$TitleItem(_super, pageInstance) {
  _super(this);
  pageInstance.titleItem = this;
}
$MainLayout$$DetailsLayout$$TitleItem.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 40,
    left: 0,
    top: 0,
    width: null
  }
};
const $MainLayout$$DetailsLayout$$TitleItem_ = ListItem1($MainLayout$$DetailsLayout$$TitleItem);

function $MainLayout$$DetailsLayout$$HorizontalDivider(_super, pageInstance) {
  _super(this);
}
$MainLayout$$DetailsLayout$$HorizontalDivider.$$styleContext = {
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
const $MainLayout$$DetailsLayout$$HorizontalDivider_ = HorizontalDivider($MainLayout$$DetailsLayout$$HorizontalDivider);

function $MainLayout$$DetailsLayout$$TypeItem(_super, pageInstance) {
  _super(this);
  pageInstance.typeItem = this;
}
$MainLayout$$DetailsLayout$$TypeItem.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 40,
    left: 0,
    top: 0,
    width: null
  }
};
const $MainLayout$$DetailsLayout$$TypeItem_ = ListItem1($MainLayout$$DetailsLayout$$TypeItem);

function $MainLayout$$DetailsLayout$$Horizontaldivider_1(_super, pageInstance) {
  _super(this);
}
$MainLayout$$DetailsLayout$$Horizontaldivider_1.$$styleContext = {
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
const $MainLayout$$DetailsLayout$$Horizontaldivider_1_ = HorizontalDivider($MainLayout$$DetailsLayout$$Horizontaldivider_1);

function $MainLayout$$DetailsLayout$$ExpenseItem(_super, pageInstance) {
  _super(this);
  pageInstance.expenseItem = this;
}
$MainLayout$$DetailsLayout$$ExpenseItem.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 40,
    left: 0,
    top: 0,
    width: null
  }
};
const $MainLayout$$DetailsLayout$$ExpenseItem_ = ListItem1($MainLayout$$DetailsLayout$$ExpenseItem);

function $MainLayout$$DetailsLayout$$Horizontaldivider_2(_super, pageInstance) {
  _super(this);
}
$MainLayout$$DetailsLayout$$Horizontaldivider_2.$$styleContext = {
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
const $MainLayout$$DetailsLayout$$Horizontaldivider_2_ = HorizontalDivider($MainLayout$$DetailsLayout$$Horizontaldivider_2);

function $MainLayout$$DetailsLayout$$ExpenseDateItem(_super, pageInstance) {
  _super(this);
  pageInstance.expenseDateItem = this;
}
$MainLayout$$DetailsLayout$$ExpenseDateItem.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 40,
    left: 0,
    top: 0,
    width: null
  }
};
const $MainLayout$$DetailsLayout$$ExpenseDateItem_ = ListItem1($MainLayout$$DetailsLayout$$ExpenseDateItem);

function $MainLayout$$NoteLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "noteTitle", $MainLayout$$NoteLayout$$NoteTitle_, pageInstance);
  addChild.call(this, "note", $MainLayout$$NoteLayout$$Note_, pageInstance);
}
$MainLayout$$NoteLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 120,
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
const $MainLayout$$NoteLayout_ = FlexLayout($MainLayout$$NoteLayout);

function $MainLayout$$NoteLayout$$NoteTitle(_super, pageInstance) {
  _super(this, {
    text: "NOTE"
  });
  pageInstance.noteTitle = this;
}
$MainLayout$$NoteLayout$$NoteTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    width: null
  }
};
const $MainLayout$$NoteLayout$$NoteTitle_ = TextView($MainLayout$$NoteLayout$$NoteTitle);

function $MainLayout$$NoteLayout$$Note(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.note = this;
}
$MainLayout$$NoteLayout$$Note.$$styleContext = {
  classNames: ".label",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    font: null,
    height: null,
    marginTop: 10,
    width: null
  }
};
const $MainLayout$$NoteLayout$$Note_ = TextView($MainLayout$$NoteLayout$$Note);

function $MainLayout$$FileLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "fileTitle", $MainLayout$$FileLayout$$FileTitle_, pageInstance);
  addChild.call(this, "imageview22", $MainLayout$$FileLayout$$Imageview22_, pageInstance);
  pageInstance.fileLayout = this;
}
$MainLayout$$FileLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 300,
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
const $MainLayout$$FileLayout_ = FlexLayout($MainLayout$$FileLayout);

function $MainLayout$$FileLayout$$FileTitle(_super, pageInstance) {
  _super(this, {
    text: "FILE"
  });
  pageInstance.fileTitle = this;
}
$MainLayout$$FileLayout$$FileTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: null,
    height: 25,
    width: null
  }
};
const $MainLayout$$FileLayout$$FileTitle_ = TextView($MainLayout$$FileLayout$$FileTitle);

function $MainLayout$$FileLayout$$Imageview22(_super, pageInstance) {
  _super(this);
}
$MainLayout$$FileLayout$$Imageview22.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    image: "invoice.png",
    imageFillType: "ASPECTFIT",
    marginTop: 10,
    width: null
  }
};
const $MainLayout$$FileLayout$$Imageview22_ = ImageView($MainLayout$$FileLayout$$Imageview22);

function $MainLayout$$ButtonsLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "reject", $MainLayout$$ButtonsLayout$$Reject_, pageInstance);
  addChild.call(this, "flexlayout191", $MainLayout$$ButtonsLayout$$Flexlayout191_, pageInstance);
  addChild.call(this, "approve", $MainLayout$$ButtonsLayout$$Approve_, pageInstance);
}
$MainLayout$$ButtonsLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexDirection: "ROW"
    },
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: null
  }
};
const $MainLayout$$ButtonsLayout_ = FlexLayout($MainLayout$$ButtonsLayout);

function $MainLayout$$ButtonsLayout$$Reject(_super, pageInstance) {
  _super(this, {
    text: "REJECT"
  });
  pageInstance.reject = this;
}
$MainLayout$$ButtonsLayout$$Reject.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 255, 50, 75, 1 )",
    flexProps: {
      flexGrow: 10
    },
    font: null,
    height: null,
    width: null
  }
};
const $MainLayout$$ButtonsLayout$$Reject_ = Button($MainLayout$$ButtonsLayout$$Reject);

function $MainLayout$$ButtonsLayout$$Flexlayout191(_super, pageInstance) {
  _super(this);
}
$MainLayout$$ButtonsLayout$$Flexlayout191.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $MainLayout$$ButtonsLayout$$Flexlayout191_ = FlexLayout($MainLayout$$ButtonsLayout$$Flexlayout191);

function $MainLayout$$ButtonsLayout$$Approve(_super, pageInstance) {
  _super(this, {
    text: "APPROVE"
  });
  pageInstance.approve = this;
}
$MainLayout$$ButtonsLayout$$Approve.$$styleContext = {
  classNames: ".button",
  userProps: {
    backgroundColor: "rgba( 62, 208, 151, 1 )",
    flexProps: {
      flexGrow: 10
    },
    font: null,
    height: null,
    width: null
  }
};
const $MainLayout$$ButtonsLayout$$Approve_ = Button($MainLayout$$ButtonsLayout$$Approve);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgExpenseApprovalDetail_);