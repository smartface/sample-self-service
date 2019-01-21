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

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
// Constructor
function $PgExpenseApprovalDetail(_super, props) {
  // Initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onLoad: onLoad.bind(this)
  }, props || {}));
  this.children = {};
  this.children["statusBar"] = {};
  this.children["headerBar"] = this.headerBar;

  pageContextPatch(this, "pgExpenseApprovalDetail");
}
$PgExpenseApprovalDetail.$$styleContext = {
  classNames: ".page",
  userProps: {},
  statusBar: {
    classNames: ".statusBar",
    userProps: {}
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {}
  }
};
const $PgExpenseApprovalDetail_ = Page($PgExpenseApprovalDetail);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
  // HeaderBar props
  this.headerBar.title = "pgExpenseApprovalDetail";

}

module.exports = $PgExpenseApprovalDetail_;