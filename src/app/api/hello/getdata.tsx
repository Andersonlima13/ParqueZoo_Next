import mysql from "mysql2/promise"


export default async function handler(req:any , res:any) {
    
    const dbconnection = await mysql.createConnection({
        host : "localHost",
        user: "root",
        password: "root",
        database: "caminho",
    });

    try {

    }
    catch(err){
        res.status(500).json(err);
    }

res.status(200).json({ name: "Jhon doe"});

  }
  