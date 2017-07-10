/*global lang*/
const extend = require('js-base/core/extend');
const AlertView = require("sf-core/ui/alertview");
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

const MockService = require("../objects/MockService");

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
		
		this.approveLabel.onTouchEnded = approveCallback.bind(this);
		
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
		this.approveLabel.onTouchEnded = approveCallback.bind(item.request, item.updateCallback);
		this.editLabel.onTouchEnded = emptyCallback;
		this.deleteLabel.onTouchEnded = deleteCallback.bind(item.request, function() {
			MockService.deleteApprovedLeaveRequest(this);
			item.updateCallback();
		}.bind(item.request));
		Object.assign(this.approveLabel, ApproveLabelActiveStyle);
		Object.assign(this.approveIcon, ApproveIconActiveStyle);
		Object.assign(this.editLabel, EditLabelInactiveStyle);
		Object.assign(this.editIcon, EditIconInactiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
	
	function setPending() {
		this.approveLabel.onTouchEnded = emptyCallback;
		this.editLabel.onTouchEnded = editCallback.bind(item.request, item.updateCallback);
		this.deleteLabel.onTouchEnded = deleteCallback.bind(item.request, function() {
			MockService.deleteWaitingLeaveRequest(this);
			item.updateCallback();
		}.bind(item.request));
		Object.assign(this.approveLabel, ApproveLabelInactiveStyle);
		Object.assign(this.approveIcon, ApproveIconInactiveStyle);
		Object.assign(this.editLabel, EditLabelActiveStyle);
		Object.assign(this.editIcon, EditIconActiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
	
	function setRejected() {
		this.approveLabel.onTouchEnded = emptyCallback;
		this.editLabel.onTouchEnded = emptyCallback;
		this.deleteLabel.onTouchEnded = deleteCallback.bind(item.request, function() {
			MockService.deleteRejectedLeaveRequest(this);
			item.updateCallback();
		}.bind(item.request));
		Object.assign(this.approveLabel, ApproveLabelInactiveStyle);
		Object.assign(this.approveIcon, ApproveIconInactiveStyle);
		Object.assign(this.editLabel, EditLabelInactiveStyle);
		Object.assign(this.editIcon, EditIconInactiveStyle);
		Object.assign(this.deleteLabel, DeleteLabelActiveStyle);
		Object.assign(this.deleteIcon, DeleteIconActiveStyle);
	}
}

function emptyCallback() {}

function approveCallback(updateCallback) {
	var alertView = new AlertView({
	    title: lang["pgLeaveManagement.approve"],
	    message: "Do you want to save " + this.days + " days leave to your calendar?"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.NEGATIVE,
	    text: "No"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.POSITIVE,
	    text: "Yes"
	});
	alertView.show();
}

function editCallback(updateCallback) {
	var alertView = new AlertView({
	    title: lang["pgLeaveManagement.edit"],
	    message: "Do you want to edit " + this.days + " days leave?"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.NEGATIVE,
	    text: "No"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.POSITIVE,
	    text: "Yes"
	});
	alertView.show();
}

function deleteCallback(successCallback) {
	var alertView = new AlertView({
	    title: lang["pgLeaveManagement.delete"],
	    message: "Do you want to delete " + this.days + " days leave?"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.NEGATIVE,
	    text: "No"
	});
	alertView.addButton({
	    type: AlertView.Android.ButtonType.POSITIVE,
	    text: "Yes",
	    onClick: successCallback
	});
	alertView.show();
}

module && (module.exports = ItemLeaveManagement_);

