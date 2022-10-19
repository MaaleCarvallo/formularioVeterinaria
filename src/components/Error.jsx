

const Error = ({children}) => {
  return (
    <div 
    className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md"> 
        {children}    
    
    </div>
  )
}

//EN CHILDREN SE VA A ALMACENAR TODO LO QUE SE LE PASE AL COMPONENTE. LA SINTAXIS ES DIFERENTE A LA DE PROPS

export default Error

