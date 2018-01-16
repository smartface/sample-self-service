/*globals lang*/
const extend = require('js-base/core/extend');
const ListViewItem = require('sf-core/ui/listviewitem');
const salary = require('../../../model/salary');
const ItemSalary = require('../../../components/ItemSalary');
const PageDesign = require("../../../ui/ui_pgSalary");
const DialogsLib = require("lib/ui/dialogs");
var loadingIndicator = DialogsLib.createLoadingDialog();
const color2Hex = require("../../../lib/color2Hex");
const JET = require('sf-extension-oracle-jet');
const addChild = require("@smartface/contx/lib/smartface/action/addChild");
const removeChildren = require("@smartface/contx/lib/smartface/action/removeChildren");
const createSFCoreProp = require("@smartface/contx/lib/smartface/sfCorePropFactory").createSFCoreProp;

const Page_ = extend(PageDesign)(
    function(_super) {
        _super(this);
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        // Don't change array object, you may alter it
        this.salaryList = [];
        initListView(this.listView, this.salaryList);
    }
);

var firstOnShow = true;

function onShow(parentOnShow) {
    parentOnShow();

    if (firstOnShow) {
        DialogsLib.startLoading(loadingIndicator, this.listViewContainer);
        salary.getSalaryList(function(err, salaryList) {
            if (err)
                return alert("getSalaryList error"); //TODO: lang
            this.salaryList.slice(0);
            var series = [];
            salaryList.forEach((item) => {
                series.push(item.basic);
            });
            Array.prototype.push.apply(this.salaryList, salaryList);
            this.listView.itemCount = this.salaryList.length;
            this.listView.refreshData();
            DialogsLib.endLoading(loadingIndicator, this.listViewContainer);
            loadChart.call(this, series);
        }.bind(this));
        firstOnShow = false;
    }
}

function onLoad(parentOnLoad) {
    parentOnLoad();
    this.layoutHeaderBar.headerBarTitle.text = lang["pgSalary.pageTitle"];
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
            items: series
        }],
        groups: [{ name: lang.jan, labelStyle: "color:#FFFFFF;" },
            { name: lang.feb, labelStyle: "color:#FFFFFF;" },
            { name: lang.mar, labelStyle: "color:#FFFFFF;" }
            // { name: lang.apr, labelStyle: "color:#FFFFFF;" }
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

    page.dispatch(addChild("jetChart", {
            subscribeContext: function(e) {
                //console.log("RAWSTYLES" + JSON.stringify(e));
                if (e.rawStyle.backgroundColor) {
                    var backgroundColor = color2Hex.getRGB(createSFCoreProp("backgroundColor", e.rawStyle.backgroundColor));
                    //console.log("JET_BACKGROUND" + backgroundColor);
                    jet.legend.rendered = false;
                    jet.jetData.backgroundColor = backgroundColor;
                    jet.series[0].color = e.rawStyle.color;
                    jet.refresh();
                }
            }
        },
        ".flexLayout .flexLayout-headerBar .jet-series"
    ));
}

function initListView(listView, data) {
    listView.itemCount = 0;
    listView.rowHeight = 80;
    listView.refreshEnabled = false;
    var itemIndex = 0;

    listView.onRowCreate = function() {
        var myListViewItem = new ListViewItem();
        var salaryItem = new ItemSalary();
        salaryItem.id = 200;
        this.dispatch(addChild("item" + (++itemIndex), myListViewItem));
        myListViewItem.addChild(salaryItem, "child", "", function(style){
            style.width = null;
            return style;
        });
        return myListViewItem;
    };

    listView.onRowBind = function(listViewItem, index) {
        var salaryItem = listViewItem.findChildById(200);
        salaryItem.salary = data[index];
    };
}

module && (module.exports = Page_);
