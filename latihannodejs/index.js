const http = require("http");
const rupiah = require('rupiah-format')
const fs = require("fs");
const os = require("os");
const host = "localhost";
const port = 5000;

const server = http.createServer(function (request, response) {
  const nama = "PINZY";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fs.appendFile("sisauang.txt", sisa, () => {
    console.log("data uang berhasil disimpan")
  });

  const sisaRam = os.freemem();
  const jumlahCPU = os.cpus();

  const checkCPU = () => {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
        myCPU.push(cpu.model)
    })
    return myCPU[0];
  }

  console.log(checkCPU());

  const hasil = `
  <head>
    <title>${nama}</title>
  </head>
  <body>
    <h1 style = "background:black; color:gold; padding: 20px; text-align: center;" > BELAJAR CUY! </h1>   
    <p>halo nama aing ${nama}. eug jajan sebanyak ${jajan}, tadinya duit eug ${uang}, tapi sisanya ${sisa}.</p>
    <h5> sisa RAM saya: ${sisaRam} </h5>  
    <h5> saya menggunakan CPU: ${checkCPU()} </h5>  
  </body>
  `;
  

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server Turned On at ${host}:${port}`);
});
