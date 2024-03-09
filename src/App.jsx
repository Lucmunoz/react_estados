import { useState } from 'react'
import Registro from "./components/Registro.jsx"

import "./index.css"

function App() {

  const [alert, setAlert] = useState({ error: "", mensaje: "", color: "" })

  return (
    <>
      <Registro obtenerAlert_App={setAlert} alert={alert} />
    </>
  )
}

export default App
