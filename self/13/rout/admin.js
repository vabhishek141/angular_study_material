var express=require("require");
var ad=express();

ad.use(express.json());

ad.get("/",(req,resp)=>{
    resp.send("ye respond hai");
});

ad.get("/:a",(req,resp)=>{
    resp.send("ye bhi"+req.params.a);
});

module.exports=ad;