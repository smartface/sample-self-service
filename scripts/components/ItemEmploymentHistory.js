/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemEmploymentHistory = require('library/ItemEmploymentHistory');

const ItemEmploymentHistory_ = extend(ItemEmploymentHistory)(
	//constructor
	function(_super, props, pageName){
		delete ItemEmploymentHistory.defaults.width
		_super(this, props || ItemEmploymentHistory.defaults );
		this.pageName = pageName;
		this.headertitle.text = lang["pgEmploymentHistory.companyName"];
		this.row1.title.text = lang["pgEmploymentHistory.jobTitle"];
		this.row2.title.text = lang["pgEmploymentHistory.payroll"];
		this.row3.title.text = lang["pgEmploymentHistory.manager"];
		this.row4.title.text = lang["pgEmploymentHistory.grade"];
		this.row5.title.text = lang["pgEmploymentHistory.startDate"];
		this.row6.title.text = lang["pgEmploymentHistory.endDate"];
		
		var _employment;
		
		Object.defineProperties(this, {
			'employment': {
				get: function() {
					return _employment;
				},
				set: function(value) {
					_employment = value;
					invalidate(this);
				}
			}
		});
	}
	
);

function invalidate(item)
{
	item.row1.value.text = item.employment.jobTitle;
	item.row2.value.text = item.employment.payroll;
	item.row3.value.text = item.employment.manager;
	item.row4.value.text = item.employment.grade;
	item.row5.value.text = item.employment.startDate;
	item.row6.value.text = item.employment.endDate;
}

module && (module.exports = ItemEmploymentHistory_);

