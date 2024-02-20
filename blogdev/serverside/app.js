const express = require("express");
//enables working with json files
const bodyParser = require("body-parser");
//enables sharing of resourses btn client and server
const cors = require("cors");

//database
const db = require("./data/database");
// const path = require("path");

const app = express();
app.use(bodyParser.json());

//*cors allows the frontend to request for resources from the server
const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));

const authroute = require("./routes/auth.routes");

// app.set("views", path.join(__dirname, "../clentside/views"));

app.use(authroute);

//connection to database and listening to the port 3000
db.connectToDatabase().then(() => {
  app.listen(process.env.PORT || 3000);
});
