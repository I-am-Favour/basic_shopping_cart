import React from 'react'
import "./App.css"
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Products from './pages/products/Products'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import SingleProduct from "./pages/SingleProduct/SingleProduct"
import Cart from './pages/cart/Cart'
const App = () => {
  return (
    <section>
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    </section>
  )
}

export default App
