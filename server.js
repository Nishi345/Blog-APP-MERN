const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//config dotenv
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");

//Rest object
const app = express();

//port
const port = process.env.PORT || 8080;

//connected MongoDB
connectDB();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
// app.get("/", (req, res) => {
//   return res.status(200).send({
//     message: "node server",
//   });
// });
app.use("/api/v1/user", userRoutes);
//listen
app.listen(port, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} mode at port ${port}`.bgCyan
      .white
  );
});
