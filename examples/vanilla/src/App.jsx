import { useState } from 'react'
import './App.css'
import { HelloWord } from 'chatface'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld name="Chandra" />      
    </>
  )
}

export default App
