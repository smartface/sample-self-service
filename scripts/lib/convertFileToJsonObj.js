const File = require("sf-core/io/file");
const FileStream = require("sf-core/io/filestream");

exports.convertFileToJson = convertFileToJson;

function convertFileToJson(filePath) {
    
    try {
        // const jsonFile =  require(filePath);
        var jsonFile = new File({
            path: filePath
        });
        var jsonFileStream = jsonFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.TEXT);
        var readJSON = jsonFileStream.readToEnd();
        console.log(readJSON);
        var jsonData = JSON.parse(readJSON);
        jsonFileStream.close();
    }
    catch (err) {
        console.log("error occured  " + err.message);
    }
    return jsonData;
}
