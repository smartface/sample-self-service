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

const LayoutHeaderBar = extend(require("../components/LayoutHeaderBar"));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
// Constructor
function $PgMyCompany(_super, props) {
  // Initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onLoad: onLoad.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = {};
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "flexlayout109", $Flexlayout109_, this);
  pageContextPatch(this, "pgMyCompany");
}
$PgMyCompany.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 226, 226, 228, 1 )"
  },
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
const $PgMyCompany_ = Page($PgMyCompany);

function $LayoutHeaderBar(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    flexProps: {
      positionType: "RELATIVE"
    },
    height: 60,
    left: 0,
    top: 0,
    width: null
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $Flexlayout109(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "comingSoon", $Flexlayout109$$ComingSoon_, pageInstance);
}
$Flexlayout109.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignItems: "CENTER",
      justifyContent: "CENTER"
    },
    height: null,
    left: null,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    right: null,
    width: null
  }
};
const $Flexlayout109_ = FlexLayout($Flexlayout109);

function $Flexlayout109$$ComingSoon(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  pageInstance.comingSoon = this;
}
$Flexlayout109$$ComingSoon.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    flexProps: {
      alignSelf: "STRETCH"
    },
    height: 100,
    image: "coming_soon.png",
    imageFillType: "ASPECTFIT",
    width: null
  }
};
const $Flexlayout109$$ComingSoon_ = ImageView($Flexlayout109$$ComingSoon);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
  // HeaderBar props
  this.headerBar.title = "newPage001";

}

module.exports = $PgMyCompany_;