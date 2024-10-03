const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

//create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    //validation
    if (!username || !password || !email) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }

    //exisiting user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(401).send({
        success: "false",
        message: "user already exisits",
      });
    }

    //hashedpassword

    const hashedpassword = await bcrypt.hash(password, 10);

    //save user
    const user = new userModel({ username, email, password: hashedpassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "new user Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in Register callback",
      success: false,
      error,
    });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "All users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In get All Users",
      error,
    });
  }
};

//login
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: true,
        message: "Please provide email and password",
      });
    }

    const user = await userModel.findOne({ email });

    //if not user
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }

    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "invalid username and password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login Successfuly",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: "false",
      message: "Error in login callback",
      error,
    });
  }
};
