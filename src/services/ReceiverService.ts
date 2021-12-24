import prisma from "../prismaClient";


interface IReceived {
 name: string,
 cpf: string,
 last_received: Date,
 userId: string
}

export class ReceiverService {


 async create({ name, cpf, last_received, userId }: IReceived): Promise<Error | IReceived> {

  try {
   const response = await prisma.receiver.create({
    data: {
     name,
     cpf,
     last_received,
     userId
    }
   });

   return response;

  } catch (err) {
   return err;
  };
 };


 async showAll(): Promise<Error | IReceived[]> {

  try {
   const response = await prisma.receiver.findMany();

   return response;
  } catch (err) {
   return err;
  }
 }
}