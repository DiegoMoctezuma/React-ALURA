import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';

export default function App() {

  // Estado
  const [mostrarForm,actualizarMostrarForm] = useState(false);
  const cambiarMostrarForm = () => {
    actualizarMostrarForm(!mostrarForm);
  };

  // Lista de equipos
  const listaEquipos = [
    {
      titulo:"Programación",
      destaque:"#57C278",
      fondo:"#D9F7E9"
    },
    {
      titulo:"Front End",
      destaque:"#82CFFA",
      fondo: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      destaque:"#A6D157",
      fondo:"#F0F8E2"
    }, 
    {
      titulo:"Devops",
      destaque:"#E06B69",
      fondo:"#FDE7E8"
    }, 
    {
      titulo:"UX y Diseño",
      destaque:"#DB6EBF",
      fondo:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      destaque:"#FFBA05",
      fondo:"#FFF5D9"
    }, 
    {
      titulo:"Innovación y Gestión",
      destaque:"#FF8A29",
      fondo:"#FFEEDF"
    }
  ];


  return (
    <div>
      <Header/>
      {mostrarForm && <Form datos={listaEquipos.map(equipo => equipo.titulo)}/>}
      <MiOrg cambiarMostrarForm={cambiarMostrarForm}/>
      {listaEquipos.map((equipo) => <Equipo key={equipo.titulo} datos={equipo}/>)}
    </div>
  );
}