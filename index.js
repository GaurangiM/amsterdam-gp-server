const express = require('express')
const data = require("./data.json")
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

app.listen(port, ()=> {
    console.log(`Listening to port : ${port}`);
})

app.get('/testServer', (req, res)=> {
    res.send("Server doing fine !");
})

//Send an array of doctors
app.get("/doctors", (request, response) => {
    response.send(data.doctors)
  })
  
  //Send an array of patients
  app.get("/patients", (request, response) => {
    response.send(data.patients)
  })