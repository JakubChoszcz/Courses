console.clear();

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const port = process.env.PORT || 3000;

const connectDB = require('./db/connect');

const urls = require('./routes/urls');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/api/shorturl', urls);

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, function() {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();