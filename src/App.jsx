import { useState } from 'react'


import './components/Main.css'
import  Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Home />
       </>
  )
}

export default App
