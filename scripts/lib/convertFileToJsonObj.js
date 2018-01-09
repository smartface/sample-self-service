const File = require("sf-core/io/file");
const FileStream = require("sf-core/io/filestream");

exports.convertFileToJson = convertFileToJson;

function convertFileToJson(filePath) {
    try {
        var jsonFile = new File({
            path: filePath
        });
        var jsonFileStream = jsonFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.TEXT);
        var jsonData = JSON.parse(jsonFileStream.readToEnd());
    }
    catch (err) {
        console.log("error occured" + err.message);
    }
    return jsonData;
}
