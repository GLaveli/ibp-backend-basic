import { Request, Response } from 'express';

class ApplicationController {
 async info(req: Request, res: Response) {
  try {
   return res.status(200).json({ message: 'Server is onle', code: 1 })
  } catch (err) {
   return err;
  }
 };
};

export { ApplicationController }