import { Router } from 'express';
import { getInTouchController } from './contactController';

const routes = Router()

routes.post("/contact", getInTouchController);

export { routes };
