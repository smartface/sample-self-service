/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemSalaryDesign = require('library/ItemSalary');
const Salary = require("../objects/Salary")

const ItemSalary = extend(ItemSalaryDesign)(
	//constructor
	function(_super, props, pageName){
		delete ItemSalaryDesign.defaults.width;
		_super(this, props || ItemSalaryDesign.defaults);
		this.pageName = pageName;
		this.containerBasic.title.text = lang["pgSalary.basic"];
		this.containerProposal.title.text = lang["pgSalary.proposalReason"];
		
		var _salary;
		
		Object.defineProperties(this, {
			'salary': {
				get: function() {
					return _salary;
				},
				set: function(value) {
					_salary = value;
					invalidate(this);
				}
			}
		});
	}
);

function invalidate(item) {
	item.month.text 					= item.salary.month;
	item.year.text						= item.year.text;
	item.containerBasic.value.text		= item.salary.basic;
	item.containerProposal.value.text	= item.salary.proposalReason;
}

module && (module.exports = ItemSalary);

