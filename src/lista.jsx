import { useState } from "react";

function Listas (){
    const[nombres, setNombres]= useState(["Ana","Luis","Carlos","Daniel","Gabriel"]);
    return(
         <div>
            <h3>Lista de Nombres</h3>
            <ul>
                {nombres.map((nombre, index)=>(
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
            <button onClick={()=> setNombres(nombres.slice(0, -1))}></button>
            Eliminar ultimo
        </div>
    )
}

export default Listas;
