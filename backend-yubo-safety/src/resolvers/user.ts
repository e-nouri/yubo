import { Router } from "express";
import {
    createOneRequest, readOneRequest, updateOneRequest, deleteOneRequest, readAll
} from '../services/user'

const usersRourter = Router();

usersRourter.get('/', readAll);
usersRourter.post('/', createOneRequest);
usersRourter.get('/:id', readOneRequest);
usersRourter.put('/:id', updateOneRequest);
usersRourter.delete('/:id', deleteOneRequest);

export default usersRourter;