import Link from "next/link"
import "../Css/style.css"


export default function Home() {
  return (
    <div>
   
      <div className = "navbar">
     
        <ul className = "top">
          <li className = "zoo">zoologico</li>
          <li>Inicio</li>
          <li>Funcionarios</li>
          <li>Animais</li>
        </ul>
         </div>
         <div> Conheça ja!</div>


     
      <Link href="/dashboard"> dash link</Link>
    </div>

  )
}
