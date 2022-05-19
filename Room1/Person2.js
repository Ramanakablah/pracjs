const express  = require('express')
const res = require('express/lib/response')
const app = express()
const fs = require("fs")
const router = express.Router()

router.get('/greet',(req,res)=>{
    res.status(200).send('Hello from person 2')
})

router.post('/handshake',(req,res)=>{
 
    try {
        let name = req.body.name;
        if(name){
            res.status(200).send("Hello I'm doing fine how are you")
        } 
        else{
            res.send("Ok will see you later")
        }
    } catch (error) {
        
    }

})

router.get('/whttosay',async (req,res)=>{
    try {
        let Life = {}     
        let object={
            name:"",
            age:0,
            exp:10
        }

            for(let index = 0; index < 100; index++){
             let obj = new object;
             obj.age=index ;
             obj.exp = index+0.2;
             Life[index]=object
         }

         fs.writeFileSync('../Exp_dat/Data.json',Life)

    } catch (error) {
        
    }
})

router.post('/listening' , (req,res)=>{
   try {
       let pile = req.body.Pile;

       
   } catch (error) {
       console.log(error);
       res.end(error)
   }
})

router.post("/file" ,(req,res)=>{
    try {
        console.log("Waiting for file");
        let file = req.body.upfile;
        console.log("file recieved???");
        if(file){
            console.log(file);
            res.status(200).send("Ok");
        }
        else{
            console.log("File not uploaded");
        }
    } catch (error) {
      res.status(400).send("Servert crashed")
    }
})



module.exports = router