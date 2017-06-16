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
    showLoadingDialog: function() {
        myDialog.show();
    },
    hideLoadingDialog: function() {
        myDialog.hide();
    }
}