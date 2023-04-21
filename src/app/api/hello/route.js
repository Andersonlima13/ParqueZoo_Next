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

export async function GET(request){
  return new Response("api funcianod funcionandop ")
}
