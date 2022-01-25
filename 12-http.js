const http = require('http');
const server = http.createServer((req, res)=>{
  // console.log(req);
  if(req.url === '/'){ // '/' indicates the home page
    res.end('Welcome to our Homepage');
  }
  if(req.url === '/about') { //When users go to About page, this is what they'll see
    res.end("Here's a short history of our website");
  }
  res.end( // If a page does not exist, this is what users will see
    `
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Home</a>
    `
  )
})

server.listen(5000)