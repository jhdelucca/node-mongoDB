const mongoose = require("mongoose");
const connectionString = "mongodb+srv://root:@mysql123@cluster0-13wna.mongodb.net/test?retryWrites=true&w=majority";

const openConnection = () =>
  mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
  openConnection
};
