import React, {useContext} from 'react';
import './searchProduct.css';
import {Context} from '../../context/Context';


const SearchProduct = () => {

    // const [search, setSearch] = useState([]);

    const data = useContext(Context);

    const products = data.productsMany;

  return (
    <div className='container search-box'>
        {
            products.filter(

                (product) => {
                    if (data.searchProduct === '') {
                        return product;
                    }else if(product.title.toLowerCase().includes(data.searchProduct.toLowerCase())){
                        return product;
                    }
                }

            ).map( product => (
                <div key={product.id} className="search-product-box">
                    <h2 className="search-pro-header">{product.title}</h2>
                    <div className="search-pro-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="seach-pro-details">
                        <div className="search-pro-price">$ {product.price}</div>
                        <div className="search-pro-btn add-to-cart-btn">Add to cart</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SearchProduct