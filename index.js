const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require("massive");
const bashoController = require("./bashoController");
const rikishiController = require("./rikishiController");
require('dotenv').config()
const app = express();

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error with massive", error);
  });

app.get('/', (req, res) => res.send())

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

//  /RIKISHI
app.get("/api/rikishi/:id", rikishiController.getRikishi);
app.post("/api/rikishi", rikishiController.postRikishi);
//  /BASHO
app.get("/api/basho/:id", bashoController.getBasho);
app.post("/api/basho", bashoController.postBasho);


const PORT = 4000 || process.env.CONNECTION_STRING;
app.listen(PORT, () => console.log(`Sockets are listening on port ${PORT}`));