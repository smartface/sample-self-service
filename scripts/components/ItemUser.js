/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ItemUserDesign = require('library/ItemUser');

const ItemUser = extend(ItemUserDesign)(
	//constructor
	function(_super, props, pageName){
		delete ItemUserDesign.defaults.width
		_super(this, props || ItemUserDesign.defaults );
		this.pageName = pageName;
		
		var user;
		Object.defineProperty(this, 'user', {
			get: function() {
				return user;
			},
			set: function(value) {
				user = value;
				invalidate(this);
			}
		})
	}
);

function invalidate(item) {
	item.userImage.image = item.user.image;
	item.userName.text = item.user.name;
	item.userPosition.text = item.user.position;
}

module && (module.exports = ItemUser);

