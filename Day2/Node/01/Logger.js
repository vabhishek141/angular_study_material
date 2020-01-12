
class Logger
{
    Log(msgFromUser)
    {
        console.log("Messsage received from user is " + msgFromUser);
    }
}

class Blogger
{
    Blog(msgFromUser)
    {
        console.log("Messsage received from user is " + msgFromUser);
    }
}

function SayHi()
{
    console.log("Hi!");
}


var someNonsenseVariable = "Nonsense Value";

module.exports.MyLogger = Logger;
module.exports.v = someNonsenseVariable;
module.exports.F1 = SayHi;
module.exports.Blogger = Blogger;









