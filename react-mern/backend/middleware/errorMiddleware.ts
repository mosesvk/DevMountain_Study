import { NextFunction, Request, Response } from 'express';
import {node_env} from '../utils/config'
import httpException from '../utils/httpException'

export const errorHandler = (
  err: httpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).json({
    message: message,
    stack: node_env === 'production' ? null : err.stack
  })
};
