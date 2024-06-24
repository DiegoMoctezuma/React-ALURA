import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';
import {v4 as uuid} from 'uuid';

export default function App() {

  // Estado form
  const [mostrarForm,actualizarMostrarForm] = useState(false);
  const cambiarMostrarForm = () => {
    actualizarMostrarForm(!mostrarForm);
  };

  // Lista de equipos
  const [listaEquipos, setListaEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      destaque:"#57C278",
      fondo:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      destaque:"#82CFFA",
      fondo: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      destaque:"#A6D157",
      fondo:"#F0F8E2"
    }, 
    {
      id: uuid(),
      titulo:"Devops",
      destaque:"#E06B69",
      fondo:"#FDE7E8"
    }, 
    {
      id: uuid(),
      titulo:"UX y Diseño",
      destaque:"#DB6EBF",
      fondo:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      destaque:"#FFBA05",
      fondo:"#FFF5D9"
    }, 
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      destaque:"#FF8A29",
      fondo:"#FFEEDF"
    }
  ]);

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    setListaEquipos([...listaEquipos, nuevoEquipo]);
  }
  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    const equiposActualizados = listaEquipos.map((equipo) => {
      if(equipo.id === id){
        equipo.destaque = color;
      }
      return equipo;
    });
    setListaEquipos(equiposActualizados);
  }

  //Registro de colaborador
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav:false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    }
  ]);
  const registrarColaborador = (colaborador) => {
    // Spread operator
    setColaboradores([...colaboradores, colaborador]);
  };
  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador',id);
    const colaboradoresActualizados = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(colaboradoresActualizados);
  };
  //Actualizar favorito
  const actualizarFavorito = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    setColaboradores(colaboradoresActualizados);
  }


  return (
    <div>
      {/* Header */}
      <Header/>

      {/* Formulario */}
      {
        mostrarForm && 
        <Form 
          datos={listaEquipos.map(equipo => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      {/* MiOrg - boton y titulo */}
      <MiOrg cambiarMostrarForm={cambiarMostrarForm}/>

      {/* Lista de equipos */}
      {
        listaEquipos.map((equipo) => 
          <Equipo 
            key={equipo.titulo}   
            datos={equipo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            actualizarFavorito={actualizarFavorito}
          />
        )
      }
      <Footer/>
    </div>
  );
}