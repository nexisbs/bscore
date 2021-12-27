import { Request, Response, NextFunction } from "express";
import joi from 'joi';



/**
 * Used to validate a POST params
 * 
 * @param schema 
 * @returns 
 */
export default function validateParams(schema:joi.Schema){

    return function(req: Request, res: Response, next: NextFunction){

        let result = schema.validate(req.body);

        if(result.error){

            // @TODO use error class, which will be exported in index.ts file
            return next(result.error);
        }

        return next();

    }
}