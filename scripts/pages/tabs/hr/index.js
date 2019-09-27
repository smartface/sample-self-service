const extend = require("js-base/core/extend");
const PageContainer = require("components/PageContainer");

const HRIndex = extend(PageContainer)(
    function(_super, params) {
        this.childPages = [
                require("./pgLeaveManagement"),
                // require("./pgExpenseManagement"),
                require("./pgOutOfOffice"),
                require("./pgLeaveApprovals"),
                require("./pgExpenseApprovals")
            ];
        _super(this, params);
    }
);

module.exports = HRIndex;