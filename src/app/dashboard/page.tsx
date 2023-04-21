"use client";

import { useEffect } from "react"
import "../../Css/style.css"






export default function Dashboard() {
  useEffect(() => {
    fetch('api/hello')
    .then(response => response.json())
    .then(data => console.log(data))

  }, [])


  return(
  <div>
    <div className= "Funcionario">
      <ul className="add">
      <li>Nome</li>
       <input></input>

         <li>Cpf</li>
          <input></input>
        <li>Cargo</li> 
        <input></input>
        <li>Email</li> <input></input>
        <button >ADD</button>
      </ul>
    
   
   </div>
  


</div>
 

 
  )
} 
   


  