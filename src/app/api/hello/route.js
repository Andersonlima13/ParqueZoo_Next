/*import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest , res:NextApiResponse) {
  return res.status(200).json({
    data: [
      {
        id : 0, msg : "pegaaaaaa"}
    ]
  })
}
*/

export async function GET(Response){
  return new Response({
    data : [
      {id : 1 , nome : "anderson ", idade : 19}
    ]
  })
}
