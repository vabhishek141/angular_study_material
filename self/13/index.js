var express=require("express");
var app=express();
var empl=require("./rout/emps");
var ad=require("./rout/admin");
var config=require("config");
var port=parseInt(config.get("Port"));

app.use("/empl",empl);
app.use("/ad",ad);

app.listen(Port,()=>{
    console.log("started");
});