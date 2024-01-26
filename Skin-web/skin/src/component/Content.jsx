import React, { useState } from 'react'
import './Content.css'
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import IMG1 from './assets/main1.jpg';
import IMG2 from './assets/main2.jpg';
import IMG3 from './assets/skincare3.jpg';
import IMG4 from './assets/korean-skincare1.jpg';
import IMG5 from './assets/form1.jpg';
import IMG6 from './assets/form2.jpg';
import IMG7 from './assets/form3.jpg';




import PRD1 from './assets/prodact.jpg';
import PRD2 from './assets/prodact2.jpg';
import PRD3 from './assets/prodact3.jpg';





function Content({ showContent }) {
  const [currentImage, setCurrentImage] = useState(IMG1)

  const handlePrevClick = () => {
    if (currentImage === IMG1) {
      setCurrentImage(IMG3)
    } else if (currentImage === IMG2) {
      setCurrentImage(IMG1)
    } else {
      setCurrentImage(IMG2)
    }

  }

  const handleNextClick = () => {
    if (currentImage === IMG1) {
      setCurrentImage(IMG2)
    } else if (currentImage === IMG2) {
      setCurrentImage(IMG3)
    } else {
      setCurrentImage(IMG1)
    }

  }


  return (
    <div className='profil'>
      <div className="img">
        <img src={currentImage} alt="Skincare" className="image" />
      </div>

      <div className="overlay">
        <FaChevronLeft className='left' onClick={handlePrevClick} />
        <FaAngleRight className='right' onClick={handleNextClick} />
      </div>

      <div className="Toptittle">
        <h1>THE LATEST</h1>
        <p>ADDITIONS AND PROMOTIONS</p>
      </div>
      <div className="posts">
        <div className="post">
          <img src={PRD1} />
          <div className="bottom">
            <h3>SPECIAL OFFERS</h3>
            <p>Meet Your New Must-Haves</p>
            <button onClick={() => showContent('sale')}>SHOP NOW</button>
          </div>
        </div>
        <div className="post">
          <img src={PRD2} />
          <div className="bottom">
            <h3>KOREAN BRANDS</h3>
            <p>Meet Your New Must-Haves</p>
            <button onClick= {() => showContent('brands')}>SHOP NOW</button>
          </div>
        </div>
        <div className="post">
          <img src={PRD3} />
          <div className="bottom">
            <h3>NEW IN</h3>
            <p>Meet Your New Must-Haves</p>
            <button onClick={() => showContent('offers')}>SHOP NOW</button>
          </div>
        </div>
      </div>



      <div className="page2">

        <img src={IMG4} />

        <div className="prg">
          <p>DON'T KNOW WHERE TO START
            OR JUST NEED INSPIRATION</p>
          <h2>DISCOVER BEAUTY</h2>
          <button onClick={() => showContent('blog')}>READ MORE</button>
        </div>
      </div>

      <div className="page3">

        <div className="Toptittle">
          <h1>THE LATEST BLOG</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, aliquid.</p>
        </div>
        <div className="posts">
          <div className="post">
            <img className='formimg' src={IMG5} />

            <div className="bottom">
              <h3>NEW IN</h3>
              <p>Meet Your New Must-Haves</p>
              <button onClick={() => showContent('form')} >SHOP NOW</button>
            </div>
          </div>
          <div className="post">
            <img className='formimg' src={IMG6} />
            <div className="bottom">
              <h3>NEW IN</h3>
              <p>Meet Your New Must-Haves</p>
              <button onClick={() => showContent('form')} >SHOP NOW</button>
            </div>
          </div>
          <div className="post">
            <img className='formimg' src={IMG7} />
            <div className="bottom">
              <h3>NEW IN</h3>
              <p>Meet Your New Must-Haves</p>
              <button onClick={() => showContent('form')}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Content
