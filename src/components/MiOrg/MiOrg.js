import './MiOrg.css';

function MiOrg(props) {

    return(
        <section className="org__section">
            <h3 className='title'>Mi organización</h3>
            <img onClick={props.cambiarMostrarForm} src='/img/add.png' alt='add'/> 
        </section>
    )
}

export default MiOrg;