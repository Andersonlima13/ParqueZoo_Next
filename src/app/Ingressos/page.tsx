"use client";
import "../../Css/style.css"
import { useEffect } from "react"


export default function Ingressos(){
    useEffect(() => {
        fetch('/api/hello')
        .then(Response => console.log(Response))

    })
    return (
        <div>
            <div className = "Funcionario">
                <ul className = "top">
                    <li className = "zoo">Zoologico</li>
                    <li>Inicio</li>
                    <li>Funcionários</li>
                    <li>Ingressos</li>
                </ul>  

            </div>

            <div className= "Container">
                <h1>Tipo de Ingresso </h1>


<nav className="Form">

        <div className="Options">
            <input type="radio"></input>  
            <span> opção 1</span>
            <input type="radio"></input> 
             <span> opção 1</span>
        </div>

            <div className="Nome">
            <select id="select">
                <option value="6th">NomeIncresso1</option>
                <option value="7th">NomeIncresso2</option>
            </select>
            </div>

             <div className="Price">
            <select id="select">
                <option value="6th">NomeIncresso1</option>
                <option value="7th">NomeIncresso2</option>
            </select>
            </div>
        <div className="Permission">
        <ul className="Permission-area">
            <li>Area permitida</li>
            <li>Area permitida</li>
            <li>Area permitida</li>
            <li>Area permitida</li>
        </ul>
    </div>

    <div className="Cor-area">
        <h1>AREA DE COR AZUL!</h1>
    </div>

    <button className="botao">Comprar!</button>
            

          
            </nav>
                
            </div>

        </div>
    )
}