import { useState } from 'react';
import './CampoTexto.css';

function CampoTexto(props) {

    const manejarCambio = (e) => {
        props.set(e.target.value);
    }

    return (
        <div className='campo__texto'>
            <label className='campo__label' >{props.titulo}</label>
            <input 
                type='text' 
                placeholder={`Ingresar ${props.placeholder}...`} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    )
}

export default CampoTexto;