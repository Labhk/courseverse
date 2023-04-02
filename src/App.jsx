import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/header'
import Homebody from './components/homebody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Homebody />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
