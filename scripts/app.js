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

const Router = require("sf-core/ui/router");
const Navigator = require("sf-core/ui/navigator");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
const Data = require('sf-core/data');

stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
if (Data.getStringVariable("theme") == null)
    Data.setStringVariable("theme", settings.config.theme.currentTheme);

stylerBuilder.setActiveTheme(Data.getStringVariable("theme") || settings.config.theme.currentTheme);

var navigator = new Navigator();
navigator.add("pgLogin", require("./pages/login/pgLogin"));
const loader = require("./loader");
loader.load();

Router.add("login", navigator);
Router.go("login/pgLogin");