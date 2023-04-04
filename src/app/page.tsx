import Link from "next/link"
import "../Css/style.css"


export default function Home() {
  return (
    <div >
   
      <div className = "navbar">
     
        <ul className = "top">
          <li className = "zoo">zoologico</li>
          <li>Inicio</li>
          <li>Funcionarios</li>
          <li>Animais</li>
        </ul>

        
         </div>

         <div className="Home"> 
         <h1 className="News">Conheça ja!</h1>
         </div>
         


     
      <Link href="/dashboard"> dash link</Link>
    </div>

  )
}
