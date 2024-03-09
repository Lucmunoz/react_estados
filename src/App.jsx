import { useState } from 'react'
import Registro from "./components/Registro.jsx"
import "./index.css"

function App() {

  /*  En virtud de lo que solicita el punto 5.3 del desafío, se define un state en el componente App el cual almacena como objeto
      el mensaje de error. Este objeto se compone de tres propiedades o keys:
      
      - error: Esta propiedad tendrá valor true o false y se utilizará como flag para renderizar el componente.
      - mensaje: Esta propiedad tendra el string del mensaje a mostrar
      - color: Esta propiedad tendrá el string del color de la alerta. Según la documentación de bootstrap este puede ser: primary, danger, dark, etc. 
  */
  
  const [alert, setAlert] = useState({ error: "", mensaje: "", color: "" })

  return (
    <>
      <Registro obtenerAlert_App={setAlert} alert={alert}/>
    </>
  )
}

export default App
