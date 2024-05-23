import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from './import'

function Gallery() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="silder-image">
                    <img src={gallery1} alt="" />
                </div>
                <div className="silder-image">
                    <img src={gallery2} alt="" />

                </div>
                <div className="silder-image">
                    <img src={gallery3} alt="" />

                </div>
                <div className="silder-image">
                    <img src={gallery4} alt="" />

                </div>
                <div className="silder-image">
                    <img src={gallery5} alt="" />

                </div>
            </Slider>
        </div>
    );
}

export default Gallery;
