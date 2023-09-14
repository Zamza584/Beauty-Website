import React from 'react'

const MainSection = () => {
    return (
        <div className='main-section'>
            <div className="location-container">
                <div className="location-left">
                    <h1>Feel free to explore in our store</h1>
                    <button className='btn'>See Location</button>
                </div>
                <div className="location-right">
                    <img src="./assets/location.png" alt="location illustration" />
                </div>
            </div>
        </div>
    )
}

export default MainSection