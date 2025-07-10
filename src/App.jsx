import React from 'react'
import Testiomonials from './components/Testiomonials'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes ,Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Testiomonials/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
