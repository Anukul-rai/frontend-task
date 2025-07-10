import React from 'react'
import Testiomonials from './components/Testiomonials'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes ,Route, BrowserRouter} from 'react-router-dom'
import Feature from './components/Feature'
import Stats from './components/Stats'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Testiomonials/>}/>
          <Route path='/feature' element={<Feature/>}/>
          <Route path='/stats' element={<Stats/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
