var http = require("http");

var arr = [
    {"No": 11, "Name": "Mahesh1", "Age": 40},
    {"No": 12, "Name": "Mahesh2", "Age": 40},
    {"No": 13, "Name": "Mahesh3", "Age": 40},
    {"No": 14, "Name": "Mahesh4", "Age": 40}
];



//https://stackoverflow.com/questions/214741/what-is-a-stackoverflowerror

var server= http.createServer(
    (request, response)=>{

    // console.log("u requested " + request.url);

        if(request.url == "/employees/showdata")
        {
            // response.setHeader("Content-Type", "text/plain")
            // response.write("Your EMP Data123");

            response.setHeader("Content-Type", "application/json")
            var data =  JSON.stringify(arr);
            response.write(data);
        }
        else if(request.url == "/")
        {
            response.setHeader("Content-Type", "text/plain")
            response.write("Welcome Home");
        }
        else
        {
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/plain")
            response.write("Nahi hai bhai..");
        }

        //response.write("this is end of response");
        response.end();

});


//Old Code
// var server= http.createServer();
//server.on("connection", OnConnectionCallMe);
// server.on("connection", ()=>
//                             {
//                                 console.log("Sever is called .. I am in OnConnectionCallMe Method");
//                             });


server.listen(9999);
console.log("Server started...");




// function OnConnectionCallMe()
// {
//     console.log("Sever is called .. I am in OnConnectionCallMe Method");
// }