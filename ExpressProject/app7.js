var event=require("events");
var eve=new event();


class database extends event
{
    insert(data)
    {
        console.log(data+"inserted");
        this.emit("onInsert");
    }

    update(data)
    {
        console.log(data+"updated");
        this.emit("onUpdate");
    }
}

module.exports=database;

