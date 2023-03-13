import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import {BsFillHandThumbsUpFill , BsFillHandThumbsDownFill } from "react-icons/bs";
const Productdata = () => {

const [mydata , setmydata] = useState()
// const [mydata2 , setmydata2] = useState()

const getData =()=>{
  axios.get("https://fakestoreapi.com/products/").then((res)=> setmydata(res.data))
  // axios.get("https://api.escuelajs.co/api/v1/categories").then((res2)=> setmydata2(res2.data))

}

useEffect(()=>{
  getData();
})

  return (
    <div className='main'>
    <div className='Cur-product'>
    {mydata && mydata.map((res)=>{
    return <div className='main-box' key={res.id}>
          <div className='img-box'>
              <img className='myimg' width='30%' src={res.image}/>
              <span className='img-content'>
              <h1>Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sed.</p>
                <button className='open'><b>Open</b></button>
                <span className='likeicons'>
                <BsFillHandThumbsUpFill/>
                <BsFillHandThumbsDownFill/>
                </span>

              </span> 
          </div>
         
          </div>
    })
    }
    </div>
    
    </div>
    
    
  )
}

export default Productdata