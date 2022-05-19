const express = require('express')
const app = express(); 
const Port = process.env.PORT || 5000;

app.use((req,res,next)=>{
    res.append('Access-Control-Allow-Origin',['*']);
    res.append('Access-Control-Allow-Method','GET,POST,PUT,DELETE');
    res.append('Access-Control-Allow-Heades','Content-Type')
    next()
})

app.get('/',(req,res)=>{
    res.send('hello there')
})

app.use("/Room1", require('./Room1/Person2'))

app.listen(Port,()=>{
    console.log(`listening to app at PORT ${Port}`);
})