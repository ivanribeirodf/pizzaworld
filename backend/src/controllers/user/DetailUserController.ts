import { Request, Response } from "express";
import { DatailuserService } from '../../services/user/DatailUserService'

class DetailUserController{
  async handle(req: Request, res: Response){

    const user_id = req.user_id;

     const detailUserService = new DatailuserService();

    const user = await detailUserService.execute(user_id);

    return res.json(user);
  }

}

export { DetailUserController}