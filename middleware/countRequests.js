const Request = require("../db/schema/RequestsSchema");

const countRequests = async (req,res,next) =>{
    const request = new Request({
        title: `${req.method} ${req.originalUrl}`
      });

     await request.save()
     Request.countDocuments({})
     .then((data)=>{
         console.log(`Foram feitas ${data} requisições até agora no servidor.`)
     })
     next()
}

module.exports = countRequests;