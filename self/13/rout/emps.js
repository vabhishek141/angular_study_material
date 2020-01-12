var express=require("express");
var empl=express();
var mysql=require("mysql");
var joi=require("joi");
var config=require("config");

var connection=mysql.createConnection({
    host:config.get("host"),
    Database:config.get("Database"),
    User:config.get("User"),
    Password:config.get("Password")
});

connection.create();

empl.use(express.json());

empl.get("/",(req,resp)=>{
    var queryText="SELECT*FROM abc";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            resp.send(JSON.stringify(result));
        }
        else
        {
            resp.send(JSON.stringify(err));
        }
    });
});

empl.get("/:no",(req,resp)=>{
    var n=req.params.no;
    var queryText=`SELECT*FROM abc where no=${n}`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            resp.send(JSON.stringify(result));
        }
        else
        {
            resp.send(JSON.stringify(err));
        }
    });
});

empl.post("/:no",(req,resp)=>{
    var name=req.body.name;
    var no=req.params.no;
    var queryText=`update abc set name='${name}' where no=${no}`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            resp.send(JSON.stringify(result));
        }
        else
        {
            resp.send(JSON.stringify(err));
        }
    });
});


empl.put("/",(req,resp)=>{
    var no=req.body.no;
    var name=req.body.name;
    var salary=req.body.salary;
    var queryText=`insert into abc values(${no},'${name}',${salary})`;
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            resp.send(JSON.stringify(result));
        }
        else
        {
            resp.send(JSON.stringify(err));
        }
    });
});


empl.delete("/:a",(req,resp)=>{
    var a=req.params.a;
    var queryText=`delete from abc where no=${a}`;

    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            resp.send(JSON.stringify(result));
        }
        else
        {
            resp.send(JSON.stringify(err));
        }
    });

});

module.exports=empl;