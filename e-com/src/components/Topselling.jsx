import React from 'react'
import { useNavigate } from 'react-router-dom'
import './maincontent.css'
function Topselling() {
  const navigate = useNavigate();
  function handleClick() {
 
    navigate("/Onsale");
  }
  return (
    <>
       <h1 id='newarrivals'>TOP SELLING</h1>
  <div className='clothes'>
  <div className='t-shirt' onClick={handleClick} >
    <img src='/Images/Frame 32.png'/>
    <p className='p8'>T-shirt with Tape Details</p>
    <img id='starimg1' src='/Images/star1.png'/>
    <div className='paisa'>
      $120
    </div>
  </div>
  <div className='t-shirt' onClick={handleClick} >
    <img src='/Images/Frame 34.png'/>
    <p className='p8'>Skinny Fit Jeans</p>
    <img id='starimg2' src='/Images/star2.png'/>
    <div className='paisa'>
      $240
    </div>
    <div className='paisa1'>
      $260 
      <div className='hr'>
      <hr class="new4"></hr>
      </div>
      <button className='b20' type='button'>-20%</button>
    </div>
  </div>
  <div className='t-shirt' onClick={handleClick} >
    <img src='/Images/Frame 35.png'/>
    <p className='p8'>Checkered Shirt</p>
    <img id='starimg3' src='/Images/star1.png'/>
    <div className='paisa'>
      $180
    </div>
  </div>
  <div className='t-shirt' onClick={handleClick} >
    <img src='/Images/Frame 32.png'/>
    <p className='p8'>Sleeve Striped T-shirt</p>
    <img id='starimg4' src='/Images/star1.png'/>
    <div className='paisa'>
      $130
    </div>
    <div className='paisa1'>
      $160 
      <div className='hr'>
      <hr class="new4"></hr>
      </div>
      <button className='b20' type='button'>-30%</button>
    </div>
  </div>
  </div>
  <center>
  <button id='b2' type='button'>View All</button>
  </center>
  <div className='hr1'>
      <hr class="new5"></hr>
      </div> 
    </>
  )
}

export default Topselling