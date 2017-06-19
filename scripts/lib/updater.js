const Application = require("sf-core/application");
const dialogs = require("./ui/dialogs");

module.exports = {
    checkUpdate: function() {
        dialogs.showLoadingDialog("Checking update...");
        Application.checkUpdate(function(err, result) {
            if (err) {
                dialogs.hideLoadingDialog();
            } else {
                if (result.meta) {
                    var isMandatory = (result.meta.isMandatory && result.meta.isMandatory === true) ? true : false;
                    var updateTitle = (result.meta.title) ? result.meta.title : 'A new update is ready!';
                    var updateMessage = "Version " + result.newVersion + " is ready to install.\n\n" +
                        "What's new?:\n" + JSON.stringify(result.meta.update) +
                        "\n\n"
                    updateMessage += (isMandatory) ? "This update is mandatory!" : "Do you want to update?";
                    function onFirstButtonPressed() {
                        if (result.meta.redirectURL && result.meta.redirectURL.length != 0) {
                            Application.call(result.meta.redirectURL);
                        }
                        else {
                            dialogs.updateLoadingDialog("Downloading update...");
                            result.download(function(err, result) {
                                if (err) {
                                    alert("Autoupdate download failed: " + err);
                                }
                                else {
                                    dialogs.updateLoadingDialog("Applying update...");
                                    result.updateAll(function(err) {
                                        if (err) {
                                            alert("Autoupdate update failed: " + err);
                                        }
                                        else {
                                            Application.restart();
                                        }
                                    });
                                }
                            });
                        }
                    }
                    //We will do nothing on cancel for the timebeing.
                    function onSecondButtonPressed() {
                        dialogs.hideLoadingDialog();
                    }
                    //if Update is mandatory we will show only Update now button.
                    if (isMandatory) {
                        alert({
                            title: updateTitle,
                            message: updateMessage,
                            firstButtonText: "Update now",
                            onFirstButtonPressed: onFirstButtonPressed
                        });
                    }
                    else {
                        alert({
                            title: updateTitle,
                            message: updateMessage,
                            firstButtonText: "Update now",
                            secondButtonText: "Later",
                            onFirstButtonPressed: onFirstButtonPressed,
                            onSecondButtonPressed: onSecondButtonPressed
                        });
                    }
                }
            }
        });
    }
}