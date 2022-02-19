import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
import { Context } from './../../context/Context';
import './productList.css';
import { useCart } from 'react-use-cart';

// import icons
import {BsFillStarFill} from 'react-icons/bs';

const ProductList = () => {
 
    const data = useContext(Context);
    
    const allProduct = data.productsMany;
    
    const {category} = useParams();

    const {addItem} = useCart();

  return (
      <>
        <h1 className="product-list-header">
            {category}
        </h1>
        <div className='container product-list'>
            <>
            {
                category === 'man' && allProduct.map(item=>(
                        <div key={item.id}>
                            {
                                item.category === "men's clothing" && (
                                    <div className='list-product-item'>
                                        <div className="list-product-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="list-product-details">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <h4>${item.price} 
                                                <span>                               
                                                    <BsFillStarFill/> {item.rating.rate}
                                                </span>
                                            </h4>
                                            <div className='add-to-cart-btn transition'  onClick={() => addItem(item)} >Add to cart</div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        </div>
                    )                
                )
            }
            </>
            <>
             {
                category === 'jewelery' && allProduct.map(item=>(
                        <div key={item.id}>
                            {
                                item.category === "jewelery" && (
                                    <div className='list-product-item'>
                                        <div className="list-product-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="list-product-details">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <h4>${item.price} 
                                                <span>                               
                                                    <BsFillStarFill/> {item.rating.rate}
                                                </span>
                                            </h4>
                                            <div className='add-to-cart-btn transition'  onClick={() => addItem(item)} >Add to cart</div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        </div>
                    )                
                )
            }
            </>
            <>
             {
                category === 'electronics' && allProduct.map(item=>(
                        <div key={item.id}>
                            {
                                item.category === "electronics" && (
                                    <div className='list-product-item'>
                                        <div className="list-product-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="list-product-details">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <h4>${item.price} 
                                                <span>                               
                                                    <BsFillStarFill/> {item.rating.rate}
                                                </span>
                                            </h4>
                                            <div className='add-to-cart-btn transition'  onClick={() => addItem(item)} >Add to cart</div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        </div>
                    )                
                )
            }
            </>
            <>
             {
                category === 'women' && allProduct.map(item=>(
                        <div key={item.id}>
                            {
                                item.category === "women's clothing" && (
                                    <div className='list-product-item'>
                                        <div className="list-product-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="list-product-details">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                            <h4>${item.price} 
                                                <span>                               
                                                    <BsFillStarFill/> {item.rating.rate}
                                                </span>
                                            </h4>
                                            <div className='add-to-cart-btn transition'  onClick={() => addItem(item)} >Add to cart</div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        </div>
                    )                
                )
            }
            </>
        </div>
      </>
  )
}

export default ProductList