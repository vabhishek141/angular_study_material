var Event=require("events");
var eve=new Event();
eve.on("onLog",callme)

class logger
{
    Log()
    {
        console.log("Bhau");
        eve.emit("onLog");
    }
}

var obj=new logger();
obj.Log();


function callme()
{
    console.log("ka raula hai");
}