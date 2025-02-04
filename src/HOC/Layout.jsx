import React from 'react'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout