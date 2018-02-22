/*globals lang*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const PageDesign = require("../../../ui/ui_pgDocumentDetail");

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        this.onShow = onShow.bind(this, this.onShow);
        this.onLoad = onLoad.bind(this, this.onLoad);
    }
);

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.ios.safeAreaLayoutMode = true;
}

function onShow(parentOnShow) {
    parentOnShow();
    this.headerBar.title = lang["pgDocumentDetail.pageTitle"];
    this.headerBar.itemColor = Color.WHITE;
    initHeaderBar.call(this);
}

function initHeaderBar() {
    var addItem = new HeaderBarItem({
        title: "",
        image: Image.createFromFile("images://icon_add_white.png")
    });
    this.headerBar.setItems([addItem]);
}

module && (module.exports = Page_);
