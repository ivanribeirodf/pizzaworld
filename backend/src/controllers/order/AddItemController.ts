import { Request, Response } from "express";
import { AddItenService } from "../../services/order/AddItenService";

class AddItemController {
  async handle(req: Request, res: Response){
    const {order_id, product_id, amount}= req.body;

    const addItem = new AddItenService();

    const order = await addItem.execute({
      order_id,
      product_id,
      amount
    })

    return res.json(order)
  }
}

export { AddItemController }