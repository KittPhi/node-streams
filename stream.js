
var fs = require('fs'),
    files = fs.readdirSync('./files'),
    clips = [],
    stream,
    currentfile,
    joined = fs.createWriteStream('./joined-interview.mp3');

// create an array with filenames (time)
// file - must be in format 100547.mp3
files.forEach(function (file) {
    clips.push(file.substring(0, 6));  // 100547.mp3 (first to last)
});

// Sort it by time (hour, minute, seconds)
clips.sort(function (a, b) {
    return a - b;
});

// recursive function
function main() {
    // if no files are left in array, then end
    if (!clips.length) {
        joined.end("Done");
        return;
    };
    
    // pop off first file in array and save it as currentfile
    currentfile = './files/' + clips.shift() + '.mp3';
    // Read that file and write it to joined-interview.mp3
    stream = fs.createReadStream(currentfile);
    // do not end
    stream.pipe(joined, {end: false});
    // listen on end, if end is false then log. Run the program again
    stream.on("end", function() {
        console.log(currentfile + ' appended');
        main();        
    });
};

main();
