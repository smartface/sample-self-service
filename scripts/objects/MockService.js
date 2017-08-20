var Salary;
var Employment;
var Image;
if (typeof window === "undefined" && typeof process === "undefined") {
    Salary = require("./Salary");
    Employment = require("./Employment");
    Image = require("sf-core/ui/image");
}
else {
    Salary = function Salary() {
        this.basic = "";
        this.proposalReason = "";
        this.month = "";
        this.year = "";
    };
    Employment = function Employment() {
        this.jobTitle = "";
        this.payroll = "";
        this.manager = "";
        this.grade = "";
        this.startDate = "";
        this.endDate = "";
    };
    Image = function Image() {};
    if (typeof window !== "undefined") {
        Image.createFromFile = function createFromFile() {
            return new Image();
        };
        var module = module || {
            exports: {}
        };
        var exports = exports || module.exports;
    } else {
        var base64Img = require('base64-img');
        var fs = require("fs");
        var reFileName = /images:\/\/([a-z0-9_]+)(\.png)/;
        var basePath = "/home/ubuntu/workspace/images/iOS/";
        Image.createFromFile = function createFromFile(fileURL) {
            reFileName.lastIndex = 0;
            var result = reFileName.exec(fileURL);
            if(!result)
                throw Error("FileURL does not match");
            var fileName = result[1];
            var extension = result[2];
            var filePath = basePath + fileName + "@3x" + extension;
            if(!fs.existsSync(filePath)) {
                filePath = basePath + fileName + "@2x" + extension;
                if(!fs.existsSync(filePath)) {
                    filePath = basePath + fileName + extension;
                    if(!fs.existsSync(filePath)) {
                        console.error (fileURL);
                        throw Error("File does not exists");
                    }
                }
            }
            return base64Img.base64Sync(filePath);
            
        };
    }
}

var MockService = {};

MockService.getSalaryList = function() {
    var list = [];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    // for (var i = mS.length; i--; ) {
    //     var salary = new Salary();
    //     salary.basic = i*1000;
    //     salary.proposalReason = "Performance";
    //     salary.year = 2017;
    //     salary.month = mS[i];
    //     list.push(salary)
    // }
    for (var i = 0; i < 3; i++) {
        var salary = new Salary();
        salary.basic = (parseInt((i / 2)) + 1) * 1000;
        salary.proposalReason = "Performance";
        salary.year = 2017;
        salary.month = mS[i];
        list.push(salary)
    }
    return list;
}

MockService.getEmploymentHistory = function() {
    var list = [];
    var companies = ["SPECIALIST", "MANAGER", "DIRECTOR"];
    var jobTitleList = ['Director of Sales & Marketing', "VP of Sales", "Project Coordinator"];
    var people = ["Adam Stewart", "Anna Wolker", "Bath County"];
    var startDate = ["03.02.2016", "07.08.2010", "05.06.2004"];
    var endDate = ["03.02.2017", "07.08.2015", "05.06.2009"];
    for (var i = 0; i < jobTitleList.length; i++) {
        var employment = new Employment();
        employment.companyName = companies[i];
        employment.jobTitle = jobTitleList[i];
        employment.payroll = 6000 - i * 1000;
        employment.manager = people[i];
        employment.grade = 7 - i;
        employment.startDate = startDate[i];
        employment.endDate = endDate[i];
        list.push(employment)
    }
    return list;
}

