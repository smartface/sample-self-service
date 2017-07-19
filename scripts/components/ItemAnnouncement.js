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
				invalidate.call(this, value);
			}
		})
	}
);

function invalidate(announcement) {
	this.anMessage.text = announcement.message;
	this.anTitle.text = announcement.title;
	this.anImage.image = announcement.image;
	this.anDate.text = announcement.date;
}

module && (module.exports = ItemAnnouncement);

