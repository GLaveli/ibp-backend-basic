import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export default new class UserController {
 async create(req: Request, res: Response) {
  const { name, email, password } = req.body;

  const userService = new UserService();
  const response = await userService.create({ name, email, password });

  console.log(response);

  res.status(200).json(response);
 }

 async show(req: Request, res: Response) {

  const userService = new UserService();

  const response = await userService.showAll();

  return res.json(response);

 }

}