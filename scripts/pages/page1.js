const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");

// Get generetad UI code
var Page1Design = require("../ui/ui_page1");

const Page1 = extend(Page1Design)(
    function(_super) {
        var self = this;
        _super(self);

        this.headerBar.leftItemEnabled = false;
        this.children.flexlayout.children.btn.onPress = btn_onPress.bind(this);
        this.btnNext.onPress = btnNext_onPress.bind(this);
    });

function btnNext_onPress() {
    Router.go("page2", {
        message: "Hello World!"
    });
}

var btnClickCount = 0;

// Gets/sets press event callback for btn
function btn_onPress() {
    var myLabelText = "";
    var myButtonText = "";

    btnClickCount += 1;

    switch (true) {
        case btnClickCount == 1:
            myLabelText = "Well Done! \nYou've clicked the button!";
            myButtonText = "Click me again!";
            break;
        case btnClickCount < 10:
            myLabelText = "Whoa!\nThat click was " + numberSuffix(btnClickCount) + " time!";
            myButtonText = "Click again?";
            break;
        case btnClickCount < 15:
            myLabelText = "Feel tired?\nYou can rest your finger now :)";
            myButtonText = "I'm not tired!";
            break;
        default:
            myLabelText = "Isn't it good?\nEvery clicks count, you've clicked " + numberSuffix(btnClickCount) + " time!";
            myButtonText = "Click again?";
            break;
    }

    // Access lbl & btnNext of page1
    this.children.lbl.text = myLabelText;
    this.children.flexlayout.children.btn.text = myButtonText;
}

// Adds appropriate suffix to given number
function numberSuffix(number) {
    var suffix = "th";

    //Lets deal with small numbers
    var smallNumber = number % 100;

    if (smallNumber < 11 || smallNumber > 13) {
        switch (smallNumber % 10) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
        }
    }
    return number + suffix;
}

module && (module.exports = Page1);
