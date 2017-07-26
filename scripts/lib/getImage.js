const Blob = require('sf-core/blob');
const Image = require('sf-core/ui/image');
const prefix = "data:image/png;base64,";

module.exports = exports = getImage;

function getImage(base64String) {
    if(base64String.startsWith(prefix))
        base64String = base64String.substr(prefix.length);
    var blob = Blob.createFromBase64(base64String);
    var img = Image.createFromBlob(blob);
    return img;
}
