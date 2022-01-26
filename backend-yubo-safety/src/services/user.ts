import { Response, Request } from "express";
import { User } from "../models";

const readAll = async (req: Request, res: Response) => {
      
    try {
        let offset = parseInt(req.query.offset.toString());
        let limit = parseInt(req.query.limit.toString());

        const count = await User.count({
            distinct: true
        });
          
        const users = await User.findAll({
            where:{}, limit, offset
        });
        res.status(201).json({ users, count });
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'error'});
    }
}

const createOneRequest = (req: Request, res: Response) => {
    console.log(req.body)
    res.status(201).json({message: "New resource created!"});
}

const readOneRequest = (req: Request, res: Response) => {
    console.log(req.body)
    res.status(302).json({message: "Resource found!"});
}

const updateOneRequest = (req: Request, res: Response) => {
    console.log(req.body)
    res.status(301).json({message: "Resource updated!"});
}

const deleteOneRequest = (req: Request, res: Response) => {
    console.log(req.body)
    res.status(202).json({message: "Resource deleted!"});
}


export { readAll, createOneRequest,
    readOneRequest,
    updateOneRequest,
    deleteOneRequest
}
