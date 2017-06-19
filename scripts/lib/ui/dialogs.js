const FlexLayout = require("sf-core/ui/flexlayout");
const ActivityIndicator = require("sf-core/ui/activityindicator");
const Color = require("sf-core/ui/color");
const Label = require("sf-core/ui/label");
const Dialog = require("sf-core/ui/dialog");
const TextAlignment = require("sf-core/ui/textalignment");

var myActivityIndicator = new ActivityIndicator({
    ios:{
       type : ActivityIndicator.iOS.Type.WHITE
    }
});

var info = new Label({
    text: "Selam",
    textColor: Color.WHITE,
    alignSelf: FlexLayout.AlignSelf.STRETCH,
    textAlignment: TextAlignment.MIDCENTER,
    marginTop: 10
});

var myDialog = new Dialog();
myDialog.layout.alignItems = FlexLayout.AlignItems.CENTER;
myDialog.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
myDialog.layout.addChild(myActivityIndicator);
myDialog.layout.addChild(info);
myDialog.layout.applyLayout();

module.exports = {
    createLoadingDialog: function() {
        var activityIndicator = new ActivityIndicator({
            positionType: FlexLayout.PositionType.ABSOLUTE,
            alignSelf: FlexLayout.AlignSelf.CENTER,
            ios: {
                type: ActivityIndicator.iOS.Type.GRAY
            }
        });
        return activityIndicator;
    },
    startLoading: function(indicator, layout) {
        if (indicator && layout) {
            layout.addChild(indicator);
        }
    },
    endLoading: function(indicator, layout) {
        if (indicator && layout) {
            layout.removeChild(indicator);
        }
    },
    showLoadingDialog: function(text) {
        info.text = text ? text.toString() : "";
        myDialog.show();
    },
    updateLoadingDialog: function(text) {
        info.text = text ? text.toString() : "";
    },
    hideLoadingDialog: function() {
        myDialog.hide();
    }
}