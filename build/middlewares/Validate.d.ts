import { Request, Response, NextFunction } from "express";
import joi from 'joi';
/**
 * Used to validate a POST params
 *
 * @param schema
 * @returns
 */
export default function validateParams(schema: joi.Schema): (req: Request, res: Response, next: NextFunction) => void;
