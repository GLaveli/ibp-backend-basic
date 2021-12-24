import prisma from "../prismaClient";
import { hash } from 'bcryptjs'

interface IUser {
 name: string,
 email: string,
 password: string
}

export class UserService {

 async create({ name, password, email }: IUser): Promise<string | IUser> {

  try {

   const userExists = await prisma.user.findUnique({ where: { email } });

   if (userExists) return ('User already exists!');

   const passwordHash = await hash(password, 8);

   const response = await prisma.user.create({
    data: {
     name,
     email,
     password: passwordHash
    }
   });

   delete response.password;

   return response;

  } catch (err) {
   return err.message;
  }

 }

 async showAll() {

  try {
   const respose = await prisma.user.findMany({
    select: {
     id: true,
     name: true,
     email: true,
     password: false,
    }
   });



   return respose;
  } catch (err) {
   return err.message;
  }

 }

}