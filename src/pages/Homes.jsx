import Home from '../navPages/Homepage/Home'
import React from 'react'
import About from '../navPages/Homepage/About'
import Menu from '../navPages/Homepage/Menu'
import ReservationForm from '../navPages/Homepage/Reservation'
import Blog from '../navPages/Homepage/Blog'
import Email from '../navPages/Homepage/Email'
import Place from '../navPages/Homepage/place'
// import Review from '../navPages/Homepage/review'


function Homes() {
  return (
    <div>
        <Home />
        <About />
        <Place />
        <Menu />
        <ReservationForm />
        {/* <Review /> */}
        <Blog />
        <Email />
    </div>
  )
}

export default Homes