import './Equipo.css';
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

function Equipo(props) {

    //Destructuración
    const {titulo, destaque, id} = props.datos;
    const {colaboradores,eliminarColaborador,actualizarColor,actualizarFavorito} = props;

    return (
        <>
            { colaboradores.length > 0 &&
                <section className="equipo" style={{backgroundColor:hexToRgba(destaque,0.6)}}>
                    <input
                        type='color'
                        className='input__color'
                        value={destaque}
                        onChange={(e) => actualizarColor(e.target.value,id)}
                    />
                    <h3 style={{borderColor:destaque}}>{titulo}</h3>

                    <div className="equipo__integrantes">
                        {
                            colaboradores.map((colaborador,index) => 
                                <Colaborador 
                                    destaque={destaque} 
                                    key={index} 
                                    datos={colaborador}
                                    eliminarColaborador={eliminarColaborador}
                                    actualizarFavorito={actualizarFavorito}
                                />
                            )
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default Equipo;