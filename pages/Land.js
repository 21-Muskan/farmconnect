import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import "../css/landingpage.css";
import box1 from '../assests/box1_image.jpg';
import box2 from '../assests/box2_image.jpg';
import box3 from '../assests/box3_image.jpg';
import box4 from '../assests/box4_image.jpg';
import box5 from '../assests/box5_image.jpg';
import box6 from '../assests/box6_image.jpg';
import box7 from '../assests/box7_image.jpg';
import box8 from '../assests/box8_image.jpg';
import hero_image from '../assests/hero_image.png';
import Navbar from './Navbar';
import Footer from './Footer';

const images = [box1, box2, box3, box4, box5, box6, box7, box8];

const Landing = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    boxes.forEach(box => {
      box.style.opacity = 0;
      box.style.transform = 'translateY(50px)';
      box.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(box);
    });
  }, []);

  return (
    
    <div className='landing-page'>
      <Navbar />
        <div className="hero-section" style={{ backgroundImage: `url(${hero_image})` }}>
          <div className="hero-msg">
            <p>
              Our Site Is Available In Many Languages
              <Link to="/change-language">Click here to change the language</Link>
            </p>

          </div>
        </div>
        <Link to="signin-signup">
        <div className="shop-section">
          {['Weather Forecasting', 'News & Schemes', 'GreenScan Diagnostics', 'AgriLoop(Reel)', 'Community Sharing ', 'Expert Connections', 'Market Analysis', 'Diary & Poultry Guidance'].map((category, index) => (
            <div className="box" key={index}>
              <div className="box-content">
                <h2>{category}</h2>
                <div className="box-img" style={{ backgroundImage: `url(${images[index]})` }}></div>
                <p>See more</p>
              </div>
            </div>
          ))}
        </div>
        </Link>
     <Footer/>
    </div>
  );
};

export default Landing;
