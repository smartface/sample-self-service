const Application = require("sf-core/application");

const config = require("./settings.json").config;
const themeConfig = config.theme;
const Data = require('sf-core/data');

var currentTheme = Data.getStringVariable("theme");
	console.log(" " + currentTheme);

const createThemeContextBound = require("@smartface/contx/lib/styling/ThemeContext").createThemeContextBound;
const themeSources = [];

themeConfig.themes.forEach(function(name) {
    themeSources.push({ name: name, rawStyles: require("./themes/" + name), isDefault: themeConfig.currentTheme === name });
});
Data.setStringVariable("theme", themeConfig.currentTheme);

Application.theme = createThemeContextBound(themeSources);
