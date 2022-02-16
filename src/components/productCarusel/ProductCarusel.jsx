import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './productCarusel.css';

// import icons
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="carusel-arrow carusel-arrow-next transition" onClick={onClick}>
          <MdOutlineArrowForwardIos/>
        </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="carusel-arrow carusel-arrow-prev transition" onClick={onClick}>
          <MdOutlineArrowBackIosNew/>
      </div>
    );
  }
  

const ProductCarusel = ({data}) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <div className='container products-carusel'>
        <h1 className='product-carusel-title'>Best Seller Products</h1>
        <Slider {...settings}>
            {
                data.map(item => (
                    <Link className="product-carusel" key={item.id} to='/' >
                        <img src={item.image} alt={item.title} />
                    </Link>
                ))
            }
        </Slider>
    </div>
  )
}

export default ProductCarusel