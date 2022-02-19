import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Context} from "./context/Context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from "react-use-cart";

// import components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

// import pages
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login'
import Register from './pages/Register';
import SearchProducts from './pages/SearchProducts';
import About from './pages/About';
import ShoppingCart from './pages/ShoppingCart';

function App() {

    const [products, setProducts] = useState([]);

    const [productsMany, setProductsMany] = useState([]);

    useEffect(
        () => axios.get(`https://fakestoreapi.com/products?limit=8`).then(res => {
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        }),
        []
    );

    useEffect(
        () => axios.get(`https://fakestoreapi.com/products`).then(res => {
            setProductsMany(res.data);
        }).catch(err => {
            console.log(err);
        }),
        []
    );

    const [searchProduct, setSearchProduct] = useState('');

    return (
        <CartProvider>
            <Context.Provider value={{
                products, productsMany, searchProduct, setSearchProduct
            }}>
                <Router>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/products/:category" element={<AllProducts />}/>
                        <Route path="/sign-up" element={<Register />}/>
                        <Route path="/sign-in" element={<Login />}/>
                        <Route path="/search" element={<SearchProducts />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/cart" element={<ShoppingCart />}/>
                    </Routes>
                    <Footer/>
                </Router>
            </Context.Provider>
        </CartProvider>
    );
}

export default App;
