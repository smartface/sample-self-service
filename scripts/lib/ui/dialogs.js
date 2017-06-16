const FlexLayout = require("sf-core/ui/flexlayout");
const ActivityIndicator = require("sf-core/ui/activityindicator");
const Color = require("sf-core/ui/color");
const Screen = require('sf-core/device/screen');
const Dialog = require("sf-core/ui/dialog");

var myActivityIndicator = new ActivityIndicator({
    ios:{
       type : ActivityIndicator.iOS.Type.WHITE
    }
});

var myDialog = new Dialog();
myDialog.layout.alignItems = FlexLayout.AlignItems.CENTER;
myDialog.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
myDialog.layout.addChild(myActivityIndicator);  
myDialog.layout.applyLayout();

module.exports = {
    createLoadingDialog: function() {
        var layout = new FlexLayout({
            positionType: FlexLayout.PositionType.ABSOLUTE,
            width: 150,
            height: 100,
            left: Screen.width/2 - 75,
            top: Screen.height/2 - 100,
            backgroundColor: Color.create(200, 0, 0, 0),
            borderRadius: 20,
            alignItems: FlexLayout.AlignItems.CENTER,
            justifyContent: FlexLayout.JustifyContent.CENTER
        });
        var activityIndicator = new ActivityIndicator({
            ios: {
                type: ActivityIndicator.iOS.Type.WHITELARGE
            }
        });
        layout.addChild(activityIndicator);
        return layout;
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
    showLoadingDialog: function() {
        myDialog.show();
    },
    hideLoadingDialog: function() {
        myDialog.hide();
    }
}