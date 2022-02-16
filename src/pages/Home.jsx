import React, { useContext } from 'react';
import { Context } from '../context/Context';

// import components
import Hero from '../components/hero/Hero';
import Products from '../components/products/Products';

const Home = () => {

  const data = useContext(Context);
  const products = data.products;

  return (
    <div>
      <Hero/>
      <Products data={products}/>
    </div>
  )
}

export default Home;