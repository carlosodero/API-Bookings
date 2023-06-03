import Router from 'express';
import * as awardsController from './awards.controller.js';

const router = Router();

router.get('/all', awardsController.getAll);

router.post('/', awardsController.create);

export default router;
