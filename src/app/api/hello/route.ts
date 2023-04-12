import { NextApiRequest, NextApiResponse } from "next";

export default function Func(req:NextApiRequest , res:NextApiResponse) {
  res.status(200).json({name: 'jhon Doe'})
}
