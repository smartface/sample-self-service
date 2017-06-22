const Salary = require("./Salary")
const Employment = require("./Employment")
const moment = require("moment");
const Image = require("sf-core/ui/image");

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
    var companies = ["COMPANY 1", "COMPANY 2", "COMPANY 3"];
    var jobTitleList = ['Director of Sales & Marketing', "VP of Sales", "Project Coordinator"];
    var people = ["Adam Stewart", "Anna Wolker", "Bath County"];
    var startDate = ["03.02.2016", "07.08.2010", "05.06.2004"];
    var endDate = ["03.02.2017", "07.08.2015", "05.06.2009"];
    for (var i = 0; i<jobTitleList.length;i++ ) {
        var employment = new Employment();
        employment.companyName = companies[i];
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

MockService.getPerformanceReviews = function()
{
    var dates = [];
    for (var i = 0; i < 6; ++i) {
        dates[i] = {
            reviewDate: moment().subtract(i+1, 'month').format("DD.MM.YYYY"),
            nextReview: moment().subtract(i, 'month').format("DD.MM.YYYY")
        };
    }
    var ratings = ["4,5", "4", "4,7", "3,6", "3,8", "4,0"];
    var overallScores = ["", "", "", "", "", ""];
    
    var result = [];
    for (var i = 0; i < ratings.length; ++i) {
        result.push({
            reviewDate: dates[i].reviewDate,
            nextReview: dates[i].nextReview,
            rating: ratings[i],
            overallScore: overallScores[i]
        });
    }
    return result;
};

MockService.getUsers = function() {
    var usernames = ["Adam Stewart", "Anna Wolker", "Anthony Bell", "Bath County", "Belly Edwards", "Brett Morris"];
    var positions = [
        "Manager of Sales and Marketing",
        "Sales Responsible",
        "Director of Sales and Marketing",
        "Junior Developer",
        "Sales Responsible",
        "Director of Human Resources"
    ];
    var images = [
        Image.createFromFile("images://avatar1.png"),
        Image.createFromFile("images://avatar2.png"),
        Image.createFromFile("images://myavatar.png"),
        Image.createFromFile("images://avatar3.png"),
        Image.createFromFile("images://avatar4.png"),
        Image.createFromFile("images://avatar5.png")
    ];
    
    var users = [];
    for (var i = 0; i < usernames.length; ++i) {
        users.push({
            name: usernames[i],
            position: positions[i],
            image: images[i]
        });
    }
    return users;
};

MockService.getExpenses = function() {
    var types = ["Travel", "Taxi", "Food", "Taxi", "Travel", "Taxi"];
    var amounts = ["$230", "$20", "$88,50", "$20", "$450", "$520"];
    var ids = ["998230084535", "998230084536", "998230084537", "998230084538", "998230084539", "998230084540"];
    var dates = ["11.05.2017", "10.05.2017", "07.05.2017", "07.05.2017", "06.05.2017", "04.05.2017"];

    var result = [];
    for (var i = 0; i < types.length; ++i) {
        result.push({
            type: types[i],
            amount: amounts[i],
            id: ids[i],
            date: dates[i]
        });
    }
    return result;
};

MockService.getApprovedLeaveRequests = function() {
    var result = [
        {
            days: 3,
            startDate: "11.05.2017",
            endDate: "14.05.2017",
            active: true,
            status: "approved"
        },
        {
            days: 5,
            startDate: "20.02.2017",
            endDate: "25.02.2017",
            active: false,
            status: "approved"
        }
    ];
    
    return result;
};

MockService.getWaitingLeaveRequests = function() {
    var result = [
        {
            days: 2,
            startDate: "13.07.2017",
            endDate: "15.07.2017",
            active: true,
            status: "pending"
        },
        {
            days: 3,
            startDate: "20.09.2017",
            endDate: "23.02.2017",
            active: true,
            status: "pending"
        },
        {
            days: 1,
            startDate: "02.01.2018",
            endDate: "03.01.2018",
            active: true,
            status: "pending"
        }
    ];
    
    return result;
};

MockService.getRejectedLeaveRequests = function() {
    var result = [
        {
            days: 7,
            startDate: "10.03.2017",
            endDate: "17.03.2017",
            active: true,
            status: "rejected"
        }
    ];
    
    return result;
};

module.exports = MockService;