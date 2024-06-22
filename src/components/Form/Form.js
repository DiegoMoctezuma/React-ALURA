import { useState } from "react";
import "./Form.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

function Form(props) {

    // Nombre
    const [nombre,setNombre] = useState('');

    // Puesto
    const [puesto,setPuesto] = useState('');

    // Foto
    const [foto,setFoto] = useState('');

    //Equipo
    const [equipo,setEquipo] = useState('');

    // Envio
    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        console.log(datosEnviar);
    };

    return (
        <section className="form__container">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="nombre" 
                    valor={nombre}
                    set={setNombre}
                    required 
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="puesto" 
                    valor={puesto}
                    set={setPuesto}    
                    required 
                />
                <CampoTexto 
                    titulo="Foto" 
                    placeholder="enlace de foto" 
                    valor={foto}
                    set={setFoto}
                    required 
                />
                <ListaOpciones
                    valor={equipo}
                    set={setEquipo}
                    listaEquipos={props.datos}
                />
                <Boton texto="Crear"/>
            </form>
        </section>
    )
}

export default Form;