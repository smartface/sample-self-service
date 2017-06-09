const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const DotIndicator = require("components/DotIndicator");
const FlexLayout = require("sf-core/ui/flexlayout");
const Page = require("sf-core/ui/page");
const SwipeView = require("sf-core/ui/swipeview");
const System = require("sf-core/device/system");
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const HRIndex = extend(Page)(
    function(_super, params) {
        _super(this, params);
        
        if (!this.childPages) this.childPages = [];
        
        var _superOnLoad = this.onLoad;
        this.onLoad = function() {
            typeof _superOnLoad === "function" && _superOnLoad();
            const pageStyle = getCombinedStyle(".page");
	        Object.assign(this.layout, pageStyle);
        }.bind(this);
        
        var _superOnShow = this.onShow;
        this.onShow = function() {
            typeof _superOnShow === "function" && _superOnShow();
            this.headerBar.visible = false;
            this.statusBar.android.color = Color.create("#45495A");
        }.bind(this);

        initSwipeView(this);
        initDotIndicator(this);
    }
);

function initSwipeView(page) {
    page.swipeView = new SwipeView({
        page: page,
        positionType: FlexLayout.PositionType.ABSOLUTE,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        pages: page.childPages,
        onPageSelected: onChildPageChanged.bind(page)
    });
    page.layout.addChild(page.swipeView);
}

function initDotIndicator(page) {
    page.dotIndicator = new DotIndicator();
    page.dotIndicator.size = page.childPages.length;
    page.dotIndicator.top = 60; //System.OS === "Android" ? 40 : 60;
    page.dotIndicator.alignSelf = FlexLayout.AlignSelf.CENTER;
    page.dotIndicator.positionType = FlexLayout.PositionType.ABSOLUTE;
    page.layout.addChild(page.dotIndicator);
}

function onChildPageChanged(index) {
    this.dotIndicator.currentIndex = index;
}

module.exports = HRIndex;