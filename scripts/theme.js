const Application = require("sf-core/application");
const Data = require('sf-core/data');
const createThemeContextBound = require("@smartface/contx/lib/styling/ThemeContext").createThemeContextBound;
const config = require("./settings.json").config;
const themeConfig = config.theme;

const deviceCurrentTheme = Data.getStringVariable("theme");
var projectCurrentTheme = themeConfig.currentTheme;

if (deviceCurrentTheme === null || !themeConfig.themes.find( theme => deviceCurrentTheme === theme) ){
    Data.setStringVariable("theme", projectCurrentTheme);
}else{
    projectCurrentTheme = deviceCurrentTheme;
}

const themeSources = [];

themeConfig.themes.forEach(function(name){
    themeSources.push({name: name, rawStyles: require("./themes/"+name), isDefault: projectCurrentTheme === name});
});

Application.theme = createThemeContextBound(themeSources);
