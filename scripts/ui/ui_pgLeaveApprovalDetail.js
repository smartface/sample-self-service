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
const Label = extend(require('sf-core/ui/label'));
const TextArea = extend(require('sf-core/ui/textarea'));
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgLeaveApprovalDetail(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "mainContainer", $MainContainer_, this);
  pageContextPatch(this, "pgLeaveApprovalDetail");
}
$PgLeaveApprovalDetail.$$styleContext = {
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
const $PgLeaveApprovalDetail_ = Page($PgLeaveApprovalDetail);

function $MainContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "userInformation", $MainContainer$$UserInformation_, pageInstance);
  addChild.call(this, "flexlayout1104", $MainContainer$$Flexlayout1104_, pageInstance);
  addChild.call(this, "descriptionLayout", $MainContainer$$DescriptionLayout_, pageInstance);
  addChild.call(this, "buttonsLayout", $MainContainer$$ButtonsLayout_, pageInstance);
  pageInstance.mainContainer = this;
}
$MainContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    paddingLeft: null,
    paddingRight: null,
    paddingTop: null,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    left: 10,
    right: 10,
    top: 0,
    bottom: 70,
    flexProps: {
      flexGrow: null,
      alignItems: "STRETCH",
      positionType: "ABSOLUTE"
    }
  }
};
const $MainContainer_ = FlexLayout($MainContainer);

function $MainContainer$$UserInformation(_super, pageInstance) {
  _super(this);
  addChild.call(this, "avatar", $MainContainer$$UserInformation$$Avatar_, pageInstance);
  addChild.call(this, "flexlayout1103", $MainContainer$$UserInformation$$Flexlayout1103_, pageInstance);
  addChild.call(this, "flexlayout408", $MainContainer$$UserInformation$$Flexlayout408_, pageInstance);
}
$MainContainer$$UserInformation.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexProps: {
      flexDirection: "ROW",
      alignItems: "CENTER",
      flexGrow: 2
    }
  }
};
const $MainContainer$$UserInformation_ = FlexLayout($MainContainer$$UserInformation);

function $MainContainer$$UserInformation$$Avatar(_super, pageInstance) {
  _super(this);
  pageInstance.avatar = this;
}
$MainContainer$$UserInformation$$Avatar.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: null,
    image: "avatar1.png",
    imageFillType: "ASPECTFIT"
  }
};
const $MainContainer$$UserInformation$$Avatar_ = ImageView($MainContainer$$UserInformation$$Avatar);

