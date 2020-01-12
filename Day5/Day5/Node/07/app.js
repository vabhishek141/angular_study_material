var Database =  require("./database");
var db = new Database();

/* <input type="button" onclick="F1()"> */

db.on("onInsert", CallMeAfterInsert);
db.on("onUpdate", CallMeAfterUpdate);

db.Insert("Some Data")
// db.Update("Some Data")

function CallMeAfterInsert()
{
    console.log("Audit after Insert");
}

function CallMeAfterUpdate()
{
    console.log("Audit after Update");
}