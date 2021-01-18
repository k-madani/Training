const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes/route.js');

app.use(routes);

const dbUrl = "mongodb://localhost:27017/Fruits";
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(
  (result) => {
    app.listen(3000, ()=>{ console.log("running server at port 3000");})
  }
).catch((err) => console.log(err));