var http = require('http');
var helloworld = '';

for(var i = 0; i<1024;i++){
    helloworld += 'b';
}

//add es6 grammer, that should start server by babel-node. 
//set npm start with babel-node already.

async function geta(){
    return await getb();
}

async function getb() {
    return 'getb';
}

helloworld = new Buffer(helloworld);

http.createServer((req, res) => {
    res.writeHead(200);
    res.end(helloworld);
}).listen(8001);
