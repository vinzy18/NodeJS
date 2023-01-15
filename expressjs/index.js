const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.query("SELECT * FROM mahasiswa", (err, result) => {
    console.log("Data: ", result);
    if(err){
      console.log("Terjadi kesalahan");
      res.send("Terjadi kesalahan")
    } else {
      response(200, result, "Data berhasil diambil", res)
    }
  })
})

app.get('/find', (req, res) => {
  db.query(`SELECT * FROM mahasiswa WHERE npm = ${req.query.npm}`, (err, result) => {   
    if(err){
      console.log("Terjadi kesalahan");
      res.send("Terjadi kesalahan")
    } else {
      console.log(`cari npm: ${req.query.npm}`, result); // mengeluarkan data
      response(200, result, "Data berhasil diambil", res)
    }
  })
})

app.get('/home', (req, res) => {
  console.log({urlParam: req.query})
  res.send('Ini home')
})

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body })
  res.send("login berhasil")
    
})

app.put('/username', (req, res) => {
  console.log({ updateAccount: req.body })
  res.send("update berhasil")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})