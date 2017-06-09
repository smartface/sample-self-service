const Salary = require("./Salary")
const Employment = require("./Employment")
const MockService = {}

MockService.getSalaryList = function ()
{
    var list = [];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    for (var i = mS.length; i--; ) {
        var salary = new Salary();
        salary.basic = i*1000;
        salary.proposalReason = "Performance";
        salary.year = 2017;
        salary.month = mS[i];
        list.push(salary)
    }
    return list;
}

MockService.getEmploymentHistory = function ()
{
    var list = [];
    var jobTitleList = ['Director of Sales & Marketing', "VP of Sales", "Project Coordinator"];
    var people = ["Adam Stewart", "Anna Wolker", "Bath County"];
    var startDate = ["03.02.2016", "07.08.2010", "05.06.2004"];
    var endDate = ["03.02.2017", "07.08.2015", "05.06.2009"];
    for (var i = 0; i<jobTitleList.length;i++ ) {
        var employment = new Employment();
        employment.jobTitle = jobTitleList[i];
        employment.payroll = (i+1)*1000;
        employment.manager = 2017;
        employment.grade = (i+1)*2;
        employment.startDate = startDate[i];
        employment.endDate = endDate[i];
        list.push(employment)
    }
    return list;
}

module.exports = MockService;