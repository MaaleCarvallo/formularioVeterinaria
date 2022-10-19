import {useState} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {

  const [pacientes, setPacientes] = useState ([]);
  
  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
      <Formulario
        pacientes = {pacientes} //VAN POR ORDEN, PRIMERO LA VARIABLE Y DESPUES EL MODIFICADOR 
        setPacientes={setPacientes}
      />
      <ListadoPacientes
        pacientes = {pacientes}
      />
      </div>
      
    </div>
  )
}

export default App
