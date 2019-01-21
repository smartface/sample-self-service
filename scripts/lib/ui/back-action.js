const Router = require("router");
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
        Router.push(`/`+pageName);
    }
}
