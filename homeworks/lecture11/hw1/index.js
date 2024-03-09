const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const companyRouter = require("./routers/company");
const employeeRouter = require("./routers/employee");
const authRouter = require("./routers/auth");

dotenv.config();

mongoose
  .connect(process.env.URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
