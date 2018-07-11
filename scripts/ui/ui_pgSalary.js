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
const WebView = extend(require('sf-core/ui/webview'));
const ListView = extend(require('sf-core/ui/listview'));
const ListViewItem = extend(require('sf-core/ui/listviewitem'));
const actionAddChild = require("@smartface/contx/lib/smartface/action/addChild");
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
function $PgSalary(_super, props) {
  // initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onShow: onShow.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = this.statusBar;
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "flexlayout1", $Flexlayout1_, this);
  addChild.call(this, "listViewContainer", $ListViewContainer_, this);
  pageContextPatch(this, "pgSalary");
}
$PgSalary.$$styleContext = {
  classNames: ".page",
  userProps: {
    backgroundColor: "rgba( 228, 228, 228, 1 )"
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
const $PgSalary_ = Page($PgSalary);

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
    height: 82,
    left: 0,
    marginTop: null,
    top: 0,
    width: null
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $Flexlayout1(_super, pageInstance) {
  _super(this);
  addChild.call(this, "wvChart", $Flexlayout1$$WvChart_, pageInstance);
}
$Flexlayout1.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    height: 180,
    width: null
  }
};
const $Flexlayout1_ = FlexLayout($Flexlayout1);

function $Flexlayout1$$WvChart(_super, pageInstance) {
  _super(this);
  pageInstance.wvChart = this;
}
$Flexlayout1$$WvChart.$$styleContext = {
  classNames: ".webView",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $Flexlayout1$$WvChart_ = WebView($Flexlayout1$$WvChart);

function $ListViewContainer(_super, pageInstance) {
  _super(this);
  addChild.call(this, "listView", $ListViewContainer$$ListView_, pageInstance);
  pageInstance.listViewContainer = this;
}
$ListViewContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      justifyContent: "CENTER"
    },
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $ListViewContainer_ = FlexLayout($ListViewContainer);

function $ListViewContainer$$ListView(_super, pageInstance) {
  _super(this);
  var itemIndex = 0;
  this.onRowCreate = function() {
    var item = new ListViewItem();
    this.dispatch(actionAddChild(`item${++itemIndex}`, item));
    return item;
  };
  pageInstance.listView = this;
}
$ListViewContainer$$ListView.$$styleContext = {
  classNames: ".listView",
  userProps: {
    flexProps: {
      flexGrow: 1
    },
    height: null,
    width: null
  }
};
const $ListViewContainer$$ListView_ = ListView($ListViewContainer$$ListView);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {Object} parameters passed from Router.go function
 */
function onShow() {
  //HeaderBar props
  this.headerBar.title = "newPage001";

}

module && (module.exports = $PgSalary_);