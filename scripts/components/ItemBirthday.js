/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemBirthdayDesign = require('library/ItemBirthday');

const ItemBirthday = extend(ItemBirthdayDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemBirthdayDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
		
		var user;
		Object.defineProperty(this, 'user', {
			get: function() {
				return user;
			},
			set: function(value) {
				user = value;
				invalidate(this);
			}
		});
	}
);

function invalidate(item) {
	item.ibUserImage.image = item.user.image;
	item.ibUserName.text = item.user.name;
	item.ibUserPosition.text = item.user.position;
	item.ibUserBirthday.text = item.user.birth;
}

module && (module.exports = ItemBirthday);

