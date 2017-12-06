
/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

require("./theme");

const Router = require("sf-core/ui/router");
const Navigator = require("sf-core/ui/navigator");

var navigator = new Navigator();
navigator.add("pgLogin", require("./pages/login/pgLogin"));
const loader = require("./loader");
loader.load();
Router.add("login", navigator);
Router.go("login/pgLogin");

// Router.add("page2", require("sf-extension-oracle-jet/samples/samplePage"));
// Router.add("page3", require("sf-extension-oracle-jet/samples/samplePageWithOfficalCharts"));
// Router.go("page2");
