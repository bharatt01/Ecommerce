import React from 'react'
import './loginpage.css'
import { Link } from 'react-router-dom';

function Loginpage() {
  return (
    <>
   
    {/* <h2>This is sale page where sale is live</h2> */}
    <div className='header' >
    <h1 id='hh'>SHOP.CO</h1>
    <img id='log'src='/Images/bert-b-rhNff6hB41s-unsplash 1.png'/>
    <button id='button1' type='button'>Login</button>
    <button id='button2' type='button'>Sign Up</button>
    </div>
    <h3 id='sign'>Sign In Page</h3>
    <button id='button3' type='button'>Continue With Google</button>
    <img id='googleicon'src='/Images/googleicon.png'/>
    <div className='hr'>
      <hr class="new7"></hr>
      <p id='or'>OR</p>
      </div>
      <div className='hr'>
      <hr class="new8"></hr>
      </div>
      <p id='username'>User name or email address</p>
      <input id='userinput1' type='email'/>
      <p id='username1'>Password</p>
      <input id='userinput2' type='password'/>
      <button id='button4' type='button'>Sign Up</button>
      <p id='account'>Have an account?</p>
      <Link> <p id='sin'>Sign in</p></Link>
      {/* upto date */}
      <div className='stay10'>
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
  {/* company
  <h2 id='lh2'>Company</h2>
  <p id='llp'>About</p>
  <p id='llp1'>Features</p>
  <p id='llp2'>Works</p>
  <p id='llp3'>Career</p>
  {/* <help> */}
  </div> 
     
    </>
  )
}

export default Loginpage;


































