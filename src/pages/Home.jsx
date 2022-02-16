import React, { useContext } from 'react';
import { Context } from '../context/Context';

// import components
import Hero from '../components/hero/Hero';
import Products from '../components/products/Products';
import ProductCarusel from './../components/productCarusel/ProductCarusel';

const Home = () => {

  const data = useContext(Context);
  const products = data.products;
  const productsMany = data.productsMany;

  return (
    <div>
      <Hero/>
      <Products data={products}/>
      <ProductCarusel data={productsMany} />
      <Products data={productsMany}/>
    </div>
  )
}

export default Home;