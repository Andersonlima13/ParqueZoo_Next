import "../../Css/style.css"


export default function Ingressos(){
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
                <h1>
                   Tipo de Ingresso 
                </h1>
            <nav lassName="Form">
            <input type="radio"></input>  
            <select id="select">
                <option value="6th">NomeIncresso1</option>
                <option value="7th">NomeIncresso2</option>
            </select>
            <select id="select">
                <option value="6th">Preço1</option>
                <option value="7th">Preço2</option>
            </select>
            

          
            </nav>
                
            </div>

        </div>
    )
}