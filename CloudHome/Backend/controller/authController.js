const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const getUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email });
  return user;
};

const generateJWTToken = (obj) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now()/1000) + 60 * 60 * 24 * 7, // 7 days
      data: obj,
    },
    process.env.JWT_SECRET
  );
  return token;
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      res.status(400).json({
        message: "Invalid password or email",
        status: "fail",
        data: {},
      });
      return;
    }

    const user = await getUserByEmail(email);
    if (user) {
      res.status(400).json({
        message: "User already exists",
        status: "fail",
        data: {},
      });
      return;
    }

    const newUser = await UserModel.create({ email, password });
    res.status(201).json({
      message: "User created successfully",
      status: "success",
      data: {
        user: {
          email: newUser.email,
          _id: newUser._id,
          isEmailVerified: newUser.isEmailVerified,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
      status: "fail",
      data: err,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      res.status(400).json({
        message: "Invalid email or password",
        status: "fail",
      });
      return;
    }
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(400).json({
        message: "Invalid User",
        status: "fail",
        data: {},
      });
      return;
    }

    const isCorrect = await user.verifyPassword(password, user.password);
    if (!isCorrect) {
      res.status(400).json({
        status: "fail",
        message: "Incorrect password",
        data: {},
      });
      return;
    }
    res.status(200).json({
      message: "User login successfully",
      status: "success",
      data: {
        user: {
          email: user.email,
          _id: user._id,
          name: user.name,
          isEmailVerified: user.isEmailVerified,
        },
        token: generateJWTToken({
          _id: user._id,
          email: user.email,
          name: user.name,
        }),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      status: "fail",
      data: err,
    });
  }
};

module.exports = {
  signup,
  login,
};
