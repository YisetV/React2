import { useState } from "react";
function Objeto(){
    const[usuario, setUsuario]= useState({
    nombre:"Juan",
    edad:25,
    });

    function manejarCambio(e){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }
    return (
    <div>
        <h3>Nombre:{usuario.nombre}</h3>
        <h3>Edad:{usuario.edad}</h3>

        <input
        type="text"
        name="nombre"
        value={usuario.nombre}
        onChange={manejarCambio}
        />

        <input
        type="text"
        name="edad"
        value={usuario.edad}
        onChange={manejarCambio}
        />
    </div>
    );
}

export default Objeto;