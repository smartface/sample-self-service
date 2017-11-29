/* globals lang */
const extend = require('js-base/core/extend');
const performanceReviews = require('../../../model/performance-reviews');
const DialogsLib = require("lib/ui/dialogs");
const PageDesign = require("../../../ui/ui_pgPerformance");
const ListViewItem = require('sf-core/ui/listviewitem');
const ItemPerformance = require('../../../components/ItemPerformance');
const JET = require('sf-extension-oracle-jet');
const color2Hex = require("../../../lib/color2Hex");
var loadingIndicator = DialogsLib.createLoadingDialog();
const addChild = require("@smartface/contx/lib/smartface/action/addChild");

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        this.firstOnShow = true;
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        this.performanceList = [];
        initListView(this.listView, this.performanceList);
    }
);



function onShow(parentOnShow) {
    parentOnShow();
    if (this.firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        performanceReviews.getPerformanceReviews(function(err, performanceList) {
            if (err)
                return alert("getPerformanceReviews error"); //TODO: lang
            this.performanceList.slice(0);
            Array.prototype.push.apply(this.performanceList,
                performanceList);
            this.listView.itemCount = this.performanceList.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            var series =[];
            performanceList.forEach((item) => {
                series.push(item.overallScore);
            });
            loadChart.call(this, series);
        }.bind(this));
        this.firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    const page = this;
    page.layoutHeaderBar.headerBarTitle.text = lang["pgPerformance.pageTitle"];
}

function loadChart(series) {
    const page = this;
    var jet = new JET({
        jetPath: "assets://jet/",
        webView: page.wvChart
    });
    page.wvChart.bounceEnabled = false;
    Object.assign(jet, {
        series: [{
            name: lang.performance,
            items: series,
            color: "#2077CD"
        }],
        groups: [{ name: lang.jan, labelStyle: "color:#FFFFFF;" },
            { name: lang.feb, labelStyle: "color:#FFFFFF;" },
            { name: lang.mar, labelStyle: "color:#FFFFFF;" },
            { name: lang.apr, labelStyle: "color:#FFFFFF;" }
        ],
        type: JET.Type.LINE,
        orientation: JET.Orientation.VERTICAL,
        stack: JET.Stack.OFF,
        animationOnDisplay: JET.AnimationOnDisplay.AUTO,
        animationOnDataChange: JET.AnimationOnDataChange.AUTO,
        legend: {
            rendered: JET.LegendRendered.OFF
        },
        xAxis: {
            axisLine: {
                lineColor: "white"
            }
        },
        yAxis: {
            axisLine: {
                lineColor: "white"
            },
            tickLabel: {
                style: "color:white;",
                scaling: "none"
            }
        },
        preScript: `
        var converterFactory = oj.Validation.converterFactory('number');
        var percentConverter = converterFactory.createConverter({style: 'percent'});
        var yAxisConverter = ko.observable(percentConverter);
        items.observables.yAxisValue.tickLabel.converter = ko.toJS(yAxisConverter);
        items.observables.valueFormatsValue = {y: {converter: ko.toJS(yAxisConverter)}};
        `
    });
    page.dispatch(addChild("jetChart", 
    {
        constructor:{$$styleContext: {className: ".flexLayout .flexLayout-headerBar"}}, 
        subscribeContext: function(e){
            if(e.rawStyle.backgroundColor){
                var backgroundColor = color2Hex.getRGB(e.rawStyle.backgroundColor);
                jet.legend.rendered = false;
                jet.jetData.backgroundColor = backgroundColor;
                jet.refresh();        
            }
        }
    }));
}

function initListView(listView, data) {
    listView.rowHeight = 195;
    listView.itemCount = 0;
    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var item = new ItemPerformance();
        item.id = 200;
        myListViewItem.addChild(item);
        return myListViewItem;
    };

    listView.onRowBind = function(listviewItem, index) {
        var itemPerformance = listviewItem.findChildById(200);
        itemPerformance.performanceReview = data[index];
    };
    listView.onPullRefresh = function() {
        listView.stopRefresh();
    };
}

module && (module.exports = Page_);
