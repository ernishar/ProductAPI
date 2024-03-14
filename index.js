const express = require('express');
const app = express();
const productRouter = require('./routes/routes')

const port = 5000;

const customMiddleware =((req,res,next)=>{
    console.log("Custom Middlware");
    next();
})

//body Parser 
app.use(express.json())
app.use(customMiddleware)
app.use('/api',productRouter.router)



app.listen(port,()=>{
    console.log(`sever running on ${port}`)
})

