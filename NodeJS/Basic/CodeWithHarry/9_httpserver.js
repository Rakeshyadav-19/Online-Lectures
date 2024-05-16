import   console  from 'console';
import  http  from 'node:http';

const port = process.env.PORT || 3000; //use the port we getting for process.


const server  = http.createServer((req, res)=>{
    console.log(req.url) //to print the url
    console.log(req) //to print the request
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html') //Tells what type of content is sent by server. 
    res.end('<h1> This is Rakesh</h1> <p> Hey this is the way to rock the world!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});