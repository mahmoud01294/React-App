
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


import React from 'react'

function Layout() {
  return (
    <>
   <Navbar />

   <Outlet />

   <Footer />
    
    </>
  )
}

export default Layout