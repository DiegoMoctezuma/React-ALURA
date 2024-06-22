import './Equipo.css';
import Colaborador from '../Colaborador/Colaborador';

function Equipo(props) {

    //Destructuración
    const {titulo, destaque, fondo} = props.datos;

    return (
        <section className="equipo" style={{backgroundColor:fondo}}>
            <h3 style={{borderColor:destaque}}>{titulo}</h3>
            <div className="equipo__integrantes">
                <Colaborador/>
                <Colaborador/>
            </div>
        </section>
    )
}

export default Equipo;