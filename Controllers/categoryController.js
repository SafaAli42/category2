// const { request, response } = require("express");


// شرح توضيحي
// module.exports.getAllDepartment=(request,response)=>{
//     response.status(200).json({data:[{name:"SD"},{name:"OS"}]});
// }
const mongoose= require("mongoose");
require("./../Model/category");
let Category= mongoose.model("category");

module.exports.getAllCategory = (request,response,next)=>{

    Category.find({})
        .then(data=>{
            response.status(200).json({data:[{name:""},{name:""}]});

        })
        .catch(erro=>{
            next(error)

        })
    }
    

module.exports.createCategory = (request,response,next)=>{
    let object=new Category({
        _id:1,
        name:"Statue"
    });
    object.save()
        .then(data=>{
        response.status(201).json({data:"added"})
        })
        .catch(error=>next(error))

}
module.exports.updateCategory =(request,response,next)=>{
    response.status(200).json({data:"update"})
}
module.request.deleteCategory =(request,response,next)=>{
    response.status(200).json({data:"delete"})

}