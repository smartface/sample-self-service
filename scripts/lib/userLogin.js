// const File = require("sf-core/io/file");
// const FileStream = require("sf-core/io/filestream");

// function login(){
    
//     this.login = function login(options,callback){
    
//     var username  = options.username;
//     var password =  options.password;
    
//     var filePath = 'mock://getUsers.json';
    
//     var jsonFile = new File({
//         path: filePath
//     });
    
//     var jsonFileStream = jsonFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.TEXT);
//     var jsonData  = JSON.parse(jsonFileStream.readToEnd());
    
//     //for now just return userData by not providing any password and username
    
//     }
// }

// module && (module.exports = login);