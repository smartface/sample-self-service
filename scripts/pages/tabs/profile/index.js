const extend = require("js-base/core/extend");
const PageContainer = require("components/PageContainer");

const ProfileIndex = extend(PageContainer)(
    function(_super, params) {
        this.childPages = [
                require("./pgOverview"),
                require("./pgSalary"),
                require("./pgEmploymentHistory"),
                require("./pgPerformance"),
                require("./pgHierarchy")
            ];
        _super(this, params);
    }
);

module.exports = ProfileIndex;