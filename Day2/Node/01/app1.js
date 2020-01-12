var FromLogger1 =  require("./Logger1");

FromLogger1.SayHi();

var obj =  new FromLogger1.Logger();
obj.Log("ABC");

console.log(FromLogger1.someNonsenseVariable);

var obj1 =  new FromLogger1.Blogger();
obj1.Blog("XYZ");

FromLogger1.mylogger.Log("something strange");
