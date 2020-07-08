import React from 'react'
import { RightArrowSlider, LeftArrowSlider } from '../_components/_buttons'


//const getApi = "http://localhost:5000/api/v1/public/";
const getApi = "https://project-tim.herokuapp.com/api/v1/public/"

const cardSliderConfig = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <LeftArrowSlider/>,
    nextArrow: <RightArrowSlider/>,
    // autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

export { getApi, cardSliderConfig };