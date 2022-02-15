import React from "react";
import {Context} from "./context/Context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// import components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";


// import pages
import Home from './pages/Home';


function App() {
  return (
    <Context.Provider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </Context.Provider>
  );
}

export default App;
