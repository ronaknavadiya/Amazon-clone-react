import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg"
          alt="home_image"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Half Girlfriend Paperback – 1 January 2014
by Chetan Bhagat"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="
Amazon Brand - Solimo Floral Swirls 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Purple"
            price={1099.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OSxZ3oA9L._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={569.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Amazon Brand - Solimo Musca Single Seater Fabric Recliner (Chocolate)"
            price={869.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71ftZH%2BDJML._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Wakefit Orthopedic Memory Foam 8-inch King Mattress (78x72x8 inches)"
            price={2329.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61nedBqescL._SL1000_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Onida 80 cm (32 Inches) Fire TV Edition HD Ready Smart IPS LED TV 32HIF (Black) (2020 Model)"
            price={2339.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71rMcMwRuZL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
