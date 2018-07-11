const extend = require('js-base/core/extend');
const ScrollView = require("sf-core/ui/scrollview");

const PageDesign = require("../../../ui/ui_pgOverview");


const Page_ = extend(PageDesign)(
	// Constructor
	function(_super, params) {
		// Initalizes super class for this page scope
		_super(this, params);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));


		initTexts.call(this);
	}
);

function onShow(parentOnShow) {
	parentOnShow();
	swipeViewIndex.currentIndex = 0;
}

function onLoad(superOnLoad) {
	superOnLoad();
	wrapContentIntoScroll.call(this);
}

function wrapContentIntoScroll() {
	this.scrollView = new ScrollView({
		flexGrow: 1
	});
	this.layout.removeChild(this.flexlayout500);
	this.scrollView.layout.addChild(this.flexlayout500);
	this.layout.addChild(this.scrollView);
}

function initTexts() {
	this.layoutHeaderBar.headerBarTitle.text = lang["pgOverview.pageTitle"];
	this.qualificationTitle.text = lang["pgOverview.qualification"];
	this.containerType.title.text = lang["pgOverview.type"];
	this.containerType.value.text = "Diploma"
	this.containerTitle.title.text = lang["pgOverview.title"];
	this.containerTitle.value.text = "Certificate Diploma in Office"
	this.containerAwardedDate.title.text = lang["pgOverview.awardedDate"];
	this.containerAwardedDate.value.text = "03 May 2017"
	this.salaryTitle.text = lang["pgOverview.salary"];
	this.containerBasic.title.text = lang["pgOverview.basic"];
	this.containerBasic.value.text = "$1500"
	this.containerVariable.title.text = lang["pgOverview.variable"];
	this.containerVariable.value.text = "$1000"
	this.objectiveContainer.title.text = lang["pgOverview.objective"];
	this.objectiveContainer.value.text = "-";
	this.dueDateContainer.title.text = lang["pgOverview.dueDate"];
	this.dueDateContainer.value.text = "-";
	this.resultContainer.title.text = lang["pgOverview.successPercentage"];
	this.resultContainer.value.text = "-";
}

module && (module.exports = Page_);
