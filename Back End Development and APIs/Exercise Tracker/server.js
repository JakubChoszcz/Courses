console.clear();



const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
require('dotenv').config();



const { PORT, MONGO_URI } = process.env;
const routes = require('./routes/routes');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.use('/api/users', routes);



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});



const start = async () => {
  try {
    await connectDB(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    })
  } catch (error) {
    console.log(error);
  }
};
start();