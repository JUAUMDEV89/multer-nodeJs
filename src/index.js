require('dotenv/config');
const express = require('express');
const mustache = require('mustache-express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

try{
   mongoose.connect(process.env.MONGO_CONNECTION, {
       useNewUrlParser: true,
       useUnifiedTopology: true
   });
}catch(err){
   console.log('MongoDb Connection Failed, error: ' + err);
}

//configs

app.use(express.json());
app.use(routes);

app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server Running at port ${PORT}`);
});