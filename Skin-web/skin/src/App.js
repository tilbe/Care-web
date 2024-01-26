
import React, { useState } from 'react';
import './App.css';
import { RiShoppingBagFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

import LOGO from './component/assets/logo.jpg'
import Content from './component/Content';
import About from './component/About';
import Info from './component/Info';
import Sale from './component/Sale';
import Brand from './component/Brand';
import Christmas from './component/Christmas';
import Form from './component/Form';
import Best from './component/Best';
import Offers from './component/Offers';
import Blog from './component/Blog'



const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const [currentPage, setCurrentPage] = useState('content');

  const [cartCount, setCartCount] = useState(0)
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const showContent = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='main'>
      <header>
        <nav className='nav'>
        <div className="logo">
            <img src={LOGO} className='logoicon'></img>
            <a onClick={() => showContent('content')}> <h1>Care</h1></a>
          </div>

          <label className='search'> <input type='serach'></input>
            <button><IoIosSearch /></button>
          </label >
          <ul className='fistcategory'>
            <div className='shoppingcart'>
              <li><a href="#" onClick={() => showContent('info')}><RiShoppingBagFill /></a></li>
              <p>{cartCount}</p>
            </div>
          </ul>



        </nav>
        <ul className='category'>
          <li> <a href="#" onClick={() => showContent('sale')}>SALE</a></li>
          <li> <a href="#" onClick={() => showContent('brands')}>BRANDS</a></li>
          <li><a href="#" onClick={() => showContent('christmas')}>CHRISTMAS</a></li>
          <li>  <a href='#' onClick={() => showContent('best')}> BEST SELLERS</a></li>
          <li> <a href='#'> VEGAN</a></li>
          <li> <a href='#' onClick={() => showContent('offers')}> OFFERS</a></li>
          <li><a href='#' onClick={()=> showContent('blog')} > BLOG</a></li>
        </ul>





      </header>
      <div className="content">
        {currentPage === 'content' && <Content showContent={showContent} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'info' && <Info cartItems={cartItems} />}
        {currentPage === 'sale' && <Sale onAddToCart={handleAddToCart} />}
        {currentPage === 'brands' && <Brand />}
        {currentPage === 'christmas' && <Christmas onAddToCart={handleAddToCart}/>}
        {currentPage === 'best' && <Best onAddToCart={handleAddToCart}/>}
        {currentPage === 'form' && <Form/> }
        {currentPage === 'offers' && <Offers />}
        {currentPage === 'blog' && <Blog/>}


      </div>
    </div>
  );
};

export default App;