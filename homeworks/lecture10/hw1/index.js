const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
companyRouter = require("./routers/companyRouter");
employeeRouter = require("./routers/employeeRouter");

const app = express();
const PORT = 3000;
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {});
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/company", companyRouter);
app.use("/employee", employeeRouter);
app.listen(PORT, () => {
  console.log(`Example app listening at port: ${PORT}`);
});
