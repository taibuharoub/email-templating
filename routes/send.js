import express from "express";
import { postSend } from "../controllers/send.js";

const router = express.Router();

router.route("/").post(postSend);

export default router;
