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
//constructor
function $PgMeetingRoomReservations(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "mainLayout", $MainLayout_, this);
  pageContextPatch(this, "pgMeetingRoomReservations");
}
$PgMeetingRoomReservations.$$styleContext = {
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
const $PgMeetingRoomReservations_ = Page($PgMeetingRoomReservations);

function $LayoutHeaderBar(_super, pageInstance) {
  _super(this);
  pageInstance.layoutHeaderBar = this;
}
$LayoutHeaderBar.$$styleContext = {
  classNames: ".flexLayout .flexLayout-headerBar",
  userProps: {
    left: 0,
    top: 0,
    width: null,
    height: 92,
    flexProps: {
      positionType: "RELATIVE"
    }
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $MainLayout(_super, pageInstance) {
  _super(this);
  addChild.call(this, "comingSoon", $MainLayout$$ComingSoon_, pageInstance);
  pageInstance.mainLayout = this;
}
$MainLayout.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    width: null,
    height: null,
    marginLeft: 10,
    marginRight: 10,
    flexProps: {
      flexGrow: 1,
      alignItems: "STRETCH",
      justifyContent: "CENTER"
    }
  }
};
const $MainLayout_ = FlexLayout($MainLayout);

function $MainLayout$$ComingSoon(_super, pageInstance) {
  _super(this);
  pageInstance.comingSoon = this;
}
$MainLayout$$ComingSoon.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    width: null,
    image: "coming_soon.png",
    height: 100,
    imageFillType: "ASPECTFIT",
    flexProps: {
      alignSelf: "STRETCH"
    }
  }
};
const $MainLayout$$ComingSoon_ = ImageView($MainLayout$$ComingSoon);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgMeetingRoomReservations_);