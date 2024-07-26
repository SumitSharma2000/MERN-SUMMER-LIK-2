require("dotenv").config();
const nodemailer = require("nodemailer");
const OtpModel = require("../model/otpSchema");
const UserModel = require("../model/userModel");

const sendOtpMail = async (email, otp) => {
  try {
    console.log(`Sending OTP to ${email}`);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      port: 465,
      secure: true,
    });

    const response = await transporter.sendMail({
      from: "noreply@myapp.com",
      to: email,
      subject: "OTP for verification",
      html: `<h1>OTP for verification</h1><p>${otp}</p>`,
    });

    console.log(response);
    return true;
  } catch (error) {
    console.log("ERROR is", error);
    return false;
  }
};

const generateOtp = async (req, res) => {
  try {
    console.log(`Request query:`, req.query);
    const { email, _id } = req.user;
    console.log(`Received email: ${email}`);

    const restrictedTimeForOTP = 10 * 60 * 1000;

    const sentOTPMail = await OtpModel.findOne({
      email,
      createdAt: {
        $gte: Date.now() - restrictedTimeForOTP,
      },
    });

    if (sentOTPMail) {
      res.status(200);
      res.json({
        message: "OTP is already sent to your email",
        status: "success",
        data: {
          createdAt: sentOTPMail.createdAt,
        },
      });
      return;
    }

    console.log("sentOTPMail", sentOTPMail);

    const randomOTP = Math.floor(Math.random() * 9000 + 1000);

    const isMailSent = await sendOtpMail(email, randomOTP);
    if (!isMailSent) {
      res.status(400).json({
        message: "Email parameter is missing",
        status: "error",
        data: {},
      });
      return;
    }

    await OtpModel.create({
      email: email,
      otp: randomOTP,
      userId: _id,
    });

    res.status(201).json({
      message: "OTP sent successfully",
      status: "success",
      email: email,
      data: {},
    });
  } catch (err) {
    console.log("ERROR is", err);
    res.status(500).json({
      message: "Something went wrong",
      status: "error",
      data: err,
    });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    console.log(otp);
    const { email } = req.user;
    const restrictedTimeForOTP = 10 * 60 * 1000;
    const sentOTPMail = await OtpModel.findOne({
      email,
      createdAt: {
        $gte: Date.now() - restrictedTimeForOTP,
      },
    });

    console.log("SentOTPMail" , sentOTPMail)

    if (!sentOTPMail) {
      res.status(400).json({
        message: "OTP expired",
        status: "error",
      });
      return;
    }

    const hashesOTP = sentOTPMail.otp;
    const isCorrect = await sentOTPMail.verifyOtp(otp + "", hashesOTP);
    if (!isCorrect) {
      res.status(400).json({
        message: "Invalid OTP",
        status: "error",
      });
      return;
    }

    await UserModel.findOneAndUpdate({ email }, { isEmailVerified: true });
    res.status(200).json({
      status: "success",
      message: "OTP verified successfully",
      data: {},
    });
  } catch (err) {
    console.log("ERROR in verify otp in backend", err);
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = { generateOtp, verifyOtp };
