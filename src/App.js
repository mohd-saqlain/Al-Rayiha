import React from 'react'
import "../src/eCommerce/styles.css"
import NavBar from './eCommerce/navBar'
import Comp1 from './eCommerce/homeComp/home1stComp'
import Comp2 from './eCommerce/homeComp/home2ndComp'
import Comp3 from './eCommerce/homeComp/homeComp3'
import Footer from './eCommerce/homeComp/footer'

const App = () => {
  return (
    <>
    <NavBar />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <Footer />
    </>
  )
}

export default App