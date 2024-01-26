import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './Sale.css';
import Info from './Info';
import IMG5 from './assets/form1.jpg';
import prodactData from './data.json';

function Sale({ onAddToCart }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <div className='salepage'>
      <div className="topsale">
        <h1> Sale</h1>
        <p>The Most Enjoyable Way to Highlight Your Beauty and Express Yourself is Makeup! In our makeup category, a wide range of products suitable for every style awaits you</p>
      </div>

      <div className="catagorys">
        <h2>Filters</h2>

        <div className="catagory">
          {['Anua', 'Beauty of Joseon', 'By Wishtrend', 'COSRX', 'Farm Stay'].map((category) => (
            <label key={`brand_${category}`} style={{ color: 'grey' }}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                style={{ margin: '.5rem '}}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="prodacts">
        <h2>Product Types</h2>

        <div className="typs">
          {['Moisturisers', 'Serums', 'Cleansers', 'Toners', 'Sun Creams'].map(
            (category) => (
              <label key={`type_${category}`} style={{ color: 'grey' }}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  style={{ margin: '.5rem' }}
                />
                {category}
              </label>
            )
          )}
        </div>
      </div>

      <div className="saleposts">
        {prodactData
          .filter((prodact) =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(prodact.brand) ||
            selectedCategories.includes(prodact.productType)
          )
          .map((prodact) => (
            <div className="post" key={prodact.id}>
              <div className="img">
                <img src={prodact.image} alt={prodact.name} />
              </div>

              <div className="info">
                <p className='brand'>{prodact.brand}</p>
                <p>{prodact.name}</p>
                <div className="price">
                  <p className='oldprice'>{prodact.oldPrice}</p>
                  <p>{prodact.newPrice}</p>
                </div>

                <div className="bottom">
                  <a className='reviews'><p>{prodact.reviews}</p></a>
                  <button onClick={() => onAddToCart(prodact)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sale;
