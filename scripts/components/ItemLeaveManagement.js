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
	}
	
);

module && (module.exports = ItemLeaveManagement_);

