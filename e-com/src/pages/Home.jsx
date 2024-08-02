import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Maincontent from '../components/Maincontent';
import Topselling from '../components/Topselling';
import Newarrivals from '../components/Newarrivals';
import Other from '../components/Other';
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Newarrivals></Newarrivals>
    <Topselling></Topselling>
    <Other></Other>
    </>
  )
}

export default Home
