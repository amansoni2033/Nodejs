
// //  const express = require("express");

// //  const app = express();

// // app.get("/s", (request, response) => {
// //     response.status(200).send({"key": "Operation Successful!"});
// //  });

// // // // app.post("/s", (request, response) => {
// // // //     const create = "Post request successful";
// // // //     response.status(201).send({create});
// // // // });

// // // // app.put("/s", (request, response) => {
// // // //     response.status(200).send({"ok": "Done"});
// // // // });

// // app.listen(3000, () => {
// //  console.log("Server is running on port : 3000");
// // });


// const express = require("express");
// const app=express();

//  app.get("/url", function(request, response) {
//   response.status(200).send(["get","Lisa","Michael","Ginger","Food"]);
//  });

//  app.post("/url", function(request, response){
//      response.status(201).send(["post","Lisa","Michael","Ginger","Food"]);
//  });

//  app.put("/url", function(request, response){
//      response.status(200).send(["put","Lisa","Michael","Ginger","Food"]);
//  });


// app.patch("/url",function(request,response , next){
//     response.status(200).send(["patch","Lisa","Michael","Ginger","Food"]);
    
// });



//  app.listen(3000, function() {
//  console.log("This server is running on port :3000");
// });

// const express = require("express");

// const movies = ["sholay", "gangs of wasyepur"];

// const PORT = 3000;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded());

// app.get("/movie", function (request, response) {
//   response.status(200).send({ movies });
// });

// app.post("/movie", function (request, response) {
//   const { body } = request;
//   movies.push(body.name);
//   response.status(201).send({ name: body.name });
// });

// app.listen(PORT, function () {
//   console.log(`Your app is running on PORT - ${PORT}`);
// });

//const { response } = require("express");
const express= require("express");

const movies=["ddlj", "pk"];

const port=3000;

const app=express();

app.use(express.json());


app.get("/movie", function(request, response, next){
    response.status(200).send(movies);
});

app.post("/movie", function(request, response){
    const { body }=request;
   movies.push(body.name);
     response.status(201).send({ name: body.name});
 });

app.listen(port, function(){
    console.log(`running on port ${port}`);
});