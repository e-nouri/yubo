import { Response, Request } from "express";

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


export { createOneRequest,
    readOneRequest,
    updateOneRequest,
    deleteOneRequest
}
