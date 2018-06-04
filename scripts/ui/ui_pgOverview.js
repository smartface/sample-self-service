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

const LayoutHeaderBar = extend(require("../components/LayoutHeaderBar"));
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
function $PgOverview(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "flexlayout1", $Flexlayout1_, this);
  addChild.call(this, "flexlayout500", $Flexlayout500_, this);
  pageContextPatch(this, "pgOverview");
}
$PgOverview.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: "",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      visible: false
    }
  }
};
const $PgOverview_ = Page($PgOverview);

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

function $Flexlayout1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "imageview111", $Flexlayout1$$Imageview111_, pageInstance);
  addChild.call(this, "label827", $Flexlayout1$$Label827_, pageInstance);
  addChild.call(this, "label827_1", $Flexlayout1$$Label827_1_, pageInstance);
}
$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    flexProps: {
      alignItems: "CENTER",
      justifyContent: "CENTER"
    },
    height: 170,
    width: null
  }
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);

function $Flexlayout1$$Imageview111(_super, pageInstance) {
  _super(this);
}
$Flexlayout1$$Imageview111.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 85,
    image: "myavatar.png",
    imageFillType: "ASPECTFIT",
    marginBottom: 5,
    width: 85
  }
};
const $Flexlayout1$$Imageview111_ = ImageView($Flexlayout1$$Imageview111);

function $Flexlayout1$$Label827(_super, pageInstance) {
  _super(this, {
    text: "Anthony Bell"
  });
}
$Flexlayout1$$Label827.$$styleContext = {
  classNames: ".label .label-overview-title",
  userProps: {
    font: {
      bold: false,
      size: 18
    },
    height: 25,
    width: 200
  }
};
const $Flexlayout1$$Label827_ = TextView($Flexlayout1$$Label827);

function $Flexlayout1$$Label827_1(_super, pageInstance) {
  _super(this, {
    text: "Director of Sales & Marketing"
  });
}
$Flexlayout1$$Label827_1.$$styleContext = {
  classNames: ".label .label-overview-title",
  userProps: {
    font: {
      size: 14
    },
    height: 25,
    width: 200
  }
};
const $Flexlayout1$$Label827_1_ = TextView($Flexlayout1$$Label827_1);

function $Flexlayout500(_super, pageInstance) {
  _super(this);
  addChild.call(this, "qualificationcontainer", $Flexlayout500$$Qualificationcontainer_, pageInstance);
  addChild.call(this, "salarycontainer", $Flexlayout500$$Salarycontainer_, pageInstance);
  addChild.call(this, "qualificationcontainer_1", $Flexlayout500$$Qualificationcontainer_1_, pageInstance);
  pageInstance.flexlayout500 = this;
}
$Flexlayout500.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      flexGrow: null
    },
    height: 490,
    width: null
  }
};
const $Flexlayout500_ = FlexLayout($Flexlayout500);

function $Flexlayout500$$Qualificationcontainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "qualificationTitle", $Flexlayout500$$Qualificationcontainer$$QualificationTitle_, pageInstance);
  addChild.call(this, "containerType", $Flexlayout500$$Qualificationcontainer$$ContainerType_, pageInstance);
  addChild.call(this, "horizontalDivider", $Flexlayout500$$Qualificationcontainer$$HorizontalDivider_, pageInstance);
  addChild.call(this, "containerTitle", $Flexlayout500$$Qualificationcontainer$$ContainerTitle_, pageInstance);
  addChild.call(this, "horizontaldivider_1", $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_, pageInstance);
  addChild.call(this, "containerAwardedDate", $Flexlayout500$$Qualificationcontainer$$ContainerAwardedDate_, pageInstance);
}
$Flexlayout500$$Qualificationcontainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 170,
    left: null,
    marginLeft: 10,
    marginRight: 10,
    marginTop: null,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    right: null,
    top: null,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_ = FlexLayout($Flexlayout500$$Qualificationcontainer);

function $Flexlayout500$$Qualificationcontainer$$QualificationTitle(_super, pageInstance) {
  _super(this, {
    text: "QUALIFICATION"
  });
  pageInstance.qualificationTitle = this;
}
$Flexlayout500$$Qualificationcontainer$$QualificationTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: {
      size: 16
    },
    height: 25,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$QualificationTitle_ = TextView($Flexlayout500$$Qualificationcontainer$$QualificationTitle);

function $Flexlayout500$$Qualificationcontainer$$ContainerType(_super, pageInstance) {
  _super(this);
  pageInstance.containerType = this;
}
$Flexlayout500$$Qualificationcontainer$$ContainerType.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$ContainerType_ = ListItem1($Flexlayout500$$Qualificationcontainer$$ContainerType);

function $Flexlayout500$$Qualificationcontainer$$HorizontalDivider(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer$$HorizontalDivider.$$styleContext = {
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
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$HorizontalDivider_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer$$HorizontalDivider);

function $Flexlayout500$$Qualificationcontainer$$ContainerTitle(_super, pageInstance) {
  _super(this);
  pageInstance.containerTitle = this;
}
$Flexlayout500$$Qualificationcontainer$$ContainerTitle.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$ContainerTitle_ = ListItem1($Flexlayout500$$Qualificationcontainer$$ContainerTitle);

function $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1.$$styleContext = {
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
    marginBottom: 5,
    marginTop: 5,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer$$Horizontaldivider_1);

function $Flexlayout500$$Qualificationcontainer$$ContainerAwardedDate(_super, pageInstance) {
  _super(this);
  pageInstance.containerAwardedDate = this;
}
$Flexlayout500$$Qualificationcontainer$$ContainerAwardedDate.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer$$ContainerAwardedDate_ = ListItem1($Flexlayout500$$Qualificationcontainer$$ContainerAwardedDate);

function $Flexlayout500$$Salarycontainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "salaryTitle", $Flexlayout500$$Salarycontainer$$SalaryTitle_, pageInstance);
  addChild.call(this, "containerBasic", $Flexlayout500$$Salarycontainer$$ContainerBasic_, pageInstance);
  addChild.call(this, "horizontaldivider_2", $Flexlayout500$$Salarycontainer$$Horizontaldivider_2_, pageInstance);
  addChild.call(this, "containerVariable", $Flexlayout500$$Salarycontainer$$ContainerVariable_, pageInstance);
}
$Flexlayout500$$Salarycontainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 120,
    left: null,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    right: null,
    top: null,
    width: null
  }
};
const $Flexlayout500$$Salarycontainer_ = FlexLayout($Flexlayout500$$Salarycontainer);

