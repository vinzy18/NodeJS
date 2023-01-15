const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/mahasiswa', (req, res) => {
  db.query("SELECT * FROM mahasiswa", (error, result) => {
    if(error) throw error
    // console.log("Data founded", result)
    response(200, result, "Data founded", res);
  })
})

app.get('/mahasiswa/:npm', (req, res) => {
  const npm = req.params.npm;
  // res.send(`Hello Mahasiswa dengan npm ${npm}`)
  db.query(`SELECT * FROM mahasiswa WHERE npm = ${npm}`, (error, result) => {
    if(error) throw error;
    // console.log("Data founded", result)
    response(200, result, "Data founded", res);  
  })
})

app.post('/mahasiswa', (req, res) => {
  const { npm, nama, kelas, alamat} = req.body;
  const sql = `INSERT INTO mahasiswa (npm, nama, kelas, alamat) VALUES (${npm}, '${nama}', '${kelas}', '${alamat}')`
  db.query(sql, (error, result) => {
    if(error) response(500, "Invalid data", "Error", res);
    if(result?.affectedRows){ // tanda tanya artinya cek kalo ada isinya ato engga
      const data = {
        isSuccess: result.affectedRows,
        id: result.insertId
      };
      response(200, data, "Data Succesfully Added!", res);
    }
  })
  
})

app.put('/mahasiswa', (req, res) => {
  const { npm, nama, kelas, alamat } = req.body;
  const sql = `UPDATE mahasiswa SET nama = '${nama}', kelas = '${kelas}', alamat = '${alamat}' WHERE npm = ${npm}`;

  db.query(sql, (error, result) => {
    // console.log(result);
    if(error) response(500, "Invalid data", "Error", res);
    if(result?.affectedRows){
      const data ={
          isSuccess: result.affectedRows,
          messaage: result.message,
        }
        response(200, data, "Data Successfully Updated!", res)
      } else {
        response(404, "Data tidak ditemukan", "Error", res);
      }
  })

})

app.delete('/mahasiswa', (req, res) => {
  const { npm } = req.body;
  const sql = `DELETE FROM mahasiswa WHERE npm= ${npm}`;

  db.query(sql, (error, result) => {
    if(error) response(500, "Invalid data", "Error", res);
    if(result?.affectedRows){
      const data = {
        isDeleted: result.affectedRows,
      }
      response(200, data, "Data Successfully Deleted", res)
    } else {
      response(404, "Data tidak ditemukan", "Error", res);
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})