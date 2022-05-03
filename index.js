const express = require('express')
const app = express(); 
const Port = 7000;

app.get('/',(req,res)=>{
    res.send('hello there')
})

app.use("/Room1", require('./Room1/Person2'))

app.listen(Port,()=>{
    console.log(`listening to app at PORT ${Port}`);
})