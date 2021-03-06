// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
console.log(('' + process.env.NODE_ENV).trim() === 'dev');
console.log('The value of PORT is:', process.env.PORT)

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

console.log({ MONGODB_URI: process.env.MONGODB_URI });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

