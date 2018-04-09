/*globals lang*/
const extend = require("js-base/core/extend");
const Data = require("sf-core/data");
const Image = require("sf-core/ui/image");
const PageDesign = require("../../../ui/ui_pgMeetingRoomReservations");

const Page_ = extend(PageDesign)(
    // Constructor
    function(_super, params) {
        // Initalizes super class for this page scope
        _super(this, params);

        var _superOnLoad = this.onLoad;
        this.onShow = onShow.bind(this, this.onShow.bind(this));

        this.onLoad = function() {
            typeof _superOnLoad === "function" && _superOnLoad();

            this.layoutHeaderBar.headerBarTitle.text = lang["pgMeetingRoomReservations.pageTitle"];
            if (Data.getStringVariable("theme") === "Style1") {
                this.comingSoon.image = Image.createFromFile("images://coming_soon.png");
            }
            else if (Data.getStringVariable("theme") === "Style2") {
                this.comingSoon.image = Image.createFromFile("images://coming_soon_style2.png");
            }
        }.bind(this);
    }
);

function onShow(parentOnShow) {
    parentOnShow();
    swipeViewIndex.currentIndex = 3;
}

module && (module.exports = Page_);
