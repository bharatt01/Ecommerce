import React from 'react'
import './Card.css'
function Card({ url , url2, title, prize, discount }) {
  return (
    <>

      <div className='t-shirt10'>
      <h1>NEW Arrivals</h1>  
    <img className='image' src={`${url}`}/>
    <p className='p81'>{title}</p>
    <img className='starimg20' src={`${url2}`}/>
    <div className='paisa'>
      {prize}<br/>
      {discount}<br/>
      {/* {products.offer}
      {products.button} */}
    </div>
    </div>
    </>
  )
}

export default Card
