var dbase=require("./databse");
var db=new dbase();

db.on("onInsert", callme1);
db.on("onUpdate", callme2);
db.insert("number");



function callme1()
{
    console.log("abhishek");
}

function callme2()
{
    console.log("tushar");
}