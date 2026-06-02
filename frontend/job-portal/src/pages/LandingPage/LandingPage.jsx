import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Footer from './components/Footer'
import toast from 'react-hot-toast'

const LandingPage = () => {
  useEffect(() => {
    const sessionMessage = sessionStorage.getItem("redirectMessage");
    if (sessionMessage) {
      toast.error(sessionMessage);
      setTimeout(() => {
        sessionStorage.removeItem("redirectMessage");
      }, 100);
    }
  }, []);
  return (
    <div className='min-h-screen mb-[100vh]'>
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Footer />
    </div>
  )
}

export default LandingPage
