const extend = require("js-base/core/extend");
const DotIndicator = require("components/DotIndicator");
const FlexLayout = require("sf-core/ui/flexlayout");
const Page = require("sf-core/ui/page");
const SwipeView = require("sf-core/ui/swipeview");
const Timer = require("sf-core/timer");
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;
const statusbarStyle = getCombinedStyle(".statusBar");

const HRIndex = extend(Page)(
    function(_super, params) {
        _super(this, params);
        
        if (!this.childPages) this.childPages = [];
        
        var _superOnLoad = this.onLoad;
        this.onLoad = function() {
            typeof _superOnLoad === "function" && _superOnLoad();
            this.headerBar.visible = false;
            const pageStyle = getCombinedStyle(".page");
	        Object.assign(this.layout, pageStyle);
        }.bind(this);
        
        var _superOnShow = this.onShow;
        var shownBefore = false;
        this.onShow = function(user) {
            typeof _superOnShow === "function" && _superOnShow(user);
            this.headerBar.visible = false;
            
            if (statusbarStyle.color) {
                this.statusBar.android.color = statusbarStyle.color;
            }
            if (statusbarStyle.style) {
                this.statusBar.ios.style = statusbarStyle.style;
            }
            
            if (!shownBefore) {
                shownBefore = true;
                Timer.setTimeout({
                    task: function() {
                        if (this.loadingLayout) {
                            this.layout.removeChild(this.loadingLayout);
                        }
                        initSwipeView(this);
                        initDotIndicator(this);
                    }.bind(this),
                    delay: 400
                });
            }
            
        }.bind(this);
        
        if (this.loadingLayout) {
            this.layout.addChild(this.loadingLayout);
        }
    }
);

function initSwipeView(page) {
    page.swipeView = new SwipeView({
        page: page,
        flexGrow: 1,
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