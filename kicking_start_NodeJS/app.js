const express =require('express');
const BodyParser=require('body-parser');

const app=express();
const adminroutes=require('./routes/admin');
const shop=require('./routes/shop');
app.use(BodyParser.urlencoded({extended:false}));

app.use('/admin',adminroutes);
app.use(shop);

app.use((req,res,next)=>{
    res.status(404).send('<h1>PAGE NOT FOUND </h1>');
})




app.listen(4000);