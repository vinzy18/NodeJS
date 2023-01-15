const fs = require('fs');

const bacaStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

const tulisStream = fs.createWriteStream('./output.txt');

bacaStream.on('readable', () => {
    // try {
    //     process.stdout.write(`[${bacaStream.read()}]`);
    // } catch(error) {
    //     // menangkap error ketika chunknya tida terbaca
    // }
    tulisStream.write(`${bacaStream.read()}\n`);
});

bacaStream.on('end', () => {
    console.log('Done');
});

