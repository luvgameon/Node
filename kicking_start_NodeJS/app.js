const http =require('http');
const myroutes=require('./routes');


const server=http.createServer(myroutes.handler);
console.log(myroutes.text);

server.listen(4000);