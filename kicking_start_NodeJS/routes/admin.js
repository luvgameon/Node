const express=require('express');
const router=express.Router();

router.get('/add-products',(req,res,next)=>{
    
    res.send("<form method='POST'action='/admin/products'><input type='text' name='title' /><input type='text' name='size' /><button type='submit'>Add Product</button></form>");
    
})
router.post('/products',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
});



module.exports=router;