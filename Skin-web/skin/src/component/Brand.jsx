import React from 'react'
import './Brand.css'
import prodactData from './brandData.json';



function Brand() {
  return (
<div className='brandspage'>
  <div className="topbrands">
    <h1>Brands</h1>
<p>Our Korean Skincare category awaits you with leading products from Korean brands, solutions tailored to your skin type, and products enriched with natural ingredients.</p>
  </div>

  <div className="brands">
  {prodactData.map(podact=>(
    <div className="brand">
      <img  src={podact.image}/>
      <h3>{podact.brand}</h3>
    </div>
  ))}
   
  </div>

</div>


  )
}

export default Brand
