
var express = require("express");
var mysql = require("mysql");

var app =  express();

app.get("/",(request, response)=>{
    response.send("Welcome Home");
});

app.get("/about",(request, response)=>{
    response.send("About Us");
});

app.get("/emps",(request, response)=>{

    var connection=  mysql.createConnection({
                        host: "localhost",
                        database : "PuneDB",
                        user : "root",
                        password : "manager"
                    });

    connection.connect();
    connection.query("select * from Emp",
        (err,result)=>{
            
        connection.end();
        if(err==null)
        {
            var data =  JSON.stringify(result);
            response.header("Content-Type","application/json")
            response.send(data);
        }
        else
        {
            console.log(err.message);
            response.send("Some thing wrong!");
        }
    });

    
});

app.get("/contact",(request, response)=>{
    response.send("Contact Us");
});


app.listen(7777,()=>{
    console.log("Server is listening at port 7777");
});


