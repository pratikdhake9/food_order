import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {TopMeals} from "./TopMeals";
import {CarouselItems} from "./CarouselItems";

const MultiItemCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <div {...settings}>
            <Slider>
                {TopMeals.map((meal)=>
                    <CarouselItems image={meal.image} title={meal.title}/>
                )}
            </Slider>
        </div>
    )
}
export default MultiItemCarousel
