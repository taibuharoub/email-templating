/* eslint-disable no-unused-vars */
import sendRoutes from "./send.js";

export default (app) => {
  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Email Templating" });
    // res.status(200).render("welcome");
  });
  app.use("/send", sendRoutes);
};
