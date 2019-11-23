
var os= require("os");
var fs= require("fs");

var totalMem = os.totalmem();
var freeMem = os.freemem();

//console.log("Total = " + totalMem + " Free " + freeMem);

// console.log("Start")
// var files= fs.readdirSync("./");
// console.log(files);
// console.log("End")


console.log("Start")
fs.readdir("./",CallMeWhenReadIsOver);
console.log("End")

function CallMeWhenReadIsOver(err, files)
{
    console.log(files);
}









