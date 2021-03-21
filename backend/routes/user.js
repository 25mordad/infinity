import express from "express";
const router = express.Router();

import { signin ,signup , likeCharac } from "../controllers/user.js";
import auth from "../middleware/auth.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.patch('/likePost/:id',auth,likeCharac);

export default router;
