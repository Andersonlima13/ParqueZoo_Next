import Link from "next/link"
import "../Css/style.css"


export default function Home() {
  return (
    <div>
      <div className = "navbar">
        <ul className = "top">
         <li className = "zoo">zoologico</li>
         <li>Inicio</li>
         <li > <Link href="/dashboard">Funcionarios</Link></li>
         <li> <Link href="/Ingressos">Ingressos</Link></li>
       </ul>

     
      </div>

      <div className="Home"> 
      <h1 className="News">PRINCIPAL SERVIÇO AQUI</h1>
      <p className="Name"> Paragrafo destacado aqui ivamus scelerisque sit amet nulla vel porta. Fusce gravida euismod leo vitae facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent posuere</p>
      <button className="button"> ver mais </button>
     </div>
   
      


     
     
    </div>

  )
}