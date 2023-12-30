const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const connectMongoDbSession = require("connect-mongodb-session")(session);
const URL = "mongodb://localhost:27017/Secure-CRUD";
const csurf = require("csurf");
const csrfProtection = csurf();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
const store = new connectMongoDbSession({
  uri: URL,
  collection: "session",
});

app.use(
  session({
    secret: " secret",
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(csrfProtection);
app.use((req, res, nxt) => {
  res.locals.isAuth = req.session.isLogin;
  res.locals.csrfToken = req.csrfToken();
  nxt();
});
const adminR = require("./routes/admin");
const shopR = require("./routes/shop");
const authR = require("./routes/auth");
app.use(authR);
app.use(adminR);
app.use(shopR);

const start = async () => {
  try {
    await mongoose.connect(URL);
    console.log("connect database");
    app.listen(3000, () => {
      console.log("run server on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
