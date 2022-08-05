import { useState } from 'react'
import logo from './logo.svg'
import CardProduct from './components/CardProduct/CardProduct'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CardProduct/>
    </div>
  )
}

export default App
