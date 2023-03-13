import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <>
        <nav className='Navbox'>
            <div>
                <ul className='navul'>
                    <li><Link className='navitems' to="/">Home</Link></li>
                    <li><Link className='navitems' to="/">Blog</Link></li>
                    <li><Link className='navitems' to="/">Ratings</Link></li>
                </ul>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar