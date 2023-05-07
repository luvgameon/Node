const fs=require('fs');


const reqhandler=(req,res)=>{
    const url=req.url;
const method=req.method;
if(url==='/'){
    fs.readFile("msg.txt",{encoding:"utf-8"}, (err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            
            res.write(`<html><body><p> ${data} </p> <form action="/msg" method="POST"> <input type="text" name="msg"><button type="submit">Send</button></form></body> <html>`);
        }
    })
}

else if(url==='/msg' && method==="POST")
{
    let body=[];
    req.on('data',(chunk)=>{
       
        body.push(chunk);
        
    });

    req.on('end',()=>{
        const parsedbody=Buffer.concat(body).toString();
       
         let msg=parsedbody.split('=')[1];
          msg=msg+'<br />' ;
        fs.writeFileSync("msg.txt",msg,{flag:'a'});
        res.statusCode=302;
        res.setHeader('location','/');
        return res.end();

    })
   
}
else if(url==='/home'){
    res.write('<html><body>Welcome home </body> <html>');
    }
    else if(url==='/about'){
        res.write('<html><body>Welcome to about us </body> <html>');
        }
        else{
            res.write('<html><body>This is default</body> <html>');
        
        }

};
 module.exports={
    handler: reqhandler,
    text: 'Hi my name is luv'
 };