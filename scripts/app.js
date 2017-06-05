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
const stylerBuilder = require("library/styler-builder");
const settings = require("./.settings.json");
const PgConstants = require("pages/PgConstants");

stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);

// Define routes and go to initial page of application
Router.add(PgConstants.PAGE_EMPLOYMENT_HISTORY, require("./pages/tabs/profile/pgEmploymentHistory"));
Router.go(PgConstants.PAGE_EMPLOYMENT_HISTORY);
