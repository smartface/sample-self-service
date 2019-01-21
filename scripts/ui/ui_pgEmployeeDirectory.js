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
// Constructor
function $PgEmployeeDirectory(_super, props) {
  // Initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onLoad: onLoad.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = {};
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "layoutHeaderBar", $LayoutHeaderBar_, this);
  addChild.call(this, "listViewContainer", $ListViewContainer_, this);
  pageContextPatch(this, "pgEmployeeDirectory");
}
$PgEmployeeDirectory.$$styleContext = {
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
const $PgEmployeeDirectory_ = Page($PgEmployeeDirectory);

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
    height: 92,
    left: 0,
    top: 0,
    width: null
  }
};
const $LayoutHeaderBar_ = LayoutHeaderBar($LayoutHeaderBar);

function $ListViewContainer(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
  addChild.call(this, "listView", $ListViewContainer$$ListView_, pageInstance);
  pageInstance.listViewContainer = this;
}
$ListViewContainer.$$styleContext = {
  classNames: ".flexLayout",
  userProps: {
    flexProps: {
      flexGrow: 1,
      alignItems: "STRETCH",
      justifyContent: "CENTER"
    },
    height: null,
    marginLeft: 10,
    marginRight: 10,
    width: null
  }
};
const $ListViewContainer_ = FlexLayout($ListViewContainer);

function $ListViewContainer$$ListView(_super, pageInstance) {
  _super(this, {
    skipDefaults: true
  });
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
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
  // HeaderBar props
  this.headerBar.title = "newPage001";

}

module.exports = $PgEmployeeDirectory_;