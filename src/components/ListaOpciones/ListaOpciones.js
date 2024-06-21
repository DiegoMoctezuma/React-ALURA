import './ListaOpciones.css';

function ListaOpciones(props) {

    // Manejo de opciones
    const manejarOpciones = (e) => {
        props.set(e.target.value);
    };

    //MAP
    const listaEquipos = ["Programación", "Front End", "Data Science", "Devops", "UX y Diseño", "Móvil", "Innovación y Gestión"];

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