require("./theme");



const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

require("./globalValues");

require("./theme");
require("./router");
require("sf-extension-utils");
