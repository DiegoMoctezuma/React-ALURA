import './Colaborador.css';

function Colaborador() {
    return (
        <div className='colaborador'>
            <div className='colaborador__encabezado'>
                <img src='https://avatars.githubusercontent.com/u/99150459?v=4' alt='Foto de perfil'/>
            </div>
            <div className='colaborador__datos'>
                <h4>Diego Moctezuma</h4>
                <h5>Programador</h5>
            </div>
        </div>
    )
}

export default Colaborador