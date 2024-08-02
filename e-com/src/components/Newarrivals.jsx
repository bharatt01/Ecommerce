// import React from 'react'
import React, {useState,useEffect} from 'react';
import './Newarrival.css'
import Card from './Card';
function Newarrivals() {
  const [product,setProduct]=useState([]);
  
  useEffect(() => {
    console.log("This is useEffect 2");
    fetch('http://localhost:4000/products/product') // api for the get request
    .then(response => response.json())
    .then((data) => 
      { 
        console.log(data.product) 
        setProduct(data.product)
      });
  }, [])

  return (
    <>
   {
    
    product && product.map(( products,index)=>
    
      (
      
<Card  
url={products.url} 
url2={products.url2}
 title={products.title} 
 prize={products.prize} 
 discount={products.discount} ></Card>
  )
    )}
    </>
  )
}

export default Newarrivals
