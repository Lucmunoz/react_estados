import { useState } from 'react'
import Registro from "./components/Registro.jsx"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registro/>
    </>
  )
}

export default App
