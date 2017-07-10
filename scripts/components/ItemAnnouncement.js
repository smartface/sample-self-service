/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemAnnouncementDesign = require('library/ItemAnnouncement');

const ItemAnnouncement = extend(ItemAnnouncementDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemAnnouncementDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
		
		var _announcement;
		Object.defineProperty(this, 'announcement', {
			get: function() {
				return _announcement;
			},
			set: function(value) {
				_announcement = value;
				invalidate(this);
			}
		})
	}
);

function invalidate(item) {
	item.anMessage.text = item.announcement.message;
	item.anTitle.text = item.announcement.title;
	item.anImage.image = item.announcement.image;
	item.anDate.text = item.announcement.date;
}

module && (module.exports = ItemAnnouncement);

