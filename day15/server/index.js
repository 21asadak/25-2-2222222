import http from 'node:http';
const PORT = 3000;

const server = http.createServer((req, res) => {
   console.log(req)

   const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parsedUrl;

    
    console.log(pathname)
    
    if(pathname === '/hi') {
        res.writeHead(200);
        res.end("Hello");
    }
    else if(pathname === '/who') {
        res.writeHead(200);
        res.end("hi~ i'm choiwoorim");
    }
    else{
        res.writeHead(200);
        res.end("please req : /hi or /who");
    }
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 