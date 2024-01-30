import React, { useState } from 'react'
import Navbar from './compnents/Navbar/Navbar'
import Hero from './compnents/Hero/Hero'
import BestBooks from './compnents/BestBooks/BestBooks'
import Banner from './compnents/Banner/Banner'
import AppStoreBanner from './compnents/AppStoreBanner/AppStoreBanner'
import AllBooks from './compnents/AllBooks/AllBooks'
import Testimonial from './compnents/Testimonial/Testimonial'
import Footer from './compnents/Footer/Footer'

// aos import

import AOS from "aos"
import "aos/dist/aos.css"
import Popup from './compnents/Popup/Popup'

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)
  
  const handleOrderPopup = () => { 
    setOrderPopup(!orderPopup)
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease in sine",
      delay:100,
    });
    AOS.refresh();
},[])

  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200' >
    
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <BestBooks handleOrderPopup={handleOrderPopup} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <Popup handleOrderPopup={handleOrderPopup}
          orderPopup={orderPopup} />
      </div>
    </>
  )
}

export default App
