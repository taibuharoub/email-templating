/* eslint-disable quotes */
import ejs from "ejs";
import sendEmail from "../utils/sendGrid.js";

export const postSend = async (req, res, next) => {
  try {
    const { email, subject } = req.body;
    if (!email || !subject) {
      const error = new Error("email and Subject is Required.");
      error.statusCode = 422;
      throw error;
    }
    const data = await ejs.renderFile("./views/wel.ejs", {
      title: "welcome",
      name: "taibu",
      user_firstname: "taibu haroub",
      confirm_link: "http://targettechnology.com=" + email,
    });
    const options = {
      to: email,
      from: process.env.FROM,
      subject,
      html: data,
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
