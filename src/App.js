import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';

export default function App() {

  // Estado
  const [mostrarForm,actualizarMostrarForm] = useState(true);
  const cambiarMostrarForm = () => {
    actualizarMostrarForm(!mostrarForm);
  };

  return (
    <div>
      <Header/>
      {mostrarForm && <Form/>}
      <MiOrg cambiarMostrarForm={cambiarMostrarForm}/>
    </div>
  );
}