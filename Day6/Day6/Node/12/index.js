var express =  require("express");
var app =  express();
var mysql = require("mysql");
var connection =  mysql.createConnection({
    host: "localhost",
    database: "PuneDB",
    user : "root",
    password: "manager"
});
connection.connect();

// app.use((request, response, next)=>{

//     //Do anything you want w.r.t. request , response
//     //after manipulation forward the request, response 
//     //to next function to be executed
//     next();
// });

app.use(express.json());

app.get("/emps",(request, response)=>{
    var queryText = "select * from Emp";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

app.get("/emps/:No",(request, response)=>{
    var queryText = `select * from Emp where No = ${request.params.No}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


app.post("/emps",(request, response)=>{
    var No = request.body.No;
    var Name = request.body.Name;
    var Age = request.body.Age;

    var queryText = `insert into Emp values(${No}, '${Name}', ${Age})`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});



app.put("/emps/:No",(request, response)=>{
    var No = request.params.No;
    var Name = request.body.Name;
    var Age = request.body.Age;

    var queryText = `update Emp set Name='${Name}', Age= ${Age} where No=${No}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


app.delete("/emps/:No",(request, response)=>{
    var No = request.params.No;
    var queryText = `delete from Emp where No = ${No}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});



app.listen(9898, ()=>{
    console.log("Server Started..");
});