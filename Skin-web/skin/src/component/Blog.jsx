import React, { useState } from 'react';
import './Blog.css';
import IMG1 from './assets/blog1.jpg';
import IMG2 from './assets/blog2.jpg';
import IMG3 from './assets/blog3.jpg';
import IMG4 from './assets/blog4.jpg';
import IMG5 from './assets/blog5.jpg';

function Blog() {
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);
  const [showFullContent4, setShowFullContent4] = useState(false)
  const [showFullContent5, setShowFullContent5] = useState(false)
  const [showFullContent6, setShowFullContent6] = useState(false)

  const handleShowMore1 = () => {
    setShowFullContent1(true);
  };

  const handleShowMore2 = () => {
    setShowFullContent2(true);
  };

  const handleShowMore3 = () => {
    setShowFullContent3(true);
  }

  const handleShowMore4 = () => {
    setShowFullContent4(true);
  }
  const handleShowMore5 = () => {
    setShowFullContent5(true);
  }

  const handleShowMore6 = () => {
    setShowFullContent6(true);
  }



  return (
    <div className='blogpage'>
      <div className="topblog">
        <h1> Blog</h1>
        <p> "Are You Ready to Explore? Our Blog Awaits You with the Latest Information, Inspiring Stories, and Practical Tips! We Invite You to Inform Yourself and Ignite Your Creativity.</p>      </div>
      <div className="blogposts">

        <div className="blog">
          <img src={IMG5} alt="" />
          <h3 className='title'>​Effortless Elegance: Embracing the Magic of Korean Multi-Purpose Beauty Products</h3>
          <p className={showFullContent1 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent1 && (
            <div className='show-more-btn' onClick={handleShowMore1} >
              Read More
            </div>
          )}


        </div>

        <div className="blog">
          <img src={IMG2} alt="" />
          <h3 className='title'>​Effortless Elegance:Affordable Korean Skincare Dupes for Viral K-Beauty Favourites</h3>
          <p className={showFullContent2 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent2 && (
            <div className='show-more-btn' onClick={handleShowMore2} >
              Read More
            </div>
          )}


        </div>

        <div className="blog">
          <img src={IMG3} alt="" />
          <h3 className='title'>Defying Time: 4 Powerful K-Beauty Anti-Ageing Products to use in your 20s</h3>
          <p className={showFullContent3 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent3 && (
            <div className='show-more-btn' onClick={handleShowMore3} >
              Read More
            </div>
          )}


        </div>


        <div className="blog">
          <img src={IMG4} alt="" />
          <h3 className='title'>​Post-Christmas Korean Skincare Hacks: Nourish Your Skin Back to Radiance</h3>
          <p className={showFullContent4 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent4 && (
            <div className='show-more-btn' onClick={handleShowMore4} >
              Read More
            </div>
          )}


        </div>

        <div className="blog">
          <img src={IMG5} alt="" />
          <h3 className='title'>​Effortless Elegance:​Korean Toner Pads: Unveiling the Viral Skincare Sensation</h3>
          <p className={showFullContent5 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent5 && (
            <div className='show-more-btn' onClick={handleShowMore5} >
              Read More
            </div>
          )}


        </div>


        <div className="blog">
          <img src={IMG1} alt="" />
          <h3 className='title'>​Effortless Elegance:Harnessing the Power of Beetroot in Korean Skincare</h3>
          <p className={showFullContent6 ? 'show-full-content' : ''}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis atque blanditiis autem officiis voluptates eius nostrum, aperiam nemo quibusdam iure distinctio voluptatem voluptate doloribus, ad rerum nesciunt voluptatibus quas exercitationem ipsa perspiciatis corporis delectus placeat eos. Explicabo, temporibus asperiores.
          </p>

          {!showFullContent6 && (
            <div className='show-more-btn' onClick={handleShowMore6} >
              Read More
            </div>
          )}


        </div>




      </div>
    </div>
  );
}

export default Blog;

