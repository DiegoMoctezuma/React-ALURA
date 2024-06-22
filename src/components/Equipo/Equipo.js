import './Equipo.css';
import Colaborador from '../Colaborador/Colaborador';

function Equipo(props) {

    //Destructuración
    const {titulo, destaque, fondo} = props.datos;
    const {colaboradores} = props;

    return (
        <>
            { colaboradores.length > 0 &&
                <section className="equipo" style={{backgroundColor:fondo}}>
                    <h3 style={{borderColor:destaque}}>{titulo}</h3>
                    <div className="equipo__integrantes">
                        {colaboradores.map((colaborador,index) => <Colaborador destaque={destaque} key={index} datos={colaborador}/>)}
                    </div>
                </section>
            }
        </>
    )
}

export default Equipo;