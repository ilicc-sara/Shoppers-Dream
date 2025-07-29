import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="logo-cont">
          <ion-icon name="bag-outline"></ion-icon>
          <span>X Shopper's Dream</span>
        </div>

        <div className="nav-bar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
        </div>

        <div className="card-display">
          <span>Cart</span>
          <ion-icon name="bag-outline"></ion-icon>
          <div className="cart-number-display">0</div>
        </div>
      </nav>

      <section className="section_1">
        <div className="heading-section">
          <h1>Furniture design to make you feel at home</h1>
          <p>Create your perfect space with our designs</p>
          <div className="btn-cont">
            <button className="btn">Explore products</button>
            <button className="btn">Learn more &darr;</button>
          </div>
        </div>
        <div className="heading-section-img">
          <img src="./heroImg.png" />
        </div>
      </section>
    </>
  );
}

export default App;
