import React from 'react';
import FilterList from "../filters/FilterList";
import'./Main.css';
import ProductList from "../products/ProductList";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <div className="main-container">
                <div className="main-column-left-wrapper">
                    <span className="main-column-left-title">Women's What's New</span>
                    <FilterList />

                </div>


                <div className='main-column-right'>
                    <div className="main-column-right-up">
                        <img src="/img/big-image.png" alt="" className="main-column-right-img"/>
                        <div className="main-column-right-text-container">
                            <span>Need it fast? Use</span>
                            <span className="medium-text">Available Near You</span>
                            <span>to buy and pick up in store. </span>
                        </div>
                    </div>



                    <ul className='main-column-right-bottom-container'>
                        <ProductList />
                        <Footer/>
                    </ul>

                </div>





            </div>




        </div>
    );
};

export default Main;