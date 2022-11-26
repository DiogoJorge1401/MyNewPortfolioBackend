import { Request, Response } from 'express';
import { getInTouchService } from './contactService';

export const getInTouchController = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const { email, message, phone } = req.body;

  try {
    await getInTouchService({
      email, firstName, lastName, message, phone
    })

    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    res.json(error);
  }
}