const extend = require("js-base/core/extend");
const PageContainer = require("components/PageContainer");

const HRIndex = extend(PageContainer)(
    function(_super, params) {
        this.childPages = [
                require("./pgLeaveManagement"),
                require("./pgExpenseManagement")
            ];
        _super(this, params);
    }
);

module.exports = HRIndex;