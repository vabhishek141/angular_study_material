
var SomethingfromLoggerJs= require("./Logger");

console.log(SomethingfromLoggerJs);
console.log(SomethingfromLoggerJs.v);

var obj1 = new SomethingfromLoggerJs.MyLogger();
obj1.Log("somedata");


SomethingfromLoggerJs.F1();
var obj = new SomethingfromLoggerJs.Blogger();
obj.Blog("abc");


// var obj = new Logger();
// obj.Log("Hello Logger");