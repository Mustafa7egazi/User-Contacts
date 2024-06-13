// Module imports
require("dotenv").config();
const express = require("express");
const expressSession = require("express-session");
const session = require("express-session");
const path = require("path");
// custom imports
const { connectToDB } = require("./config/db");
const { flashMessagesForSession } = require("./middlewares/session");

// Entry point
const app = express();
connectToDB();

// setting the middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(
  session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
  })
);

app.use(flashMessagesForSession);

// set the template engine
app.set("view engine", "ejs");
// Serve static files for Bootstrap and Font Awesome
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use(
  express.static(
    path.join(__dirname, "node_modules/@fortawesome/fontawesome-free")
  )
);

// routing
app.use("/", require("./routes/routes"));
app.use("/api", require("./routes/routes"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
