require('dotenv').config();
let mongoose = require("mongoose");

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(process.env.DB)
      .then(() => {
        console.log('db succ');
      })
      .catch((err) => {
        console.error('db err', err);
      })
  }
}

module.exports = new Database();