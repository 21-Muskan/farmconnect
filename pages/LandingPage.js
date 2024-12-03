import React, { useEffect } from 'react';
import "../css/landingpage.css";
import box1 from '../assests/box1_image.jpg';
import box2 from '../assests/box2_image.jpg';
import box3 from '../assests/box3_image.jpg';
import box4 from '../assests/box4_image.jpg';
import box5 from '../assests/box5_image.jpg';
import box6 from '../assests/box6_image.jpg';
import box7 from '../assests/box7_image.jpg';
import box8 from '../assests/box8_image.jpg';
import logo from '../assests/logo.png';
import hero_image from '../assests/hero_image.png';

const images = [box1, box2, box3, box4, box5, box6, box7, box8,logo, hero_image];

const LandingPage = () => {

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
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
          </div>
          <div className="nav-address border">
            <p className="add-first">Location</p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Farm-Connect"
              className="search-input"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <p className="nav-second">Accounts</p>
          </div>
          {/* <div className="nav-return border">
            <p><span></span></p>
            <p className="nav-second">Orders</p>
          </div> */}
          {/* <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div> */}
        </div>
        <div className="panel">
          <div className="panel-all">
            <i className="fa-solid fa-bars"></i>
            All
          </div>
          <div className="panel-ops">
            {/* <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p> */}
            <p>About Us</p>
          </div>
          
        </div>
      </header>

      <div className="hero-section" style={{ backgroundImage: `url(${hero_image})` }}>
        <div className="hero-msg">
          <p>
            Our Site Is Avialable In Many Languages
            <a href="#">Click here to change the language</a>
          </p>
        </div>
      </div>

      <div className="shop-section">
        {['Weather Forecasting', 'News & Schemes', 'GreenScan Diagnostics', 'AgriLoop(Reel)', 'Community Sharing ', 'Expert Connections', 'Market Analysis', 'Diary & Poultry Guidance'].map((category, index) => (
          <div className="box" key={index}>
            <div className="box-content">
              <h2>{category}</h2>
              <div className="box-img" style={{ backgroundImage: `url(${images[index]})`  }}></div>
              <p>See more</p>
            </div>
          </div>
        ))}
      </div>

      <footer>
    <div className="foot-panel1">Back to Top</div>
    <div className="foot-panel2">
    <ul>
    <p>Get to Know Us</p>
    <a href="#">Careers</a>
    <a href="#">Blog</a>
    <a href="#">About Farm-Connect</a>
    <a href="#">Investor Relations</a>
    <a href="#">Our Partners</a>
    <a href="#">Research & Innovation</a>
</ul>
<ul>
    <p>Opportunities with Us</p>
    <a href="#">Sell on Farm-Connect</a>
    <a href="#">Provide Farming Services</a>
    <a href="#">Join as an Affiliate</a>
    <a href="#">Advertise Your Products</a>
    <a href="#">Market Collaborations</a>
</ul>
<ul>
    <p>Farm Payment Solutions</p>
    <a href="#">Farm Business Card</a>
    <a href="#">Earn with Farm Points</a>
    <a href="#">Top-up Your Account</a>
    <a href="#">Currency Converter</a>
</ul>
<ul>
    <p>How Can We Help?</p>
    <a href="#">COVID-19 Farming Resources</a>
    <a href="#">Your Account</a>
    <a href="#">Your Orders</a>
    <a href="#">Shipping & Delivery</a>
    <a href="#">Returns & Replacements</a>
    <a href="#">Manage Farm Tools & Devices</a>
    <a href="#">Farm Connect Assistant</a>
    <a href="#">Help Center</a>
</ul>

    </div>

    <div className="foot-panel3">
        <div className="logo"></div>
    </div>

    <div className="foot-panel4">
        <div className="pages">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Ads Privacy Choices</a>
        </div>
        <div className="copyright">
            © 1996-2024, Farm-Connect.com, Inc. or its affiliates
        </div>
    </div>
</footer>

    </div>
  );
};

export default LandingPage;