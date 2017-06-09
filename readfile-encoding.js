
var fs = require('fs');

//can not reproduce bug in the book chapter 6.3.1
var rs = fs.createReadStream('text.md', { hightWaterMark: 11 });
rs.setEncoding('utf-8');
var data = '';
rs.on('data', function (trunk) {
    data += trunk;
})

rs.on('end', function () {
    console.log(data);
})