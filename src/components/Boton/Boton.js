import './Boton.css';

function Boton(props) {
    return (
        <input type="submit" value={props.texto} className="boton"/>
    )
}

export default Boton;