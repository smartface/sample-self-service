exports.findPage = function(pageName, callback) {

 var profile = ['overview', 'salary', 'employmenthistory', 'performance', 'profiledetail', 'profile'];
 var hr = ['leavemanagement', 'expensemanagement', 'outofoffice', 'leaveapprovals', 'expenseapprovals', 'hr'];
 var myCompany = ['announcement', 'employeedirectory', 'thismonthsbirthdays', 'meetingroomreservations', 'companydocuments', 'myCompany'];
 var settings = ['settings'];

 var allPages = [profile, hr, myCompany, settings];

 for (let i = 0; i < allPages.length; i++) {

  var foundPageIndex = allPages[i].findIndex(function(value) {
   return value === pageName;

  });

  if (foundPageIndex !== -1) {

   var foundTab = allPages[i];
   var foundTabLength = foundTab.length - 1;
   var tabName = foundTab[foundTabLength];
console.log("tabName"+tabName)

   callback(tabName, foundPageIndex);
  }

 }
}
