const System = require('sf-core/device/system');
const HeaderBarItem = require('sf-core/ui/headerbaritem');
const Router = require("sf-core/ui/router");
const Image = require('sf-core/ui/image');
const Color = require('sf-core/ui/color');

module.exports = applyDefaultBackAction;

function applyDefaultBackAction(page, backAction, styleSelection) {
    page.headerBar.leftItemEnabled = true;
    var backPageName = "";
    if (typeof backAction === "string") {
        backPageName = backAction;
        backAction = defaultGoBack.bind(page, backPageName);
    }
    else {
        backAction = backAction || defaultGoBack.bind(page);
    }
    var style = {
        "DARK": {
            imageName: "images://back_dark.png",
            textColor: Color.BLACK
        },

        "LIGHT": {
            imageName: "images://back.png",
            textColor: Color.WHITE
        }
    };
    var selectedStyle = style[styleSelection || "LIGHT"];

    //if (System.OS === "iOS") { //default android will do the trick;
    //    var leftItem = new HeaderBarItem({
    //        title: "",
    //        onPress: function() {
    //            backAction();
    //        },
    //        image: Image.createFromFile(selectedStyle.imageName),
    //        color: Color.WHITE
    //    });
    //    page.headerBar.leftItem = leftItem;
    //    page.headerBar.setLeftItem(leftItem);
    //}
    page.headerBar.itemColor = selectedStyle.textColor;
    if (page.headerBar.ios)
        page.headerBar.ios.itemColor = selectedStyle.textColor;
    if (!page.android.onBackButtonPressed) {
        page.android.onBackButtonPressed = function() {
            backAction();
        };
    }
}

function defaultGoBack(pageName) {
    if (!pageName) {
        Router.goBack();
    }
    else {
        Router.goBack(pageName);
    }
}
