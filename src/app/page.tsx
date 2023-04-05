import Link from "next/link"
import "../Css/style.css"


export default function Home() {
  return (
    <div>
      <div class = "navbar">
     
     <ul class = "top">
       <li class = "zoo">zoologico</li>
       <li>Inicio</li>
       <li>Funcionarios</li>
       <li>Animais</li>
     </ul>

     
      </div>

      <div class="Home"> 
      <h1 class="News">PRINCIPAL SERVIÇO AQUI</h1>
      <p class="Name"> Paragrafo destacado aqui ivamus scelerisque sit amet nulla vel porta. Fusce gravida euismod leo vitae facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent posuere</p>
      <button class="button"> ver mais </button>
     </div>
   
      


     
      <Link href="/dashboard"> dash link</Link>
    </div>

  )
}