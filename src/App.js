import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Velvet from './Details/Velvet'
import Vanilla from './Details/Vanilla'
import ClassicChoco from './Details/CLassicChoco'
import Pineapple from './Details/Pineapple'
import ChocoFudge from './Details/ChocoFudge'
import ChocoLava from './Details/ChocoLava'
import GermanChoco from './Details/GermanChoco'
import BlackForest from './Details/BlackForest'
import Traditional from './Details/Traditional'
import Light from './Details/Light'
import Citrus from './Details/Citrus'
import Italian from './Details/Italian'
import Stollen from './Details/Stollen'
import Torte from './Details/Torte'
import King from './Details/King'
const App = () => {
  return (
    <html>
      <body>
        <div>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/pages/Contact" element={<Contact/>}/>
              <Route path='/pages/Signup' element={<SignUp/>}/>
              <Route path="/pages/Velvet" element={<Velvet/>}/>
              <Route path="/pages/Vanilla" element={<Vanilla/>}/>
              <Route path="/Details/CLassicChoco" element={<ClassicChoco/>}/>
              <Route path='/Details/Pineapple' element={<Pineapple/>}/>
              <Route path='/Details/ChocoFudge' element={<ChocoFudge/>}/>
              <Route path='/Details/ChocoLava' element={<ChocoLava/>}/>
              <Route path='/Details/GermanChoco' element={<GermanChoco/>}/>
              <Route path='/Details/BlackForest' element={<BlackForest/>}/>
              <Route path='/Details/Traditional' element={<Traditional/>}/>
              <Route path='/Details/Light' element={<Light/>}/>
              <Route path='/Details/Citrus' element={<Citrus/>}/>
              <Route path='/Details/Italian' element={<Italian/>}/>
              <Route path='/Details/Stollen' element={<Stollen/>}/>
              <Route path='/Details/Torte' element={<Torte/>}/>
              <Route path='/Details/King' element={<King/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </body>
      <div className='footer'>
        <div>© 2024 CAKEIFBUY. All Rights reserved</div>
        <div class="number">Contact Us: +123-456-7890 | Email: urlastcake@gmail.com</div>
      </div>
    </html>
  )
}

export default App
