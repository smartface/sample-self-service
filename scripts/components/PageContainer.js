/* globals swipeViewIndex */
const extend = require("js-base/core/extend");
const DotIndicator = require("components/DotIndicator");
const FlexLayout = require("sf-core/ui/flexlayout");
const Page = extend(require("sf-core/ui/page"));
const SwipeView = require("sf-core/ui/swipeview");
const System = require("sf-core/device/system");
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const Color = require('sf-core/ui/color');
const Screen = require('sf-core/device/screen');

var isIphoneX = (Screen.height === 812 && System.OS === 'iOS' ? true : false);

function HRIndexConstructor(_super, params) {
    _super(this, params);

    if (!this.childPages) this.childPages = [];
    this.children = {};

    this.children["statusBar"] = this.statusBar;
    this.children["headerBar"] = this.headerBar;
    pageContextPatch(this, "pageContainer");
    var _superOnLoad = this.onLoad;

    this.onLoad = function() {
        typeof _superOnLoad === "function" && _superOnLoad();
        this.headerBar.visible = false;
        this.ios.safeAreaLayoutMode = true;
        this.layout.backgroundColor = Color.create("#45495A");
        // if (System.OS === "iOS") {
        initSwipeView(this);
        initDotIndicator(this);
        // }
    }.bind(this);

    var _superOnShow = this.onShow;
    this.onShow = function(user) {
        typeof _superOnShow === "function" && _superOnShow(user);
        this.headerBar.visible = false;
        this.swipeView.swipeToIndex(swipeViewIndex.currentIndex, false);
    }.bind(this);


}

HRIndexConstructor.$$styleContext = {
    classNames: ".page",
    userProps: {},
    statusBar: {
        classNames: ".statusBar",
        userProps: {}
    },
    headerBar: {
        classNames: ".headerBar",
        userProps: {
            visible: false
        }
    }
};

const HRIndex = Page(HRIndexConstructor);

function initSwipeView(page) {
    page.swipeView = new SwipeView({
        page: page,
        flexGrow: 1,
        pages: page.childPages,
        onPageSelected: onChildPageChanged.bind(page)
    });

    page.layout.addChild(page.swipeView, "swipeview");
}

function initDotIndicator(page) {
    if (page.childPages.length !== 1) {
        page.dotIndicator = new DotIndicator();
        page.layout.addChild(page.dotIndicator, "dotIndicator", ".flexlayout", {
            height: 50,
            top: (isIphoneX ? 100 : 80),
            flexProps: {
                alignSelf: "CENTER",
                positionType: "ABSOLUTE"
            }
        });
        page.dotIndicator.size = page.childPages.length;
    }
    /*
    page.dotIndicator.top = 60; //System.OS === "Android" ? 40 : 60;
    page.dotIndicator.alignSelf = FlexLayout.AlignSelf.CENTER;
    page.dotIndicator.positionType = FlexLayout.PositionType.ABSOLUTE;
    */
}

function onChildPageChanged(index) {
    this.dotIndicator && (this.dotIndicator.currentIndex = index);
}

module.exports = HRIndex;
