var express=require("express");
var empl=express();
var config=require("./config");
var mysql=require("mysql");
var connection=mysql.createConnection();




empl.use(express.json());

empl.get("/",(req,resp)=>{
    var querText="SELECT * FROM abc";
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

empl.post("/",(req,resp)=>{
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

empl.put("/:no",(req,resp)=>{
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



empl.delete("/:no",(req,resp)=>{
    var queryText
})