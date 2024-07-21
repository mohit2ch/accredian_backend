import express from "express";
import { createReferral, getReferrals } from "../conntrollers/referralController.js";

const router = express.Router();

router.route('/').post(createReferral).get(getReferrals);

export default router;