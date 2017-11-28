/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const ItemDocumentDesign = require('library/ItemDocument');
const pushClassNames = require("@smartface/contx/lib/styling/action/pushClassNames")
const removeClassName = require("@smartface/contx/lib/styling/action/removeClassName")

const ItemDocument = extend(ItemDocumentDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemDocumentDesign.defaults );
		this.pageName = pageName;
		this.width = NaN;
		
		var documentData;
		Object.defineProperty(this, 'data', {
			get: function() {
				return documentData;
			},
			set: function(value) {
				documentData = value;
				invalidate(this, documentData);
			}
		});
	}
);

function invalidate(item, data) {
	item.itemDocumentTitle.text = data.title;
	item.itemDocumentAcceptance.dispatch(pushClassNames(".label-item-document-" + data.condition));
	item.itemDocumentImage.dispatch(pushClassNames(".imageView-item-document-" + data.condition));
	/*
	Object.assign(item.itemDocumentAcceptance, getCombinedStyle(".label-item-document-" + data.condition));
	Object.assign(item.itemDocumentImage, getCombinedStyle(".imageView-item-document-" + data.condition));
	*/
}

module && (module.exports = ItemDocument);

