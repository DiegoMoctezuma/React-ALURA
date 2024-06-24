import './Campo.css';

function Campo(props) {

    const {type = "text"} = props;

    const manejarCambio = (e) => {
        props.set(e.target.value);
    }

    return (
        <div className={`campo campo__${type}`}>
            <label className='campo__label' >{props.titulo}</label>
            <input 
                type={type} 
                placeholder={`Ingresar ${props.placeholder}...`} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default Campo;