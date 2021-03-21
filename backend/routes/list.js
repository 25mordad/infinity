import express from 'express';

import { getList , getCharac  } from '../controllers/list.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/:id', getList);
router.get('/character/:id', getCharac);


export default router;
