import { useState } from "react";
import "./Form.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { v4 as uuid } from "uuid";

function Form(props) {

    const {registrarColaborador,crearEquipo} = props;

    // Envio nuevo colaborador
    const envioColaborador = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuid()
        };
        registrarColaborador(datosEnviar);
    };
    const [nombre,setNombre] = useState('');
    const [puesto,setPuesto] = useState('');
    const [foto,setFoto] = useState('');
    const [equipo,setEquipo] = useState('');

    // Envio nuevo equipo
    const envioEquipo = (e) => {
        e.preventDefault();

        let datosEnviar = {
            titulo,
            destaque: color,
            id: uuid()
        };
        crearEquipo(datosEnviar);
    }
    const [titulo,setTitulo] = useState('');
    const [color,setColor] = useState('');

    return (
        <section className="form__container">
            <form onSubmit={envioColaborador}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="nombre" 
                    valor={nombre}
                    set={setNombre}
                    required 
                />
                <Campo
                    titulo="Puesto" 
                    placeholder="puesto" 
                    valor={puesto}
                    set={setPuesto}    
                    required 
                />
                <Campo
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
            <form onSubmit={envioEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="titulo" 
                    valor={titulo}
                    set={setTitulo}
                    required 
                />
                <Campo
                    titulo="Color" 
                    placeholder="color en Hex" 
                    valor={color}
                    set={setColor}
                    type="color"
                    required 
                />
                <Boton texto="Registrar"/>
            </form>
        </section>
    )
}

export default Form;