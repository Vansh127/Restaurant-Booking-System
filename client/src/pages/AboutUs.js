import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h1>🍽️ About Us</h1>
        <p>
          Welcome to <span className="restaurant-name">Dine4You</span>, 
          where great food meets unforgettable experiences.
        </p>
      </div>

      <div className="aboutus-content">
        <section>
          <h2>🌿 Our Story</h2>
          <p>
            Founded in <strong>2016</strong>, our journey started with a simple idea: 
            <em> to bring people together over delicious food</em>. Inspired by traditional 
            recipes and fueled by a love for culinary innovation, we’ve grown into a place 
            where food lovers of all kinds feel right at home.
            <br /><br />
            What started as a small dream has become a beloved local favorite. And now, 
            through our app, we’re bringing that same experience to your fingertips.
          </p>
        </section>

        <section>
          <h2>👨‍🍳 What Makes Us Special</h2>
          <ul>
            <li><strong>Fresh Ingredients</strong> – Locally grown produce and top-quality ingredients.</li>
            <li><strong>Made with Love</strong> – Every dish is handcrafted by passionate chefs.</li>
            <li><strong>Fast & Easy Ordering</strong> – Explore, order, and enjoy from anywhere.</li>
            <li><strong>Customer First</strong> – Your satisfaction is our top priority.</li>
          </ul>
        </section>

        <section>
          <h2>📍 Visit Us or Order Online</h2>
          <p>
            Come dine with us or order through our app for delivery or takeaway. 
            No matter how you choose to enjoy <span className="restaurant-name">Dine4You</span>, 
            we promise an amazing experience—every time.
          </p>
        </section>

        <section>
          <h2>❤️ Thank You</h2>
          <p>
            We’re truly grateful for your support and can’t wait to serve you again. 
            Thank you for being part of our journey!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
