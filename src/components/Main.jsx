import { useState } from "react"
import './Main.css'
export const Main = ({titulo, nombre,secundaria, Algo_de_mi, Tecnologia_y_Habilidades}) => {

const [mostrar, setMostrar] = useState(false)
const mostrarTodo = () => {
  setMostrar(true)
}
const ocultar= () => {
  setMostrar(false)
}

return (
  <div class="container"> 
<div className="card" >
  <div>mi nombre es</div>
  <h2>{nombre}</h2>
  <div>Mi Titulo de Universidad</div>
  <h2>{titulo}</h2>

  <div>Mi Secundaria</div>
  <h2>{secundaria}</h2>

  <div>Actualidad</div>
  <h1>{Algo_de_mi}</h1>
  <h1>Tescnologia y Habilidades</h1>
  
<button className= "boton"onClick={mostrarTodo}>Mostrar mas</button>
{ mostrar && Tecnologia_y_Habilidades && (
  <> 
  
  <ul className="tecnologias-lista">
    {Tecnologia_y_Habilidades.map((len, index) =>(
      <li key={index}>{len}</li>
    ))
    }
  </ul> 
  <button className="boton"onClick={ocultar}>Ocultar</button>
  
  </>
)}
</div>
</div>
  
)
}