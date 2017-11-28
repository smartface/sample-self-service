const Application = require("sf-core/application");

const config = require("./settings.json").config;
const themeConfig = config.theme;

const createThemeContextBound = require("@smartface/contx/lib/styling/ThemeContext").createThemeContextBound;
const themeSources = [];

themeConfig.themes.forEach(function(name){
    themeSources.push({name: name, rawStyles: require("./themes/"+name), isDefault: themeConfig.currentTheme === name});
});

Application.theme = createThemeContextBound(themeSources);
