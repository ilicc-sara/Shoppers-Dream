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
        </div>
      </nav>
    </>
  );
}

export default App;
