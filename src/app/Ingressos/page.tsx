"use client";
import "../../Css/style.css"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Ingressos(){
    useEffect(() => {
        fetch('/api/hello')
        .then(response => response.json()).then(data => console.log(data))

    })
    return (
        
        <div className="img-container">
          <div className="Funcionario">
            <ul className="top">
              <li className="zoo">Zoologico</li>
              <li>Inicio</li>
              <li>Funcionários</li>
              <li>Ingressos</li>
            </ul>
        </div>
      
          <div className="Container">
            <div className="Top">
                <h1>RESERVAR INGRESSO</h1>
                <div className="Options">
                <input type="radio" id="green" name="ticket_type" value="VERDE"/>
                <label>TIPO A</label>
                <input type="radio" id="green" name="ticket_type" value="VERDE"/>
                <label>TIPO B</label>
              
                
          
              </div>
            </div>
    <div className="section">

  <div className="Elements">
    <div className="Input">
        <input className="Nome" placeholder="Digite seu nome"></input> 
        <input className="Nome" placeholder="Digite seu e-mail"></input>
        
      </div>
      <div className="Price">
      <h1> VALOR : 00,00 R$</h1>
      </div>
       
      <button className="botao">RESERVAR</button>
      <p style={{marginTop : "20px"}}> <b>Confio minhas informações aos autores do conteudo</b> <input type="checkbox"></input></p> 
      

        </div>
        <div className="Cor-area">
                <h1>INGRESSO DO TIPO: AZUL</h1>
                <div className="area">
                  <ul className="Permission-area">
                    <li>Area permitida</li>
                    <li>Area permitida</li>
                    <li>Area permitida</li>
                    <li>Area permitida</li>
                  </ul>
                  </div>
             
            </div>



        </div>
            
      
      
    
          </div>
      
        </div>
    )
}