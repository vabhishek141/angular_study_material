var express =  require("express");
var empsRouter = require("./routes/emps");
var adminRouter = require("./routes/admin");
var config = require("config");

var port =   parseInt(config.get("port"));
var app =  express();

app.use("/emps", empsRouter);
app.use("/admin", adminRouter);

app.listen(port, ()=>{
    console.log("Server Started..");
});




