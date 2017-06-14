/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemLeaveManagement = require('library/ItemLeaveManagement');
const FlexLayout = require('sf-core/ui/flexlayout');

const ItemLeaveManagement_ = extend(ItemLeaveManagement)(
	//constructor
	function(_super, props, pageName){
		delete ItemLeaveManagement.defaults.width 
		_super(this, props || ItemLeaveManagement.defaults );
		this.pageName = pageName;
		
		this.startDate.title.text = lang["pgLeaveManagement.startDate"];
		this.endDate.title.text = lang["pgLeaveManagement.endDate"];
		this.approveLabel.text = lang["pgLeaveManagement.approve"];
		this.editLabel.text = lang["pgLeaveManagement.edit"];
		this.deleteLabel.text = lang["pgLeaveManagement.delete"];
		
		var request;
		Object.defineProperty(this, 'request', {
			get: function() {
				return request;
			},
			set: function(value) {
				request = value;
				invalidate(this);
			}
		})
	}
);

function invalidate(item) {
	item.startDate.value.text = item.request.startDate;
	item.endDate.value.text = item.request.endDate;
	item.daysCount.text = item.request.days;
}

module && (module.exports = ItemLeaveManagement_);

