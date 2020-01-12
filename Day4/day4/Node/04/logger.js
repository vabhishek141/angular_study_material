
//Export Only Logger Class without Key
//----------------------------------------
// class Logger
// {
//     Log(msg)
//     {
//         console.log(msg);
//     }
// }

// module.exports = Logger




//Export Only Function without Key
//----------------------------------------

// function SayHi(name)
// {
//     console.log("Hi" + name);
// }

// module.exports = SayHi;


class Logger 
{
    Log(msg)
    {
        console.log(msg + "- Logged!");
    }
}

function GetSomeObejct(i)
{
    return new Logger();
}

module.exports = GetSomeObejct;
















