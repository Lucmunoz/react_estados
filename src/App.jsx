import { useState } from 'react'
import Registro from "./components/Registro.jsx"
import Alert from "./components/Alert.jsx"
import "./index.css"

function App() {
  const [alert, setAlert] = useState({ error: "", mensaje: "", color: "" })

  return (
    <>
      <div className='container col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-5 text-center gap'>
        <Registro obtenerAlert={setAlert} />
      </div>
      {alert.error ? <Alert color={alert.color} mensaje={alert.mensaje} /> : ""}
    </>
  )
}

export default App
