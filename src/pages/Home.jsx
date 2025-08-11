import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'   
import HeroHome from '../components/HeroHome'
import PopularRecipes from '../components/PopularRecipes'

const Home = () => {
  return (
    
    <div>
        <Navbar/>
        <HeroHome/>
      <PopularRecipes/>
        <Footer/>
    </div>
  )
}

export default Home
