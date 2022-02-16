import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';

const Products = ({data}) => {
  return (
    <div className='container products'>
        {
            data.length === 0 ? (
                <h1 className='loading' >Loading...</h1>
            ):
            data.map(
                product=>(
                    <Link to="/" className="product" key={product.id}>
                        <h3 className="product-title">
                            {product.title}
                        </h3>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-link hover transition">
                            Shop now
                        </div>
                    </Link>
                )
            )
        }
    </div>
  )
}

export default Products