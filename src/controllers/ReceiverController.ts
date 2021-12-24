import { Request, Response } from 'express';
import { ReceiverService } from '../services/ReceiverService';

import getDataToDatabade from '../utils/dataColect';


export default new class ReceiverController {

 async create(req: Request, res: Response) {
  const { name, cpf, receivedData, userId } = req.body;

  const last_received = getDataToDatabade(receivedData);

  const createReceiverService = new ReceiverService();

  const result = await createReceiverService.create({ name, cpf, last_received, userId });

  if (result instanceof Error) return res.status(400).json(result.message);

  return res.json(result);
 }

 async show(req: Request, res: Response) {

  const receiverService = new ReceiverService();
  const response = await receiverService.showAll();

  res.status(200).json(response);

 }

}