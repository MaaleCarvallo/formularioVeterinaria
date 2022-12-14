import {useState, useEffect} from "react"
import Error from "./Error"

//RAFCE
const Formulario = (pacientes, setPacientes) => {  //FUNCION FLECHA MIENTRAS QUE EL HEADER USA LA FUNCION

    const [nombre,setNombre] = useState ('');
    const [propietario,setPropietario] = useState ('');
    const [email,setEmail] = useState ('');
    const [fecha,setFecha] = useState ('');
    const [sintomas,setSintomas] = useState ('');

    const [error,setError] = useState(false)

    const handleSubmit = (e) => {
       e.preventDefault ();

        //VALIDACION DEL FORMULARIO
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            console.log('Hay al menos un campo vacio')

            setError(true)
            return;
        }

        setError(false)

        //OBJETO DE PACIENTE

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        //console.log(objetoPaciente)

        setPacientes([...pacientes, objetoPaciente]) 
        //se utiliza el spread operator para no modificar el arreglo oroginal. Nos devuelve un arreglo nuevo que se asigna inmediatamente a setPacientes.
    
        //REINICIAR EL FORM

        setNombre ('')
        setPropietario ('')
        setEmail ('')
        setFecha ('')
        setSintomas ('')
    }

  return (
    <div className="w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form   onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && <Error><p>Todos los campos son obligatorios</p></Error>}

            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
                <input  id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value = {nombre}
                        onChange = {(e)=> setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                <input  id="propietario"
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value = {propietario}
                        onChange = {(e)=> setPropietario(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electronico</label>
                <input  id="email"
                        type="email" 
                        placeholder="Correo electronico"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value = {email}
                        onChange = {(e)=> setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input  id="alta"
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value = {fecha}
                        onChange = {(e)=> setFecha(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe los sintomas"
                value = {sintomas}
                onChange = {(e)=> setSintomas(e.target.value)}
                />                  
            </div>
            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar paciente"
            />
        </form>
    </div>
  )
}

export default Formulario

