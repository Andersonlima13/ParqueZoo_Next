"use client";
import "../../Css/style.css"
import { useEffect } from "react"


export default function Ingressos(){
    useEffect(() => {
        fetch('/api/hello')
        .then(Response => console.log(Response))

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
                <input type="radio"></input>
                <span> VISITANTE</span>
                <input type="radio"></input>
                <span> PESQUISADOR</span>
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

        </div>
        <div className="Cor-area">
                <h1>INGRESSO TIPO : AZUL</h1>
                
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
    )
}