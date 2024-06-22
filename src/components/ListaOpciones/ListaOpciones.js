import './ListaOpciones.css';

function ListaOpciones(props) {

    // Manejo de opciones
    const manejarOpciones = (e) => {
        props.set(e.target.value);
    };

    // Lista de equipos
    const listaEquipos = props.listaEquipos;
    
    return (
        <div className='lista__opciones'>
            <label>Equipos:</label>
            <select onChange={manejarOpciones} value={props.value}>
                {listaEquipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones;