var express = require("express");
var app =  express();

var arr = [
    {No: 11, Name: "Mahesh1", Age: 40},
    {No: 12, Name: "Mahesh2", Age: 40},
    {No: 13, Name: "Mahesh3", Age: 40}
];
app.get("/",(request, response)=>{
    response.send("Welcome Home");
});

app.get("/about",(request, response)=>{
    response.send("About Us");
});

app.get("/emps",(request, response)=>{
    var data =  JSON.stringify(arr);
    response.header("Content-Type","application/json")
    response.send(data);
});

app.get("/contact",(request, response)=>{
    response.send("Contact Us");
});


app.listen(7777,()=>{
    console.log("Server is listening at port 7777");
});