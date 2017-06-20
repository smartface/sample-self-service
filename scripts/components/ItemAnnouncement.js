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
	}
	
);

module && (module.exports = ItemAnnouncement);

