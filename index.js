const express = require('express')
const app = express(); 
const PORT = 7000 || process.env.PORT;

app.get('/',(req,res)=>{
    res.send('hello there')
})

app.use("/Room1", require('./Room1/Person2'))

app.listen(PORT,()=>{
    console.log(`listening to app at PORT ${PORT}`);
})