import { Router } from "express";
import {
    createOneRequest, readOneRequest, updateOneRequest, deleteOneRequest
} from '../services/user'

const mediaRourter = Router();

mediaRourter.post('/', createOneRequest);
mediaRourter.get('/:id', readOneRequest);
mediaRourter.put('/:id', updateOneRequest);
mediaRourter.delete('/:id', deleteOneRequest);

export default mediaRourter;