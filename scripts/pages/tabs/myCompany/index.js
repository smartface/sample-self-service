const extend = require("js-base/core/extend");
const Layouts = require("lib/ui/layouts");
const PageContainer = require("components/PageContainer");

const HRIndex = extend(PageContainer)(
    function(_super, params) {
        this.childPages = [
                require("./pgAnnouncement"),
                require("./pgEmployeeDirectory"),
                require("./pgThisMonthsBirthdays"),
                require("./pgMeetingRoomReservations"),
                require("./pgCompanyDocuments")
            ];
        this.loadingLayout = Layouts.createLoadingLayout(92); 
        _super(this, params);
    }
);

module.exports = HRIndex;