const { request, response } = require("express");
const express= require("express");
const { default: mongoose } = require("mongoose");
// const departmentRouter = require("./Routes/departmentRoute")
 const categoryRoute=require("./Routes/categoryRoute")

// 1- crearte server object 
const server=express();

mongoose.connect("mongodb://localhost:27017/categoryDB")
    .then(()=>{
        console.log("DB Connected");
        // 2- listen to port number
    server.listen(process.env.PORT||9292,()=>{
    console.log("I am listining on port number 9292")
})
    })
    .catch(error=>console.log("DB Connection Error"+error));



// Middlewares
// 1- first MW console.log url and method request
server.use((request,response,next)=>{
    console.log("First Middleware", request.url,request.method);
    next();

})

// // 2- Authentication MW
// server.use((request,response,next)=>{
//     if (true) //authinticated
//     {
//         next();
//     }
//     else // not authenticated
//     {
//         response.send ("NOt Authenticated");

//     }
// })

// server.use((request,response,next)=>{
//     response.send("Welcome guest");
// })

//Routes === end points
// server.get("/department",(request,response,next)=>{
//     response.status(200).json({data:[{name:"SD"}]});
// });
// server.get("/student",(request,response,next)=>{
//     response.status(200).json({data:[{name:"eman"},{name:"ahmed"}]});
// });

//project
// server.get("/category",(request,response,next)=>{
//     response.status(200).json({data:[{name:"Jweleries"},{name:"Watches"},{name:"Vases"},{name:"Pictures"},{name:"status"}]});
// });

// // 3- Not Found End points
// server.use((request,response)=>{
//     response.status(404).json({message:"NOT FOUND"});
// })

// // 4- Catch errors
// server.use((error,request,response,next)=>{
//     response.status(500).json({message:"error"+ error});
// })

// end points (Routes)
// /// get first department 
// server.get("/department",(request,response,next)=>{
//     response.status(200).json({data:[{name:"SD"},{name:"SS"}]});
// })
server.use(categoryRoute);

// 3- Not Found End points
server.use((request,response)=>{
    response.status(404).json({message:"NOT FOUND"});
})

// 4- Catch errors
server.use((error,request,response,next)=>{
    response.status(500).json({message:"error"+ error});
})

// /// update
// server.post("/department",(request,response,next)=>{
//     response.status(201).json({data:"update"});
// })
// ///add
// server.put("/department",(request,response,next)=>{
//     response.status(201).json({data:"update"});
// })
// // ///delete
// server.delete("/department",(request,response,next)=>{
//     response.status(201).json({data:"delete"});
// })