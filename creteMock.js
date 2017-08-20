var MockService = require("./scripts/objects/MockService");
var fs = require("fs");
var path = require("path");
var dir = path.join(__dirname, "mock");
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

function writeToFile(object, filePath) {
    var content  = JSON.stringify(object, null, "\t");
    var targetPath = path.join(dir, filePath + ".json");
    console.log("Writing to file: " + targetPath);
    fs.writeFile(targetPath, content, "utf8");
}

for(var p in MockService) {
    var fn = MockService[p];
    if(typeof fn !== "function")
        continue;
    writeToFile(fn(), p);
}