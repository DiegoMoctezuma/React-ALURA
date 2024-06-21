import './CampoTexto.css';

function CampoTexto(props) {
    return (
        <div className='campo__texto'>
            <label className='campo__label' >{props.titulo}</label>
            <input type='text' placeholder={`Ingresar ${props.placeholder}...`} />
        </div>
    )
}

export default CampoTexto;