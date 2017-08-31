/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
    baseUrl: 'js',

    // Path mappings for the logical module names
    // Update the main-release-paths.json for release mode when updating the mappings
    paths:
    //injector:mainReleasePaths
    {
        'knockout': 'libs/knockout/knockout-3.4.0',
        'jquery': 'libs/jquery/jquery-3.1.1',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
        'promise': 'libs/es6-promise/es6-promise',
        'hammerjs': 'libs/hammer/hammer-2.0.8',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': 'libs/oj/v3.1.0/min',
        'ojL10n': 'libs/oj/v3.1.0/ojL10n',
        'ojtranslations': 'libs/oj/v3.1.0/resources',
        'text': 'libs/require/text',
        'signals': 'libs/js-signals/signals',
        'customElements': 'libs/webcomponents/CustomElements',
        'proj4': 'libs/proj4js/dist/proj4-src',
        'css': 'libs/require-css/css',
    }
    //endinjector
    ,
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    }
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
var drawChart;
(function() {
    drawChart = function(itemsString) {
        require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
            function(oj, ko, $) {
                function ChartModel(items) {
                    var self = this;
                    /* toggle button variables */
                    items.observables && Object.keys(items.observables).forEach(function(key) {
                        self[key] = ko.observable(items.observables[key]);
                    });


                    /* chart data */
                    Object.keys(items.observableArrays).forEach(function(key) {
                        self[key] = ko.observableArray(items.observableArrays[key]);
                    });

                    self.ojDestroy = function(event, data) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojDestroy",
                            data: data
                        }));
                        window.location = "jet://" + queryString;
                    };
                    self.ojDrill = function(event, data) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojDrill",
                            data: data
                        }));
                        window.location = "jet://" + queryString;
                    };
                    self.ojOptionChange = function(event, ui) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojOptionChange",
                            data: ui
                        }));
                        window.location = "jet://" + queryString;
                    };
                    self.ojSelectInput = function(event, data) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojSelectInput",
                            data: data
                        }));
                        window.location = "jet://" + queryString;
                    };
                    self.ojViewportChange = function(event, data) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojViewportChange",
                            data: data
                        }));
                        window.location = "jet://" + queryString;
                    };
                    self.ojViewportChangeInput = function(event, data) {
                        var queryString = encodeURIComponent(JSON.stringify({
                            event: "ojViewportChangeInput",
                            data: data
                        }));
                        window.location = "jet://" + queryString;
                    };
                }
                var items = JSON.parse(itemsString);
                items.preScript && eval(items.preScript);
                var chartModel = new ChartModel(items);

                $(function() {
                    
                    ko.applyBindings(chartModel, document.getElementById('chart-container'));
                    items.backgroundColor && $("#chart-container > div").css("backgroundColor", items.backgroundColor);
                    items.postScript && eval(items.postScript);
                });
            });
    };
}());
