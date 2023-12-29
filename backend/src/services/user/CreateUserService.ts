import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string
}

class CreateUserService {
  async execute({ name, email, password}: UserRequest){
    
    //Verificar que email foi informado
    if(!email){
      throw new Error("Email incorrect!")
    }
    //Verificar se email já existe
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    //Erro se já existir
    if(userAlreadyExists){
      throw new Error("User already exists!")
    }
    //Criptografar senha do usuario
    const passwordHash = await hash(password,8)


    //Cadastrar usuário
    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password:passwordHash
      },
      select:{
        id:true,
        name:true,
        email:true
      }
    })


    return user;
  }
}

export { CreateUserService }