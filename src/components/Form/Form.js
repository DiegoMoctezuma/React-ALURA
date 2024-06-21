import "./Form.css";
import CampoTexto from "../CampoTexto/CampoTexto";

function Form() {
    return (
        <section className="form__container">
            <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="nombre"/>
                <CampoTexto titulo="Puesto" placeholder="puesto"/>
                <CampoTexto titulo="Foto" placeholder="enlace de foto"/>
            </form>
        </section>
    )
}

export default Form;