const express = require('express');
const app = express();
const port = 5500;
const middleware1 = (req,res,next) =>{
    console.log("from middleware1",req.method)
    next();
}
const middleware2 = (req,res,next) =>{
    console.log("from middleware2", req.path)
    next();
}
app.use(middleware1)
app.use(middleware2)
app.get('/',(req,res,next)=>{
    // console.log(req);
    // console.log(res);
    // req.body, req.menthot, req.header, req.query...
    //res.send, res.end, res.json, res.status()
    console.log('from handler')
    res 
    .status(200)
    .send('Hello world!')
});
app.post('/test', (req, res) =>{
    console.log(res.body)
})
app.listen(port,(err) =>{
    if(err)
    {console.error("server open failed!", Error('err'))
} else{
    console.log("zolo"+ port)
}
});
