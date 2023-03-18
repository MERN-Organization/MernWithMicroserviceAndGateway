const { default: axios } = require("axios")
const express = require("express")
const generateDynamicPath = require("../utils/generateDynamicPath")
const router = express.Router()
const registry = require('./registry.json')


router.all("/:apiName/*",async (req,res,next)=>{
    // console.log("This is checking all path and paramas and more",req.params)
    const path = req.params[0].split('/');
    const dynamicPath = await generateDynamicPath(path) 
    console.log("asdasdasdasdasdasd",typeof dynamicPath,req.method,req.body)
    try{
        if(registry[req.params.apiName]){
            axios({
                method : req.method,
                url: `${registry[req.params.apiName].apiUrl}/${dynamicPath}`,
                // headers: req.headers,
                data: req.body
            }).then((responce)=>{
                res.send(responce.data)
            })
        }else{
            res.send("No Microservice is Registered with the passed parameter name")
        }
    }catch(err){
        next(err)
    }
  
})


module.exports =  router