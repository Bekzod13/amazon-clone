import React from 'react';
import './hero.css';
import Slider from "react-slick";

// import images
import hero1 from '../../images/hero/hero1.jpg';
import hero2 from '../../images/hero/hero2.jpg';
import hero3 from '../../images/hero/hero3.jpg';

// import icons
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';

const heros = [hero1, hero2, hero3];


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
          <MdOutlineArrowForwardIos/>
        </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow arrow-prev" onClick={onClick}>
          <MdOutlineArrowBackIosNew/>
      </div>
    );
  }
  


const Hero = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <div className='hero'>
            <Slider {...settings}>
                {
                    heros.map(
                        hero=>(
                            <img src={hero} key={hero} className="hero-img" alt="hero" />
                        )
                    )
                }
            </Slider>
    </div>
  )
}

export default Hero