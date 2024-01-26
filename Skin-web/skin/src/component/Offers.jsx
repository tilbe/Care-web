import React from 'react'
import './Offer.css'

import IMG1 from './assets/offer.jpg';
import IMG2 from './assets/offer1.jpg';
import IMG3 from './assets/offer2.jpg';
import IMG4 from './assets/offer3.jpg';


function Offers() {
  return (
    <div className='offerpage'>
     <div className="topoffer">
        <h1>Offers</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolores ducimus veritatis eius aliquam est pariatur quasi assumenda architecto beatae corporis eaque atque dolor amet molestiae, aut repudiandae laborum quibusdam.</p>
      </div>

      <div className="offers">
        <div className="offer">
          <img src={IMG1} />
        </div>
        <div className="offer">
          <img src={IMG2} />
        </div>
        <div className="offer">
          <img src={IMG3} />
        </div>
        <div className="offer">
          <img src={IMG4} />
        </div>
      </div>
    </div>
  )
}

export default Offers
