const express  = require('express')
const app = express()
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



module.exports = router