import './Colaborador.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Colaborador(props) {

    const {nombre,puesto,foto,equipo,id,fav} = props.datos;
    const destaque = props.destaque;
    const {eliminarColaborador,actualizarFavorito} = props;

    return (
        <div className='colaborador'>
            <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)}/>
            <div className='colaborador__encabezado' style={{backgroundColor:destaque}}>
                <img src={foto} alt='Foto de perfil'/>
            </div>
            <div className='colaborador__datos'>
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav ? <AiFillHeart className='heart' onClick={() => actualizarFavorito(id)} color="red"/> : <AiOutlineHeart className='heart' onClick={() => actualizarFavorito(id)}/>}
            </div>
        </div>
    )
}

export default Colaborador