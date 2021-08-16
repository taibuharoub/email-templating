/* eslint-disable no-unused-vars */
import sendRoutes from "./send.js";

export default (app) => {
  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Default Index.js" });
  });
  app.use("/send", sendRoutes);
};
