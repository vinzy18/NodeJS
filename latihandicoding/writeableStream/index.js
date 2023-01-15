const fs = require('fs');

const writeableStream = fs.createWriteStream('output.txt');

writeableStream.write('Baris pertama\n');
writeableStream.write('Baris kedua\n');
writeableStream.end('Baris akhir');

if(writeableStream){
    console.log('Program berjalan');
}