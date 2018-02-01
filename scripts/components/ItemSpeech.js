const extend			= require('js-base/core/extend');
const System			= require("sf-core/device/system");
const ItemSpeechDesign  = require('library/ItemSpeech');
const Image             = require('sf-core/ui/image');
const Speech2Text       = require("sf-extension-utils").speechToText;

const ItemSpeech = extend(ItemSpeechDesign)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ItemSpeechDesign.defaults );
		this.pageName = pageName;
		
		var _inputField;
		var page = this;
		
		Object.defineProperties(this, {
			'inputField': {
				get: function() {
					return _inputField;
				},
				set: function(value) {
					_inputField = value;
				}
			}
		});
		
		var _page;
		Object.defineProperties(this, {
			'page': {
				get: function() {
					return _page;
				},
				set: function(value) {
					_page = value;
				}
			}
		});
		
		this.onTouchEnded = function(){
			startSpeechRecognizer(page);
		}.bind(this);
		
	}
	
);

function startSpeechRecognizer(item) 
{
	if (!Speech2Text.isRunning) {
	    item.icon.image = Image.createFromFile("images://icon_microphone_red.png");
		//Speech2Text.startType(item.inputField, 3000, function() {
		    item.icon.image = Image.createFromFile("images://icon_microphone.png");
	//	});
	}
}

module && (module.exports = ItemSpeech);