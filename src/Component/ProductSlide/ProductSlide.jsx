import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProductSlide() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };
  return <>
 <div className='mb-5'>
        <Slider {...settings}>
          <div>
            <img style={{width:'100%', height:"400px"}} src={require("../../images/slider-2.jpeg")} alt=''/>
          </div>
          <div>
          <img style={{width:'100%', height:"400px"}}src={require("../../images/slider-image-1.jpeg")} alt=''/>
          </div>
          <div>
          <img style={{width:'100%', height:"400px"}}src={require("../../images/slider-image-2.jpeg")} alt=''/>
          </div>
          <div>
          <img style={{width:'100%', height:"400px"}}src={require("../../images/slider-image-3.jpeg")} alt=''/>
          </div>
        </Slider>
      </div>  
  
  </>
}