import React from 'react'
import './productdetail.css'
import Navbar from './Navbar'
function Onsale() {
  
  return (
    <>
    <Navbar></Navbar>
       <h1 id='productdetail'>hello</h1>
               <img id='shirt1121'src='/Images/1tshirt.png'/>
               <img id='localt'src='/Images/2tshirt.png'/>
               <img id='localt1'src='/Images/22shirt.png'/>
               <img id='localt2'src='/Images/23tshirt.png'/>
               <h1 id='onelife'>ONE LIFE GRAPHIC T-SHIRT </h1>
               {/* star img */}
               <img id='localt3'src='/Images/pstar.png'/>
               {/* price */}
               <div className='productprice'>
                   $260
                   <div className='productp'>
                    $300
                   </div>
                   <div className='productd'>
                   </div>
                   <button className='b40' type='button'>- 40%</button>
                 </div>
                {/* paragraph  */}
                <p id='productpara'>This graphic t-shirt which is perfect for any 
                  occasion. Crafted from a soft and <br/>breathable fabric,
                   it offers superior comfort and style. </p>
                   <div className='producthr'>
                   </div>
                   {/* color */}
                   <p id='selectcolor'>Select Colors</p>
                   {/* <div className='tcolor'> */}
                    <button className='sandy' type='button'></button>
                    <button className='green' type='button'></button>
                    <button className='blue' type='button'></button>
                    <div className='producthr1'>
                    </div>
                    <p id='choosesize'>Choose Size</p>
                    {/* size button */}
                    <button id='small' type='button'>Small</button> 
                    <button id='Medium' type='button'>Medium</button> 
                    <button id='Large' type='button'>Large</button> 
                    <button id='X-Large' type='button'>X-Large</button>
                    <div className='producthr2'>
                    </div> 
                    {/* buttons increment and decrement */}
                    <button id='increment1' type='button'>  -      1      + </button>
                    {/* add to cart button */}
                    <button id='Addc' type='button'>Add to Cart</button>
                    {/* PRODUCT DETAILS */}
    <p id='productdetail'>Product Deatils</p> 
    <div className='producthr3'>
                    </div>   
                    {/* paragraph              */}
                    
                    <p id='sleek'>Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face,  Morgan   is  a  classic <br/>'panto' shape. Named after James Morgan, the engineer who built the Regent's Canal, it features custom<br/> elements including fluid single piece bridge, adjustable nose pads and temple tips based on Constantin<br/> Brâncuşi's Bird in Space.</p>
                    <p id='sleek'>Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face,  Morgan   is  a  classic <br/>'panto' shape. Named after James Morgan, the engineer who built the Regent's Canal, it features custom<br/> elements including fluid single piece bridge, adjustable nose pads and temple tips based on Constantin<br/> Brâncuşi's Bird in Space.</p>
    {/* list */}
    <ul>
      <li id='lis'>99.7% pure titanium front</li>
      <li id='lis'>More than 4hv on the Vickers hardness test.</li>
      <li id='lis'>lon plated to over 0.3μ</li>
      <li id='lis'>Weighs under 5.0g</li>
      <li id='lis'>Adjustable titanium nose pads for a comfortable fit</li>
      <li id='lis'>UV protection</li>
    </ul>
    <div className='producthr4'>
                    </div>
    {/* headings */}
    <h1> <center>YOU MIGHT ALSO LIKE</center></h1>
    {/* clothes images */}
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
  {/* STAY UPTO DATE  */}
  <div className='stay'>
  <h1 id='stay1'>STAY UPTO DATE ABOUT</h1>
  <input id='inp'type='text' placeholder='                   Enter your email address'></input>
   <img id='email'src='/Images/email.png'/>
  <h1 id='stay2'>OUR LATEST OFFERS</h1>
  <input id='inp1'type='text' placeholder='                   Subscribe to newsletter'></input>
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
   <h2 id='lh5'>Resources</h2> 

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

export default Onsale
