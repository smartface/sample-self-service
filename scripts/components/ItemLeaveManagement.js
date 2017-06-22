/*global lang*/
const extend = require('js-base/core/extend');
const Color = require("sf-core/ui/color");
const ItemLeaveManagement = require('library/ItemLeaveManagement');
const FlexLayout = require('sf-core/ui/flexlayout');
const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const ApproveLabelActiveStyle = getCombinedStyle(".label-leaveRequestListItem-approve-active");
const ApproveLabelInactiveStyle = getCombinedStyle(".label-leaveRequestListItem-approve-inactive");
const EditLabelActiveStyle = getCombinedStyle(".label-leaveRequestListItem-edit-active");
const EditLabelInactiveStyle = getCombinedStyle(".label-leaveRequestListItem-edit-inactive");
const DeleteLabelActiveStyle = getCombinedStyle(".label-leaveRequestListItem-delete-active");

const ApproveIconActiveStyle = getCombinedStyle(".imageView-leaveRequestListItem-approve-active");
const ApproveIconInactiveStyle = getCombinedStyle(".imageView-leaveRequestListItem-approve-inactive");
const EditIconActiveStyle = getCombinedStyle(".imageView-leaveRequestListItem-edit-active");
const EditIconInactiveStyle = getCombinedStyle(".imageView-leaveRequestListItem-edit-inactive");
const DeleteIconActiveStyle = getCombinedStyle(".imageView-leaveRequestListItem-delete-active");

const ItemLeaveManagement_ = extend(ItemLeaveManagement)(
	//constructor
	function(_super, props, pageName){
		delete ItemLeaveManagement.defaults.width; 
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
		});
	}
);

function invalidate(item) {
	item.startDate.value.text = item.request.startDate;
	item.endDate.value.text = item.request.endDate;
	item.daysCount.text = item.request.days;
	
	var functions = [setApproved, setPending, setRejected];
	var statuses = ["approved", "pending", "rejected"];
	var index = statuses.indexOf(item.request.status);
	index !== -1 && functions[index].call(item);
	
	function setApproved() {
		Object.assign(this.approveLabel, ApproveLabelActiveStyle);
		Object.assign(this.approveIcon, ApproveIconActiveStyle);
		Object.assign(this.editLabel, EditLabelInactiveStyle);
		Object.assign(this.editIcon, EditIconInactiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
	
	function setPending() {
		Object.assign(this.approveLabel, ApproveLabelInactiveStyle);
		Object.assign(this.approveIcon, ApproveIconInactiveStyle);
		Object.assign(this.editLabel, EditLabelActiveStyle);
		Object.assign(this.editIcon, EditIconActiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
	
	function setRejected() {
		Object.assign(this.approveLabel, ApproveLabelInactiveStyle);
		Object.assign(this.approveIcon, ApproveIconInactiveStyle);
		Object.assign(this.editLabel, EditLabelInactiveStyle);
		Object.assign(this.editIcon, EditIconInactiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
}

module && (module.exports = ItemLeaveManagement_);

