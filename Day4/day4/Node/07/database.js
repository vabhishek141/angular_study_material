var EventEmitter= require("events");

class Database extends EventEmitter
{
    Insert(data)
    {
        console.log(data   + " inserted");
        //As good as button is clicked now
        this.emit("onInsert");
    }

    Update(data)
    {
        console.log(data   + " updated");
        this.emit("onUpdate");
    }
}


module.exports = Database;