MockService.getPerformanceReviews = function() {
    var dates = [{
        reviewDate: "31.01.2017",
        nextReview: "28.02.2017"
    }, {
        reviewDate: "28.02.2017",
        nextReview: "31.03.2017"
    }, {
        reviewDate: "31.03.2017",
        nextReview: "30.04.2017"
    }];
    var ratings = ["2,5", "2,5", "5,0"];
    var overallScores = ["2,5", "2,5", "3,33"];

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

    var upcomingBirth = [
        "May 16",
        "May 23",
        "May 30",
        "Jun 4",
        "Jun 7",
        "Jun 11"
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
            image: images[i],
            birth: upcomingBirth[i]
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

var approvedLeaveRequests = [{
    days: 3,
    startDate: "11.05.2017",
    endDate: "14.05.2017",
    active: true,
    status: "approved"
}, {
    days: 5,
    startDate: "20.02.2017",
    endDate: "25.02.2017",
    active: false,
    status: "approved"
}];
MockService.getApprovedLeaveRequests = function() {
    return approvedLeaveRequests;
};

MockService.deleteApprovedLeaveRequest = function(request) {
    if (approvedLeaveRequests.indexOf(request) !== -1) {
        approvedLeaveRequests.splice(approvedLeaveRequests.indexOf(request), 1);
    }
};

var waitingLeaveRequests = [{
    days: 2,
    startDate: "13.07.2017",
    endDate: "15.07.2017",
    active: true,
    status: "pending"
}, {
    days: 3,
    startDate: "20.02.2017",
    endDate: "23.02.2017",
    active: true,
    status: "pending"
}, {
    days: 1,
    startDate: "02.01.2018",
    endDate: "03.01.2018",
    active: true,
    status: "pending"
}];
MockService.getWaitingLeaveRequests = function() {
    return waitingLeaveRequests;
};

MockService.deleteWaitingLeaveRequest = function(request) {
    if (waitingLeaveRequests.indexOf(request) !== -1) {
        waitingLeaveRequests.splice(waitingLeaveRequests.indexOf(request), 1);
    }
};

var rejectedLeaveRequests = [{
    days: 7,
    startDate: "10.03.2017",
    endDate: "17.03.2017",
    active: true,
    status: "rejected"
}];

MockService.getRejectedLeaveRequests = function() {
    return rejectedLeaveRequests;
};

MockService.deleteRejectedLeaveRequest = function(request) {
    if (rejectedLeaveRequests.indexOf(request) !== -1) {
        rejectedLeaveRequests.splice(rejectedLeaveRequests.indexOf(request), 1);
    }
};

MockService.getPendingLeaveApprovals = function() {
    var result = [{
        name: "Adam Stewart",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 10 days requested",
        approvedDate: "1 day ago",
        image: Image.createFromFile("images://avatar1.png"),
        isApproved: false
    }, {
        name: "Anna Wolker",
        position: "Sales Responsible",
        description: "Sick Leave, 2 days requested",
        approvedDate: "3 day ago",
        image: Image.createFromFile("images://avatar2.png"),
        isApproved: false
    }, {
        name: "Anthony Bell",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 4 days requested",
        approvedDate: "1 mn ago",
        image: Image.createFromFile("images://myavatar.png"),
        isApproved: false
    }];
    return result;
};

MockService.getApprovedLeaveApprovals = function() {
    var result = [{
        name: "Adam Stewart",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 10 days approved",
        approvedDate: "1 day ago",
        image: Image.createFromFile("images://avatar1.png"),
        isApproved: true
    }, {
        name: "Anna Wolker",
        position: "Sales Responsible",
        description: "Sick Leave, 2 days approved",
        approvedDate: "3 day ago",
        image: Image.createFromFile("images://avatar2.png"),
        isApproved: true
    }, {
        name: "Anthony Bell",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 4 days approved",
        approvedDate: "1 mn ago",
        image: Image.createFromFile("images://myavatar.png"),
        isApproved: true
    }];
    return result;
};

MockService.getPendingExpenseApprovals = function() {
    var result = [{
        name: "Adam Stewart",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 10 days requested",
        approvedDate: "1 day ago",
        image: Image.createFromFile("images://avatar1.png"),
        isApproved: false
    }, {
        name: "Anna Wolker",
        position: "Sales Responsible",
        description: "Sick Leave, 2 days requested",
        approvedDate: "3 day ago",
        image: Image.createFromFile("images://avatar2.png"),
        isApproved: false
    }, {
        name: "Anthony Bell",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 4 days requested",
        approvedDate: "1 mn ago",
        image: Image.createFromFile("images://myavatar.png"),
        isApproved: false
    }];
    return result;
};

MockService.getApprovedExpenseApprovals = function() {
    var result = [{
        name: "Adam Stewart",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 10 days approved",
        approvedDate: "1 day ago",
        image: Image.createFromFile("images://avatar1.png"),
        isApproved: true
    }, {
        name: "Anna Wolker",
        position: "Sales Responsible",
        description: "Sick Leave, 2 days approved",
        approvedDate: "3 day ago",
        image: Image.createFromFile("images://avatar2.png"),
        isApproved: true
    }, {
        name: "Anthony Bell",
        position: "Manager of Sales and Marketing",
        description: "Personal Leave, 4 days approved",
        approvedDate: "1 mn ago",
        image: Image.createFromFile("images://myavatar.png"),
        isApproved: true
    }];
    return result;
};

MockService.getAnnouncements = function() {
    var result = [{
        date: "10.07.2017",
        image: Image.createFromFile("images://smartface.png"),
        title: "New Self-Service App",
        message: "We are happy to announce the release of our new Employee Self-Service App. Now you can access all HR processes from your mobile device."
    }, {
        date: "24.06.2017",
        image: Image.createFromFile("images://smartface.png"),
        title: "Happy Holidays",
        message: "We wish everyone happy holidays. We hope you have a wonderful time with your loved ones."
    }, {
        date: "01.04.2017",
        image: Image.createFromFile("images://smartface.png"),
        title: "A Successful Quarter",
        message: "This quarter, we exceeded our sales targets and I would like to thank you all for your hard work."
    }];
    return result;
}

MockService.getCompanyDocuments = function() {
    var result = [{
        title: "ID",
        condition: "accepted"
    }, {
        title: "Passport",
        condition: "rejected"
    }, {
        title: "Visa",
        condition: "upload"
    }, {
        title: "Certificate",
        condition: "accepted"
    }];
    return result;
};

module.exports = MockService;
