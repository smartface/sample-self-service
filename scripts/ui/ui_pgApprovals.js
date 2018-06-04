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
const ListView = extend(require('sf-core/ui/listview'));
const ListViewItem = extend(require('sf-core/ui/listviewitem'));
const actionAddChild = require("@smartface/contx/lib/smartface/action/addChild");

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
//constructor
function $PgApprovals(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "flexlayout137", $Flexlayout137_, this);
  addChild.call(this, "listView1", $ListView1_, this);
  pageContextPatch(this, "pgApprovals");
}
$PgApprovals.$$styleContext = {
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
const $PgApprovals_ = Page($PgApprovals);

function $Flexlayout137(_super, pageInstance) {
  _super(this);
  addChild.call(this, "comingSoon", $Flexlayout137$$ComingSoon_, pageInstance);
}
$Flexlayout137.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignItems: "STRETCH",
      justifyContent: "CENTER"
    },
    height: null,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $Flexlayout137_ = FlexLayout($Flexlayout137);

function $Flexlayout137$$ComingSoon(_super, pageInstance) {
  _super(this);
  pageInstance.comingSoon = this;
}
$Flexlayout137$$ComingSoon.$$styleContext = {
  classNames: ".imageView",
  userProps: {
    height: 100,
    imageFillType: "ASPECTFIT",
    width: null
  }
};
const $Flexlayout137$$ComingSoon_ = ImageView($Flexlayout137$$ComingSoon);

function $ListView1(_super, pageInstance) {
  _super(this);
  var itemIndex = 0;
  this.onRowCreate = function() {
    var item = new ListViewItem();
    this.dispatch(actionAddChild(`item${++itemIndex}`, item));
    return item;
  };
}
$ListView1.$$styleContext = {
  classNames: ".listView",
  userProps: {}
};
const $ListView1_ = ListView($ListView1);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgApprovals_);