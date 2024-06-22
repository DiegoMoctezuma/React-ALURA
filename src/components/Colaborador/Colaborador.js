import './Colaborador.css';

function Colaborador(props) {

    const {nombre,puesto,foto,equipo} = props.datos;
    const destaque = props.destaque;

    return (
        <div className='colaborador'>
            <div className='colaborador__encabezado' style={{backgroundColor:destaque}}>
                <img src={foto} alt='Foto de perfil'/>
            </div>
            <div className='colaborador__datos'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Colaborador