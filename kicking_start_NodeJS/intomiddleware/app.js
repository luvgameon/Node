const http =require('http');
const express =require('express');
const app=express();
const BodyParser=require('body-parser');

app.use(BodyParser.urlencoded({extended:false}));
app.use('/add-products',(req,res,next)=>{
    
    res.send("<form method='POST'action='/products'><input type='text' name='title' /><input type='text' name='size' /><button type='submit'>Add Product</button></form>");
    
})
app.use('/products',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
  
    res.send('<h1>This is Default Page</h1>');
    
})

app.listen(4000);