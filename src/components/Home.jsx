import React from 'react'
import Navbar from './Navbar'
import Productdata from './Productdata'
// import Homecontainer from '../containers/Homecontainer'
const Home = () => {
  return (
    <div>
    <h1>Blog page</h1>
    <Navbar/>
    {/* <Homecontainer/> */}
    <Productdata></Productdata>
    </div>
  )
}

export default Home