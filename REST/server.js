
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const defaultPort = require("./app/config/portconfig.js");

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rest-application." });
});


require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(defaultPort, () => {
  console.log(`Server is running on port ${defaultPort}`);
});
