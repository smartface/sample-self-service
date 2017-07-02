const extend = require("js-base/core/extend");
const Layouts = require("lib/ui/layouts");
const PageContainer = require("components/PageContainer");

const HRIndex = extend(PageContainer)(
    function(_super, params) {
        this.childPages = [
                require("./pgLeaveManagement"),
                require("./pgExpenseManagement"),
                require("./pgOutOfOffice")
            ];
        this.loadingLayout = Layouts.createLoadingLayout(292); 
        _super(this, params);
    }
);

module.exports = HRIndex;