
class Logger
{
    Log(msgFromUser)
    {
        console.log("Logger " + msgFromUser);
    }
}

class Blogger
{
    Blog(msgFromUser)
    {
        console.log("Blogger " + msgFromUser);
    }
}

function SayHi()
{
    console.log("Hi!");
}


var someNonsenseVariable = "Nonsense Value";

module.exports.Logger = Logger;
module.exports.someNonsenseVariable = someNonsenseVariable;
module.exports.SayHi = SayHi;
module.exports.Blogger = Blogger;
module.exports.mylogger = new Logger();








