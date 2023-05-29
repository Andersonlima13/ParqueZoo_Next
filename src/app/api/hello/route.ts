//import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse} from 'next/server'
/*export async function PUT(Response) {
  return Response.status(200).json({
    data: [
      {
        id : 0, msg : "pegaaaaaa"}
    ]
  })
}
*/

/*export async function POST(Response){
  return new Response("alou alo meus amigos")
}
*/

export async function GET(){
    const usuarios = {
      id : 1,
      name : "anderson",
    };

    return NextResponse.json({data : usuarios})
}