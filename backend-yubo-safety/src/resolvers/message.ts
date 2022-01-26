import { Router } from "express";
import {
    createOneRequest, readOneRequest, updateOneRequest, deleteOneRequest
} from '../services/user'

const messagesRourter = Router();

messagesRourter.post('/', createOneRequest);
messagesRourter.get('/:id', readOneRequest);
messagesRourter.put('/:id', updateOneRequest);
messagesRourter.delete('/:id', deleteOneRequest);

export default messagesRourter;