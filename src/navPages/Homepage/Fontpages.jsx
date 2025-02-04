import React from 'react'
import Home from './Home'
import Footer from '../../Components/Footer'
import MenuPage from './Menu'
import ReservationForm from './Reservation'
import About from './About'
import Blog from './Blog'
import Email from './Email'

function Fontpages() {
  return (
    <div>
        <Home />
        <About />
        <MenuPage />
        <ReservationForm />
        <Blog />
        <Email />
        <Footer />
    </div>
  )
}

export default Fontpages