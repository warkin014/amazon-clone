import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product id="8524635" title="The lean startup" image= "https://m.media-amazon.com/images/I/41YRy9OW7ZL._AC_SY164_.jpg" price={29.99}  rating={4} />
          <Product/>
        </div>

        <div className="home__row">
          <Product/>
          <Product/>
          <Product/>
        </div>

        <div className="home__row">
          <Product/>
        </div>
      </div>
    </div>
  );
}

export default home;