function $MainContainer$$UserInformation$$Flexlayout1103(_super, pageInstance) {
  _super(this);
  addChild.call(this, "name", $MainContainer$$UserInformation$$Flexlayout1103$$Name_, pageInstance);
  addChild.call(this, "position", $MainContainer$$UserInformation$$Flexlayout1103$$Position_, pageInstance);
}
$MainContainer$$UserInformation$$Flexlayout1103.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 60,
    width: null,
    marginLeft: 10,
    flexProps: {
      flexGrow: 2
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout1103_ = FlexLayout($MainContainer$$UserInformation$$Flexlayout1103);

function $MainContainer$$UserInformation$$Flexlayout1103$$Name(_super, pageInstance) {
  _super(this, {
    text: "Adam Stewart"
  });
  pageInstance.name = this;
}
$MainContainer$$UserInformation$$Flexlayout1103$$Name.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textColor: "rgba( 74, 74, 74, 1 )",
    font: {
      size: 18
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout1103$$Name_ = Label($MainContainer$$UserInformation$$Flexlayout1103$$Name);

function $MainContainer$$UserInformation$$Flexlayout1103$$Position(_super, pageInstance) {
  _super(this, {
    text: "Manager of S&M"
  });
  pageInstance.position = this;
}
$MainContainer$$UserInformation$$Flexlayout1103$$Position.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textColor: "rgba( 74, 74, 74, 0.5 )",
    font: {
      size: 14
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout1103$$Position_ = Label($MainContainer$$UserInformation$$Flexlayout1103$$Position);

function $MainContainer$$UserInformation$$Flexlayout408(_super, pageInstance) {
  _super(this);
  addChild.call(this, "imageview66", $MainContainer$$UserInformation$$Flexlayout408$$Imageview66_, pageInstance);
  addChild.call(this, "label541", $MainContainer$$UserInformation$$Flexlayout408$$Label541_, pageInstance);
}
$MainContainer$$UserInformation$$Flexlayout408.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 60,
    flexProps: {
      flexGrow: 1,
      alignItems: "CENTER",
      justifyContent: "CENTER"
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout408_ = FlexLayout($MainContainer$$UserInformation$$Flexlayout408);

function $MainContainer$$UserInformation$$Flexlayout408$$Imageview66(_super, pageInstance) {
  _super(this);
}
$MainContainer$$UserInformation$$Flexlayout408$$Imageview66.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: null,
    height: 20,
    imageFillType: "ASPECTFIT",
    image: "icon_sick_leave.png",
    flexProps: {
      flexGrow: null,
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout408$$Imageview66_ = ImageView($MainContainer$$UserInformation$$Flexlayout408$$Imageview66);

function $MainContainer$$UserInformation$$Flexlayout408$$Label541(_super, pageInstance) {
  _super(this, {
    text: "Sick Leave"
  });
}
$MainContainer$$UserInformation$$Flexlayout408$$Label541.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    width: null,
    height: 20,
    textAlignment: "MIDCENTER",
    font: {
      size: 12
    },
    flexProps: {
      flexGrow: null,
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$UserInformation$$Flexlayout408$$Label541_ = Label($MainContainer$$UserInformation$$Flexlayout408$$Label541);

function $MainContainer$$Flexlayout1104(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout1105", $MainContainer$$Flexlayout1104$$Flexlayout1105_, pageInstance);
  addChild.call(this, "flexlayout1106", $MainContainer$$Flexlayout1104$$Flexlayout1106_, pageInstance);
  addChild.call(this, "imageview171", $MainContainer$$Flexlayout1104$$Imageview171_, pageInstance);
}
$MainContainer$$Flexlayout1104.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    marginTop: null,
    height: 220,
    marginLeft: null,
    marginRight: null,
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "CENTER",
      flexGrow: 3.5
    }
  }
};
const $MainContainer$$Flexlayout1104_ = FlexLayout($MainContainer$$Flexlayout1104);

function $MainContainer$$Flexlayout1104$$Flexlayout1105(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout1108", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_, pageInstance);
  addChild.call(this, "flexlayout1108_1", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1_, pageInstance);
  addChild.call(this, "imageview170", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Imageview170_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    flexProps: {
      flexGrow: 1,
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout1111", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_, pageInstance);
  addChild.call(this, "flexlayout1115", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1115_, pageInstance);
  addChild.call(this, "flexlayout1111_2", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    flexProps: {
      flexGrow: 1,
      flexDirection: "ROW"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label1572", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_, pageInstance);
  addChild.call(this, "label1572_1", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572(_super, pageInstance) {
  _super(this, {
    text: "9:30"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 74, 74, 74, 1 )",
    font: null,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_1(_super, pageInstance) {
  _super(this, {
    text: "Start Time"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPCENTER",
    textColor: "rgba( 74, 74, 74, 0.5 )",
    font: {
      size: 14
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111$$Label1572_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1115(_super, pageInstance) {
  _super(this);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1115.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: 1,
    height: null,
    backgroundColor: "rgba( 151, 151, 151, 1 )",
    flexProps: {
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1115_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1115);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label1572_2", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_2_, pageInstance);
  addChild.call(this, "label1572_1_1", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_1_1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_2(_super, pageInstance) {
  _super(this, {
    text: "12:30"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_2.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 74, 74, 74, 1 )",
    font: null,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_2_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_2);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_1_1(_super, pageInstance) {
  _super(this, {
    text: "End Time"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_1_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPCENTER",
    textColor: "rgba( 74, 74, 74, 0.5 )",
    font: {
      size: 14
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_1_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108$$Flexlayout1111_2$$Label1572_1_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label1_1", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_1_, pageInstance);
  addChild.call(this, "flexlayout1114", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Flexlayout1114_, pageInstance);
  addChild.call(this, "label1", $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    flexProps: {
      flexGrow: 1,
      flexDirection: "ROW"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_1(_super, pageInstance) {
  _super(this, {
    text: "MAY 19, 2017"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 74, 74, 74, 1 )",
    marginLeft: null,
    marginRight: 15,
    marginTop: 15,
    font: {
      size: 18
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Flexlayout1114(_super, pageInstance) {
  _super(this);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Flexlayout1114.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: 1,
    height: null,
    backgroundColor: "rgba( 151, 151, 151, 1 )",
    flexProps: {
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Flexlayout1114_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Flexlayout1114);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1(_super, pageInstance) {
  _super(this, {
    text: "MAY 24, 2017"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 74, 74, 74, 1 )",
    marginLeft: 15,
    marginTop: 15,
    font: {
      size: 18
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1105$$Flexlayout1108_1$$Label1);

function $MainContainer$$Flexlayout1104$$Flexlayout1105$$Imageview170(_super, pageInstance) {
  _super(this);
}
$MainContainer$$Flexlayout1104$$Flexlayout1105$$Imageview170.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: 30,
    height: 30,
    image: "icon_clock.png",
    imageFillType: "ASPECTFIT",
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      positionType: "ABSOLUTE",
      alignSelf: "CENTER"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1105$$Imageview170_ = ImageView($MainContainer$$Flexlayout1104$$Flexlayout1105$$Imageview170);

function $MainContainer$$Flexlayout1104$$Flexlayout1106(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1106.$$styleContext = {
  classNames: ".flexLayout .flexLayout-filled",
  userProps: {
    width: null,
    height: null,
    flexProps: {
      flexGrow: 1,
      alignSelf: "STRETCH"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1106);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "flexlayout2", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_, pageInstance);
  addChild.call(this, "flexlayout2_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_, pageInstance);
  addChild.call(this, "flexlayout2_1_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    width: null,
    height: null,
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    marginBottom: 5,
    flexProps: {
      flexGrow: 1,
      flexDirection: "ROW"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label2", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_, pageInstance);
  addChild.call(this, "label2_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_1_, pageInstance);
  addChild.call(this, "label2_2", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_2_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2.$$styleContext = {
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
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2(_super, pageInstance) {
  _super(this, {
    text: "19"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "BOTTOMCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 1 )",
    font: {
      size: 24
    },
    flexProps: {
      flexGrow: 2
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_1(_super, pageInstance) {
  _super(this, {
    text: "Days"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.5 )",
    font: {
      size: 12
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_2(_super, pageInstance) {
  _super(this, {
    text: "TOTAL"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_2.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.75 )",
    font: {
      size: 16
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_2_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2$$Label2_2);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label2_3", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_3_, pageInstance);
  addChild.call(this, "label2_1_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_1_1_, pageInstance);
  addChild.call(this, "label2_2_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_2_1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1.$$styleContext = {
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
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_3(_super, pageInstance) {
  _super(this, {
    text: "5"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_3.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "BOTTOMCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 1 )",
    font: {
      size: 24
    },
    flexProps: {
      flexGrow: 2
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_3_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_3);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_1_1(_super, pageInstance) {
  _super(this, {
    text: "Days"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_1_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.5 )",
    font: {
      size: 12
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_1_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_1_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_2_1(_super, pageInstance) {
  _super(this, {
    text: "REQUESTED"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_2_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.75 )",
    font: {
      size: 16
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_2_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1$$Label2_2_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label2_3_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_3_1_, pageInstance);
  addChild.call(this, "label2_1_1_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_1_1_1_, pageInstance);
  addChild.call(this, "label2_2_1_1", $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_2_1_1_, pageInstance);
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1.$$styleContext = {
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
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1_ = FlexLayout($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_3_1(_super, pageInstance) {
  _super(this, {
    text: "14"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_3_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "BOTTOMCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 1 )",
    font: {
      size: 24
    },
    flexProps: {
      flexGrow: 2
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_3_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_3_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_1_1_1(_super, pageInstance) {
  _super(this, {
    text: "Days"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_1_1_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.5 )",
    font: {
      size: 12
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_1_1_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_1_1_1);

function $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_2_1_1(_super, pageInstance) {
  _super(this, {
    text: "REMAINS"
  });
}
$MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_2_1_1.$$styleContext = {
  classNames: ".label",
  userProps: {
    width: null,
    height: null,
    textAlignment: "MIDCENTER",
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    textColor: "rgba( 255, 255, 255, 0.75 )",
    font: {
      size: 16
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_2_1_1_ = Label($MainContainer$$Flexlayout1104$$Flexlayout1106$$Flexlayout1$$Flexlayout2_1_1$$Label2_2_1_1);

function $MainContainer$$Flexlayout1104$$Imageview171(_super, pageInstance) {
  _super(this);
}
$MainContainer$$Flexlayout1104$$Imageview171.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: 50,
    height: 50,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    image: "icon_calendar.png",
    imageFillType: "ASPECTFIT",
    flexProps: {
      positionType: "ABSOLUTE",
      alignSelf: "CENTER"
    }
  }
};
const $MainContainer$$Flexlayout1104$$Imageview171_ = ImageView($MainContainer$$Flexlayout1104$$Imageview171);

function $MainContainer$$DescriptionLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "lblDescription", $MainContainer$$DescriptionLayout$$LblDescription_, pageInstance);
  addChild.call(this, "txtDescription", $MainContainer$$DescriptionLayout$$TxtDescription_, pageInstance);
}
$MainContainer$$DescriptionLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: 120,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexProps: {
      flexGrow: 2
    }
  }
};
const $MainContainer$$DescriptionLayout_ = FlexLayout($MainContainer$$DescriptionLayout);

function $MainContainer$$DescriptionLayout$$LblDescription(_super, pageInstance) {
  _super(this, {
    text: "Description"
  });
  pageInstance.lblDescription = this;
}
$MainContainer$$DescriptionLayout$$LblDescription.$$styleContext = {
  classNames: ".label",
  userProps: {
    height: null,
    width: null,
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$DescriptionLayout$$LblDescription_ = Label($MainContainer$$DescriptionLayout$$LblDescription);

function $MainContainer$$DescriptionLayout$$TxtDescription(_super, pageInstance) {
  _super(this, {
    text: ""
  });
  pageInstance.txtDescription = this;
}
$MainContainer$$DescriptionLayout$$TxtDescription.$$styleContext = {
  classNames: ".textArea",
  userProps: {
    width: null,
    height: null,
    textAlignment: "TOPLEFT",
    borderColor: "rgba( 203, 204, 208, 1 )",
    borderWidth: 0.5,
    font: {
      family: "Lato"
    },
    flexProps: {
      flexGrow: 1
    }
  }
};
const $MainContainer$$DescriptionLayout$$TxtDescription_ = TextArea($MainContainer$$DescriptionLayout$$TxtDescription);

function $MainContainer$$ButtonsLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "btnReject", $MainContainer$$ButtonsLayout$$BtnReject_, pageInstance);
  addChild.call(this, "flexlayout3", $MainContainer$$ButtonsLayout$$Flexlayout3_, pageInstance);
  addChild.call(this, "btnApprove", $MainContainer$$ButtonsLayout$$BtnApprove_, pageInstance);
}
$MainContainer$$ButtonsLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    marginTop: 10,
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexDirection: "ROW",
      flexGrow: 1
    }
  }
};
const $MainContainer$$ButtonsLayout_ = FlexLayout($MainContainer$$ButtonsLayout);

function $MainContainer$$ButtonsLayout$$BtnReject(_super, pageInstance) {
  _super(this, {
    text: "REJECT"
  });
  pageInstance.btnReject = this;
}
$MainContainer$$ButtonsLayout$$BtnReject.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 255, 50, 75, 1 )",
    flexProps: {
      flexGrow: 10
    }
  }
};
const $MainContainer$$ButtonsLayout$$BtnReject_ = Button($MainContainer$$ButtonsLayout$$BtnReject);

function $MainContainer$$ButtonsLayout$$Flexlayout3(_super, pageInstance) {
  _super(this);
}
$MainContainer$$ButtonsLayout$$Flexlayout3.$$styleContext = {
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
const $MainContainer$$ButtonsLayout$$Flexlayout3_ = FlexLayout($MainContainer$$ButtonsLayout$$Flexlayout3);

function $MainContainer$$ButtonsLayout$$BtnApprove(_super, pageInstance) {
  _super(this, {
    text: "APPROVE"
  });
  pageInstance.btnApprove = this;
}
$MainContainer$$ButtonsLayout$$BtnApprove.$$styleContext = {
  classNames: ".button",
  userProps: {
    width: null,
    height: null,
    backgroundColor: "rgba( 62, 208, 151, 1 )",
    flexProps: {
      flexGrow: 10
    }
  }
};
const $MainContainer$$ButtonsLayout$$BtnApprove_ = Button($MainContainer$$ButtonsLayout$$BtnApprove);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgLeaveApprovalDetail_);