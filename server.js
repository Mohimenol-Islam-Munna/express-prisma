const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const postRouter = require("./routes/postRouter.js");

const app = express();

// MIDDLEWARE: 

// allow origin 
app.use(cors());
// json body perser 
app.use(express.json());


// ROUTES:

// check
app.get("/check", (req, res) => {
  res.end("application is running");
});

// post 
app.use("/post", postRouter);

app.use("*", (req, res) => {
  res.end("route not found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
