const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

//routes
const router = express.Router();

//get all users || GET
router.get("/all-users", getAllUsers);

//Create user || POST
router.post("/register", registerController);

//login || post \
router.post("/login", loginController);

module.exports = router;
