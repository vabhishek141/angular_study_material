var os=require("os");
var fs=require("fs");

var totalmem=os.totalmem();
var freemem=os.freemem();

console.log("Total mem="+totalmem+"Free mem"+freemem);