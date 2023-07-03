import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/DVD/XCM_Manual_1200x445_1217661_1130674_IDx231217661_uk_dvd_digital_readiness_primevideo_banner_2_44c2b7ea_2f3b_4de2_ab69_9968a9e8112a_jpg_LOWER_QL85_.jpg" alt = ""/>
                <div className="home__row">
                    <Product
                        id = "00001"
                    title = "The lean startup"
                    price={29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product
                        id = "00002"
                        title = "Interactive Cat Toy Ball, 360 Degree USB Rechargeable Motion Red LED Light for Cat/Kitty/Kitten/Pets Exercise Chase Play Cat Toy Balls, Cat Toys for Indoor Cats, Pet Toys"
                        price={251.0}
                        image = "https://m.media-amazon.com/images/I/716kTJI4jtL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id = "00003"
                        title = "Nintendo Switch – OLED Model w/ White Joy-Con"
                        price={404.99}
                        image = "https://m.media-amazon.com/images/I/31Zm5UaF-sL.jpg"
                        rating={4}
                    />
                    <Product
                        id = "00004"
                        title = "SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation Switches – World’s Fastest Mechanical Keyboard"
                        price={154.00}
                        image = "https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_SL1500_.jpg"
                        rating={4}

                    />
                    <Product
                        id = "00004"
                        title = "2020 Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
                        price={1699.00}
                        image = "https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id = "00005"
                        title = "Samsung C49HG90DMU 124.2 cm (48.9) Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
                        price={1699.00}
                        image = "https://m.media-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}
export default Home;