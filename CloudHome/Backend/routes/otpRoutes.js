const express = require("express");
const {generateOtp,verifyOtp} = require('../controller/otpController')

const otpRouter = express.Router();

otpRouter.get('/generate', generateOtp);
otpRouter.post('/verifyOtp', verifyOtp)

module.exports = otpRouter;
