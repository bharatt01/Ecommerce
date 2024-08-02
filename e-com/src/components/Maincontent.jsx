import React from 'react'
import './maincontent.css'
import { Link } from 'react-router-dom';
function Maincontent() {
  return (
    <>

                     {/* New Arrivals  */}
    {/* <h2>This is sale page where sale is live</h2> */}
 
  

                     {/* New Arrivals  */}
   <h1 id='newarrivals'>NEW ARRIVALS</h1>
  <div className='clothes'>
  <div className='t-shirt'>
    <img src='/Images/Frame 32.png'/>
    <p className='p8'>T-shirt with Tape Details</p>
    <img id='starimg1' src='/Images/star1.png'/>
    <div className='paisa'>
      $120
    </div>
  </div>
  <div className='t-shirt'>
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
  <div className='t-shirt'>
    <img src='/Images/Frame 35.png'/>
    <p className='p8'>Checkered Shirt</p>
    <img id='starimg3' src='/Images/star1.png'/>
    <div className='paisa'>
      $180
    </div>
  </div>
  <div className='t-shirt'>
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
                    {/* Top Selling    */}
 <h1 id='newarrivals'>TOP SELLING</h1>
  <div className='clothes'>
  <div className='t-shirt'>
    <img src='/Images/Frame 33.png'/>
    <p className='p8'>Vertical Striped Shirt</p>
    <img id='starimg1' src='/Images/star1.png'/>
    <div className='paisa'>
      $212
    </div>
    <div className='paisa1'>
      $232 
      <div className='hr'>
      <hr class="new4"></hr>
      </div>
      <button className='b20' type='button'>-20%</button>
    </div>
  </div>
  <div className='t-shirt'>
    <img src='/Images/Frame 32.png'/>
    <p className='p8'>Courage Graphic T-shirt</p>
    <img id='starimg3' src='/Images/star1.png'/>
    <div className='paisa'>
      $145
    </div>
  </div>
  <div className='t-shirt'>
    <img src='/Images/Frame 35.png'/>
    <p className='p8'>Loose Fit Bermuda Shorts</p>
    <img id='starimg3' src='/Images/star1.png'/>
    <div className='paisa'>
      $80
    </div>
  </div>
  <div className='t-shirt'>
    <img src='/Images/Frame 34.png'/>
    <p className='p8'>Faded Skinny Jeans</p>
    <img id='starimg4' src='/Images/star1.png'/>
    <div className='paisa'>
      $210
    </div>
  </div>
  </div>
  <center>
  <button id='b2' type='button'>View All</button>
  </center> 
   {/* container images stored  */}
   <div className='container'>
   <h1 id='c2'>BROWSE BY DRESS STYLE</h1>
   <img  id='f1'src='/Images/Frame 61.png'/>
   <img  id='f2'src='/Images/Frame 62.png'/>
   <img  id='f3'src='/Images/Frame 64.png'/>
   <img  id='f4'src='/Images/Frame 63.png'/>
  </div> 
   {/* Our Happy Customers */}
   <h1 id='hp'>OUR HAPPY CUSTOMERS</h1>
  <div className='rating'>
    <p id='pp'>this is the<br/>
                      throukunal<br/>
                      throughhh<br/>
    </p>
    <div className='rating1'>
    <img src='/Images/rating 5.png'/>
    <h4>Sarah M.</h4>
    <img id='t1'src='/Images/tick1.jpg'/>
    <p id='p8'>"I'm blown away by the quality and style of the<br/>
    clothes i recievd from Shop.co. From casual<br/>
    wear to elegant dresses,every piece I've bought<br/>
    has exceeded my expectations".
    </p>
      </div> 
       {/* 2??  */}
      <div className='rating2'>
    <img src='/Images/rating 5.png'/>
    <h4>Sarah M.</h4>
    <img id='t1'src='/Images/tick1.jpg'/>
    <p id='p8'>"I'm blown away by the quality and style of the<br/>
    clothes i recievd from Shop.co. From casual<br/>
    wear to elegant dresses,every piece I've bought<br/>
    has exceeded my expectations".
    </p>
      </div> 
       333 
      <div className='rating3'>
    <img src='/Images/rating 5.png'/>
    <h4>Sarah M.</h4>
    <img id='t1'src='/Images/tick1.jpg'/>
    <p id='p8'>"I'm blown away by the quality and style of the<br/>
    clothes i recievd from Shop.co. From casual<br/>
    wear to elegant dresses,every piece I've bought<br/>
    has exceeded my expectations".
    </p>
      </div>
      <div className='rating4'> 
     <img src='/Images/rating 5.png'/> 
     <h4>Sarah M.</h4>
    <img id='t1'src='/Images/tick1.jpg'/>
    <p id='p8'>"I'm blown a<br/>
    clothes i r<br/>
    wear to elegant<br/>
    has exceeded my ".
    </p>
      </div>
  </div> 
  {/* STAY UPTO DATE  */}
  <div className='stay'>
  <h1 id='stay1'>STAY UPTO DATE ABOUT</h1>
  <input id='inp'type='text' placeholder='Enter your email address'></input>
   <img id='email'src='/images/email.png'/>
  <h1 id='stay2'>OUR LATEST OFFERS</h1>
  <input id='inp1'type='text' placeholder='Subscribe to newsletter'></input>
  </div>
  <div className='lastdiv'>
  <h1 id='shop1'>SHOP.CO</h1>
  <p id='lastp'>we have clothes that suits your style and<br/></p>
    <p id='lastp1'>which you're proud to wear.From<br/></p>
    <p id='lastp2'>womer to men</p>
  
  <img id='ls'src='/Images/social logo.png'/> 
   {/* company  */}
   <h2 id='lh2'>Company</h2>
  <p id='llp'>About</p>
  <p id='llp1'>Features</p>
  <p id='llp2'>Works</p>
  <p id='llp3'>Career</p> 
  {/* <help>  */}
   <h2 id='lh3'>Help</h2>
  <p id='l1'>Customer Support</p>
  <p id='l2'>Delivery Details</p>
  <p id='l3'>Terms & Conditions</p>
  <p id='l4'>Privacy Policy</p>
   {/* faq  */}
   <h2 id='lh4'>F A Q</h2>
  <p id='cs'>Account</p> 
  <p id='cs1'>Manage Deliveries</p>
  <p id='cs2'>Orders</p>
  <p id='cs3'>Payments</p> 
  {/* resources */}
   <h2 id='lh5'>RESOURCES</h2> 

  <p id='Fb'>Free eBooks</p>
  <p id='Fb1'>Development Tutorial</p>
  <p id='Fb2'>How to-Blog</p>
  <p id='Fb3'>Youtube Playlist</p> 

  <div className='hr'>
      <hr class="new6"></hr>
      </div>
      <p id='Fb4'>Shop.co &copy; 2000-2024. All Rights Reserved.</p>
      <img id='ms'src='/Images/s12.png'/> 
  </div>
  
    </>
  )
}

export default Maincontent;