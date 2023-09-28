import React from 'react'
import Navbar from './Navbar.jsx';
import headerImage from '../assets/header-image.png'

const Home = () => {
    return (
        <header className='header'>
            <Navbar/>
            <div className="header-main">
                <div className="header-text">
                    <h1>Best Quality Beauty Products</h1>
                    <p>With over 10 years on the market</p>
                    <button className='btn'>SEE PRODUCTS</button>
                </div>
                <img className="header-image" src={headerImage} alt="header-image" />
            </div>
        </header>
    )
}

export default Home