import express from "express";
import { ZodObject } from "zod";

export const VAL = (schema: ZodObject) => 
async (
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        res
            .status(res.statusCode)
            .json(res.statusMessage);
        next(error);
    }
};


