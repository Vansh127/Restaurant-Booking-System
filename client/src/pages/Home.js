import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Meet, Eat & Enjoy the True Taste</h1>
          <p>Making a reservation at Dine4you is easy and takes just a couple of minutes.</p>
          <div className="hero-buttons">
            <Link to="/items" className="menu-btn">Our Menu</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/table.jpg" alt="Food on table" />
          <div className="testimonial">
            <p>“Delicious restaurant is easy and takes just a couple...”</p>
            <span>⭐⭐⭐⭐⭐ - Robert</span>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Best way to eat healthy food</h2>
        <p>Making a reservation at Dine4you is easy and takes just a couple of minutes.</p>
        <div className="feature-cards">
          <div className="card">
            <img src="/images/b1jpg.jpg" alt="Burger" />
            <p>Juicy Burgers</p>
          </div>
          <div className="card">
            <img src="/images/drins.jpg" alt="Drink" />
            <p>Refreshing Drinks</p>
          </div>
          <div className="card">
            <img src="/images/dsert.jpg" alt="Dessert" />
            <p>Tasty Desserts</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
