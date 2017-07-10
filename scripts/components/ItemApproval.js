/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemApprovalDesign = require('library/ItemApproval');

const ItemApproval = extend(ItemApprovalDesign)(
	//constructor
	function(_super, props, pageName) {
		// initalizes super class for this scope
		_super(this, props || ItemApprovalDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
		
		var _approval;
		Object.defineProperty(this, 'approval', {
			get: function() {
				return _approval;
			},
			set: function(value) {
				_approval = value;
				invalidate(this);
			}
		});
	}
);

function invalidate(item) {
	if (!item.approval) {
		return;
	}

	if (item.approval.isApproved) {
		item.approvedDate.visible = true;
		item.approvedDate.text = item.approval.approvedDate;
	} else {
		item.approvedDate.visible = false;
	}
	item.apUsername.text = item.approval.name;
	item.apPosition.text = item.approval.position;
	item.apDescription.text = item.approval.description;
	item.apUserImage.image = item.approval.image;
}

module && (module.exports = ItemApproval);