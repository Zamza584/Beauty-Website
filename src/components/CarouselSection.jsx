import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

function CarouselItems() {
    const [products, setProducts] = useState([])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const fetchProducts = () => {
        return fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const CustomRightArrow = ({ onClick }) => {
        return <button className='arrow arrow--right' onClick={() => onClick()}><MdNavigateNext /></button>;
    };
    const CustomLeftArrow = ({ onClick }) => {
        return <button className='arrow arrow--left' onClick={() => onClick()}><MdNavigateBefore /></button>;
    };

    return (
        <Carousel
            swipeable={true}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .7s"
            transitionDuration={200}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            autoPlay={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            responsive={responsive}>
            {products.map((product, idx) => {
                return (
                    <div className="carousel-item" key={idx}>
                        <img src={product.image_link} alt="#" />
                        <h2><a href="#">{product.name}</a></h2>
                        <p className="price">${product.price}</p>
                    </div>
                )
            })}
        </Carousel>

    )
}

const CarouselSection = () => {
    return (
        <div className='carousel-section'>
            <div className='title-top-sales'>
                <h2>TOP SALES</h2>
            </div>
            <CarouselItems />
        </div>
    )
}

export default CarouselSection