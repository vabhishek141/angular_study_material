var express=require("express");
var app=express();
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    database:"classwork",
    user:"root",
    password:"manager",
})
connection.connect();

app.use(express.json());

app.get("/",(req,resp)=>{
    var queryText="Select * FROM abc";
    connection.query(queryText,(err, result)=>{
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

app.get("/emps/:no",(req,resp)=>{
    var no=req.params.no;
    var queryText=`SELECT * FROM abc WHERE no=${no}`;
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

app.post("/emps",(req,resp)=>{
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

app.put("/emps",(req,resp)=>{
    var no=req.body.no;
    var name=req.body.name;
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

app.delete("/emps/:no",(req,resp)=>{
var queryText=`Delete FROM abc where no=${req.params.no}`;
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

//connection.end();

app.listen(9898,()=>{

    console.log("Server started");
});
