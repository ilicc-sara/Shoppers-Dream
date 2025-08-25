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

      <section className="section_2">
        <p>FEATURED PRODUCTS</p>
        <h1>The art pf modern living unlocked.</h1>

        <div className="some-products">
          <div className="single-product">
            <img src="./product-15.jpeg" />
            <div>
              <span>Sofa Set</span>
              <span>$1,299.99</span>
            </div>
          </div>
          <div className="single-product">
            <img src="./product-16.jpeg" />
            <div>
              <span>Suede Armchair</span>
              <span>$159.99</span>
            </div>
          </div>
          <div className="single-product">
            <img src="./product-17.jpeg" />

            <div>
              <span>Utopia Sofa</span>
              <span>$799.99</span>
            </div>
          </div>
        </div>
        <button className="btn">All Products</button>
      </section>

      <section className="section_3">
        <p>Creeds we live by</p>
        <h1>
          Elevate your home with our attitude of excellence and timeless style.
        </h1>

        <div className="descriptions">
          <div className="single-description">
            <ion-icon name="sparkles-outline"></ion-icon>
            <p>Radiance</p>
            <p>
              Our commitment to providing sparkling solutions ensures every
              customer enjoys a shining, glowing experience with unmatched
              quality.
            </p>
          </div>
          <div className="single-description">
            <ion-icon name="eye-outline"></ion-icon>
            <p>Clarity</p>
            <p>
              With clear vision and keen insight, we guide customers down the
              path to lasting success with exceptional service and anticipation.
            </p>
          </div>
          <div className="single-description">
            <ion-icon name="document-outline"></ion-icon>
            <p>Heritage</p>
            <p>
              As a trusted partner, we offer expert guidance, drawing on our
              deep wisdom and wealth of experience to ensure satisfaction and
              success.
            </p>
          </div>
        </div>
      </section>

      <section className="section_3">
        <p>Operations</p>
        <h1>Where simplicity meets efficiency to bring your home to life.</h1>
      </section>
    </>
  );
}

export default App;
