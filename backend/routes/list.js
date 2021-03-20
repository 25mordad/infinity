import express from 'express';

import { getList , getCharac , likeCharac } from '../controllers/list.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/:id', getList);
router.get('/character/:id', getCharac);
router.patch('/likePost/:id',auth,likeCharac);

export default router;
