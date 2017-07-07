const Page      = require("sf-core/ui/page");
const System    = require('sf-core/device/system');
const Data      = require('sf-core/data');
const AlertView = require('sf-core/ui/alertview');


module.exports = {
    registerFingerPrint : function() {
        if(!System.fingerPrintAvailable) //Finger print is not available
        {
            return false;
        }else if(Data.getBooleanVariable("userRejectedFingerPrint") === true)// We asked to user and he/she rejected to use fingerprint
        {
            return false;
        }else if (Data.getBooleanVariable("userAllowedFingerPrint") === true)// User allowed fingerprint before
        {
            return true;
        }else{// user not allowed fingerprint before but want to allow. we will ask on confirmation popup
            var myAlertView = new AlertView({
            title: "Finger Print Access",
            message: "Do you want to use fingerprint for future sign in operations? "
                });
                myAlertView.addButton({
                    index: AlertView.ButtonType.NEGATIVE,
                    text: "Cancel",
                    onClick: function() {
                        Data.setBooleanVariable("userRejectedFingerPrint",true);
                        return false;
                    }
                });
                myAlertView.addButton({
                    index: AlertView.ButtonType.POSITIVE,
                    text: "Okay",
                    onClick: function() {
                        Data.setBooleanVariable("userAllowedFingerPrint",true);
                        System.validateFingerPrint({
                               android: {
                                   title: "Your Title"
                               },
                               message : "Validate your fingerprint",
                               onSuccess : function(){
                                     Data.setBooleanVariable("userRegisteredBefore",true);
                                     return true;
                               },
                               onError : function(){
                                     return false;
                               }
                         });
                        return true;
                    }
                });
        
                myAlertView.show();
        }
    },
    checkFingerPrint : function()
    {
        if (Data.getBooleanVariable("userAllowedFingerPrint") === true)
        {
            System.validateFingerPrint({
                       android: {
                           title: "Your Title"
                       },
                       message : "Validate your fingerprint",
                       onSuccess : function(){
                             return true;
                       },
                       onError : function(){
                             return false;
                       }
                 });
        }
        
    },
    userRegisteredBefore : function()
    {
        return (Data.getBooleanVariable("userRegisteredBefore") === true)
    }
}