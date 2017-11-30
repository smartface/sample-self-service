const Application = require("sf-core/application");
const Data = require('sf-core/data');
const config = require("./settings.json").config;
const themeConfig = config.theme;
const currentTheme = Data.getStringVariable("theme") || themeConfig.currentTheme;
const createThemeContextBound = require("@smartface/contx/lib/styling/ThemeContext").createThemeContextBound;
const themeSources = [];

if (Data.getStringVariable("theme") == null)
    Data.setStringVariable("theme", themeConfig.currentTheme);
    
themeConfig.themes.forEach(function(name){
    themeSources.push({name: name, rawStyles: require("./themes/"+name), isDefault: currentTheme === name});
});

Application.theme = createThemeContextBound(themeSources);
