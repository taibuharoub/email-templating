/* eslint-disable quotes */
import sendEmail from "../utils/sendGrid.js";

export const postSend = async (req, res, next) => {
  try {
    const { email, subject } = req.body;
    if (!email || !subject) {
      const error = new Error("email and Subject is Required.");
      error.statusCode = 422;
      throw error;
    }
    const options = {
      to: email,
      from: process.env.FROM,
      subject,
      html: `<h1>You successfully signed up!</h1>`,
    };
    await sendEmail(options);
    res.status(200).json({
      success: true,
      message: "Your email has been sent successfully",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
