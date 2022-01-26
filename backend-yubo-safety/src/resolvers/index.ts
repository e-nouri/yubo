import { Router } from 'express';
import usersRourter from './user';
import messagesRourter from './message';
import mediaRourter from './media';

const routes = Router();

routes.use('/users', usersRourter);
routes.use('/messages', messagesRourter);
routes.use('/media', mediaRourter);

export default routes;