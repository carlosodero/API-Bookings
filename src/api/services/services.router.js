import Router from 'express';
import * as servicesController from './services.controller.js';

const router = Router();

router.get('/all', servicesController.getAll);

router.post('/', servicesController.create);

router.patch('/update/:id', servicesController.update);

export default router;