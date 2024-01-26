import React, { useState } from 'react';
import './Best.css'
import prodactmakeup from './Makeup.json'



function Best({ onAddToCart }) {

  const [selectedCategories, setSelectedCategories] = useState([]);


  const handleCategoryChange = (category) => {

    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]

    );

  };
  return (
    <div className='bestpage'>
      <div className="topbest">
        <h1> Best Seller</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolores ducimus veritatis eius aliquam est pariatur quasi assumenda architecto beatae corporis eaque atque dolor amet molestiae, aut repudiandae laborum quibusdam.</p>
      </div>


      <div className="catagorys">
        <h2>Filleters</h2>
        <div className="catagory">
          {['Anua', 'Beauty of Joseon', 'By Wishtrend', 'COSRX', 'Farm Stay'].map((category) => (
              <label key={`brand_${category}`} style={{ color: 'grey' }}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  style={{ margin: '.5rem' }}
                />
                {category}
              </label>

            ))}
        </div>


      </div>

      <div className="prodacts">
        <h2>Prodact Typs</h2>

        <div className="typs">
          <label htmlFor="">
            <input type="checkbox" />
            Moisturisers
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Serums
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Cleansers
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Toners
          </label>

          <label htmlFor="">
            <input type="checkbox" />
            Sun Creams
          </label>

        </div>
      </div>


      <div className="bestpost">
        {prodactmakeup

          .filter((prodact) =>
            selectedCategories.length === 0
              ? true // Hiçbir kategori seçilmediyse tüm ürünleri göster
              : selectedCategories.includes(prodact.brand)
          )
          .map((prodact) => (
            <div className="post" key={prodact.id}>
              <div className="post">
                <div className="img">
                  <img src={prodact.image} />
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
                    <button onClick={onAddToCart}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}

export default Best
