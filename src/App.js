import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Context} from "./context/Context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

// import pages
import Home from './pages/Home';

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

    return (
        <Context.Provider value={{
                products, productsMany
            }}>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
                <Footer/>
            </Router>
        </Context.Provider>
    );
}

export default App;
