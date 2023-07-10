import express from "express";

import { getEmailDigest } from "../controller/emaildigest.js";

const router = express.Router();

router.post('/sending-email-digest', getEmailDigest);

export default router;