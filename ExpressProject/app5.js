var os=require("os");
var fs=require("fs");

var totalmem=os.totalmem();
var freemem=os.freemem();

// console.log("Totalmem="+totalmem+"freemem="+freemem);

// console.log("start");
// var files=fs.readdirSync("./");
// console.log(files);
// console.log("end"); 

console.log("start");
fs.readdir("./",callMe);
console.log("end"); 

function callMe(err,files)
{
    console.log(files);
}