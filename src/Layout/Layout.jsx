import React from 'react'
import Header from '../inc/Header'
import Footer from '../inc/Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../Components/ScrollToTop'



function Layout() {
  return (
    <>
        <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>

        
    </>
  )
}

export default Layout
