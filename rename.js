
var fs = require('fs');

// All files in files directory
var files = fs.readdirSync('./files');

// Loop thru each file in files directory
files.forEach(function (file) {
    var currentname = './files/' + file, // // Mon Jan 03 10;05;47 2011.mp3
        date = parseDate(file), // 10;05;47
        newname = './files/' + date.split(';').join('') + '.mp3'; // renames 10;05;47 to 100547

    renameFile(currentname, newname); 
    console.log('Renamed ' + currentname + ' to ' + newname);    
}); 

/*
    This function renames a file

    @param: (String) currentname - current file name
    @param: (String) newname - new file name     
*/
function renameFile(currentname, newname) {
    fs.renameSync(currentname, newname);
};

/*
    Extracts time E.g. 10;05;47 from file name
    
    @param: (String) filename - file name 
*/
function parseDate(filename) {
    var date = filename.substring(11, 19); // Mon Jan 03 10;05;47 2011.mp3 (11 is before, 19 is last number)
    return date;  // 10;05;47
};

console.log('Done');


