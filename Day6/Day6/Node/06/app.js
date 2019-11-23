var EventEmitter= require("events");

var eventEmitterObj = new EventEmitter();
eventEmitterObj.on("onLog",ExecuteMeOnLog);

class Logger
{
    Log(){
        console.log("Some Data getting logged");

        eventEmitterObj.emit("onLog");
        //you click on button
    }
}




var obj = new Logger();
obj.Log();


function ExecuteMeOnLog()
{
    console.log("Somebody called Log!");
}
