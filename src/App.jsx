import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import  Layout  from './HOC/Layout'
import Homes from "./pages/Homes"
import Menus from './pages/Menus'
import Reservations from './pages/Reservations'
import Blogs from './pages/Blogs'
import { PiRowsPlusTop } from 'react-icons/pi'
import Gallarys from './pages/Gallarys'
import Abouts from './pages/Abouts'
import Contacts from './pages/Contacts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Routes>
          <Route element={<Layout />}>
          <Route path='/' element={<Homes />} />
          <Route path='/menu' element={<Menus />} />
          <Route path='/reservation' element={<Reservations />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/gallery' element={<Gallarys />} />
          <Route path='/about' element={<Abouts />} />
          <Route path='/contact' element={<Contacts />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
