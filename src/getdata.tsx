import mysql from "mysql2/promise"


export default async function handler(req:any , res:any) {
    
    const dbconnection = await mysql.createConnection({
        host : "localHost",
        user: "root",
        password: "12345",
        database: "zoologico",
    });

    try {

    }
    catch(err){
        res.status(500).json(err);
    }

res.status(200).json({ name: "Testando BD"});

  }
  