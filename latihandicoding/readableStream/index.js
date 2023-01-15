const fs = require('fs');

const readableStream = fs.createReadStream('./article.txt',{
    highWaterMark: 20
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // menangkap error ketika chunknya tida terbaca
    }
});

readableStream.on('end', () => {
    console.log('Done');
});