var mysql = require("mysql");
var express =  require("express");
var app =  express();

app.use(express.json());


var connection =  mysql.createConnection({
   host: "localhost" ,
   database : "PuneDB",
   user : "root",
   password : "manager"
});

// app.use("/emps",(request, response, next)=>{
//     console.log("In my middleware code ");
//     console.log("May be I will do authentication / authorization / caching here");
//     console.log("Done");
//     next();
// });

// app.use("/emps",(request, response, next)=>{
//    console.log("////////////////ANOTHER FUNCTION///////////////////");
//     next();
// });

app.get("/emps",(request, response)=>{
    
    connection.connect();
    var queryText = "select * from Emp";
    console.log(queryText);
    connection.query(queryText,(err, result)=>{

        response.header("Content-Type", "application/json");
        if(err== null)
        {
            console.log("Select Done!");
            response.send(JSON.stringify(result));
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err));
        }
    });
    connection.end();

});


app.get("/emps/:No",(request, response)=>{
    
    connection.connect();

    var No = request.params.No;
    console.log(`You are searching for ${No}`);

    var queryText = `select * from Emp where No= ${No}` ;
    console.log(queryText);
    connection.query(queryText,(err, result)=>{

        response.header("Content-Type", "application/json");
        if(err== null)
        {
            console.log("Select with Where Done!");
            response.send(JSON.stringify(result));
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err));
        }
    });
    connection.end();

});


app.post("/emps",(request, response)=>{
    
//    console.log(request.body);
//  response.send("Hello Emps - POST");

connection.connect();

    var No = request.body.No;
    var Name = request.body.Name;
    var Age = request.body.Age;

    var queryText = `insert into Emp values(${No},'${Name}',${Age})` ;

    console.log(queryText);
    connection.query(queryText,(err, result)=>{

        response.header("Content-Type", "application/json");
        if(err== null)
        {
            console.log("Insert Done!");
            response.send(JSON.stringify(result));
        }
        else
        {
            console.log(err);
            response.send(JSON.stringify(err));
        }
    });
    connection.end();

});


app.put("/emps",(request, response)=>{
    response.send("Hello Emps - PUT");
});


app.delete("/emps",(request, response)=>{
    response.send("Hello Emps - Delete");
});

app.listen(9898,()=>{
    console.log("Server Started");
});