function $Flexlayout500$$Salarycontainer$$SalaryTitle(_super, pageInstance) {
  _super(this, {
    text: "SALARY"
  });
  pageInstance.salaryTitle = this;
}
$Flexlayout500$$Salarycontainer$$SalaryTitle.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: {
      size: 16
    },
    height: 25,
    width: null
  }
};
const $Flexlayout500$$Salarycontainer$$SalaryTitle_ = TextView($Flexlayout500$$Salarycontainer$$SalaryTitle);

function $Flexlayout500$$Salarycontainer$$ContainerBasic(_super, pageInstance) {
  _super(this);
  pageInstance.containerBasic = this;
}
$Flexlayout500$$Salarycontainer$$ContainerBasic.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Salarycontainer$$ContainerBasic_ = ListItem1($Flexlayout500$$Salarycontainer$$ContainerBasic);

function $Flexlayout500$$Salarycontainer$$Horizontaldivider_2(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Salarycontainer$$Horizontaldivider_2.$$styleContext = {
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
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Salarycontainer$$Horizontaldivider_2_ = HorizontalDivider($Flexlayout500$$Salarycontainer$$Horizontaldivider_2);

function $Flexlayout500$$Salarycontainer$$ContainerVariable(_super, pageInstance) {
  _super(this);
  pageInstance.containerVariable = this;
}
$Flexlayout500$$Salarycontainer$$ContainerVariable.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Salarycontainer$$ContainerVariable_ = ListItem1($Flexlayout500$$Salarycontainer$$ContainerVariable);

function $Flexlayout500$$Qualificationcontainer_1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "label536_2", $Flexlayout500$$Qualificationcontainer_1$$Label536_2_, pageInstance);
  addChild.call(this, "objectiveContainer", $Flexlayout500$$Qualificationcontainer_1$$ObjectiveContainer_, pageInstance);
  addChild.call(this, "horizontaldivider_3", $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_3_, pageInstance);
  addChild.call(this, "dueDateContainer", $Flexlayout500$$Qualificationcontainer_1$$DueDateContainer_, pageInstance);
  addChild.call(this, "horizontaldivider_1_1", $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_1_1_, pageInstance);
  addChild.call(this, "resultContainer", $Flexlayout500$$Qualificationcontainer_1$$ResultContainer_, pageInstance);
}
$Flexlayout500$$Qualificationcontainer_1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 170,
    left: null,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    right: null,
    top: null,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1_ = FlexLayout($Flexlayout500$$Qualificationcontainer_1);

function $Flexlayout500$$Qualificationcontainer_1$$Label536_2(_super, pageInstance) {
  _super(this, {
    text: "PERFORMANCE OBJECTIVE"
  });
}
$Flexlayout500$$Qualificationcontainer_1$$Label536_2.$$styleContext = {
  classNames: ".label .label-list-item-header",
  userProps: {
    font: {
      size: 16
    },
    height: 25,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$Label536_2_ = TextView($Flexlayout500$$Qualificationcontainer_1$$Label536_2);

function $Flexlayout500$$Qualificationcontainer_1$$ObjectiveContainer(_super, pageInstance) {
  _super(this);
  pageInstance.objectiveContainer = this;
}
$Flexlayout500$$Qualificationcontainer_1$$ObjectiveContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$ObjectiveContainer_ = ListItem1($Flexlayout500$$Qualificationcontainer_1$$ObjectiveContainer);

function $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_3(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_3.$$styleContext = {
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
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_3_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_3);

function $Flexlayout500$$Qualificationcontainer_1$$DueDateContainer(_super, pageInstance) {
  _super(this);
  pageInstance.dueDateContainer = this;
}
$Flexlayout500$$Qualificationcontainer_1$$DueDateContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$DueDateContainer_ = ListItem1($Flexlayout500$$Qualificationcontainer_1$$DueDateContainer);

function $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_1_1(_super, pageInstance) {
  _super(this);
}
$Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_1_1.$$styleContext = {
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
    marginBottom: 5,
    marginTop: 5,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_1_1_ = HorizontalDivider($Flexlayout500$$Qualificationcontainer_1$$Horizontaldivider_1_1);

function $Flexlayout500$$Qualificationcontainer_1$$ResultContainer(_super, pageInstance) {
  _super(this);
  pageInstance.resultContainer = this;
}
$Flexlayout500$$Qualificationcontainer_1$$ResultContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    flexProps: {
      flexDirection: "ROW",
      positionType: "RELATIVE",
      alignItems: "CENTER"
    },
    height: 35,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $Flexlayout500$$Qualificationcontainer_1$$ResultContainer_ = ListItem1($Flexlayout500$$Qualificationcontainer_1$$ResultContainer);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgOverview_);