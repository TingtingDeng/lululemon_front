import React from 'react';
import './Header.css';
import FilterList from "../filters/FilterList";
import {Link, useNavigate} from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const numberBag = useSelector(state => state?.productReducer?.numberBag)
    return (
        <div>
            <div className="header-navBar-top">
                <div className="navBar-top">
                    <img src="/img/store-locator.png" alt="" className="navBar-icon"/>
                    <span className="navBar-top-title">Store Locator</span>
                </div>
                <div  className="navBar-top">
                        <img src="/img/store-locator.png" alt="" className="navBar-icon"/>
                        <span className="navBar-top-title">Sign In</span>
                </div>

                <div className="navBar-top">
                    <img src="/img/store-locator.png" alt="" className="navBar-icon"/>
                    <span className="navBar-top-title">Wish List</span>
                </div>
                <div className="navBar-top">
                    <img src="/img/store-locator.png" alt="" className="navBar-icon"/>
                    <span className="navBar-top-title">Gift Cards</span>
                </div>
                <div className="navBar-top">
                    <img src="/img/store-locator.png" alt="" className="navBar-icon"/>
                    <span className="navBar-top-title">CAN</span>
                </div>

            </div>
            <div className="header navBar-bottom-container">
                <div className="navBar-bottom-left-wrapper">
                    <img src="/img/logo.png" alt="" className="navBar-bottom-logo"/>
                        <ul className="navBar-bottom-left">
                            <li className="navBar-bottom-content">
                                <a href="#">WOMEN</a>
                            </li>
                            <li className="navBar-bottom-content">
                                <a href="#">MEN</a>
                            </li>
                            <li className="navBar-bottom-content">
                                <a href="#">ACCESSORIES</a>
                            </li>
                            <li className="navBar-bottom-content">
                                <a href="#">SHOES</a>
                            </li>
                            <li className="navBar-bottom-content">
                                <a href="#">STUDIO</a>
                            </li>
                            <li className="navBar-bottom-content">
                                <a href="#">GIFTS</a>
                            </li>
                        </ul>
                        <div className="navBar-bottom-input-wrapper">
                            <div className="navBar-bottom-input">
                                <img src="/img/search.png" alt="" className="icon-search"/>
                                    <input type="text" className="navBar-input-box"/>
                            </div>
                            <div className = "navBar-cart">
                                <ShoppingBagOutlinedIcon  onClick = {() => navigate('/mybag')}/>
                                <span className='cart-number'>{numberBag}</span>
                            </div>

                            {/*<img src="/img/cart.png" alt="" className="navBar-cart"/>*/}
                        </div>
                </div>

            </div>


        </div>
    );
};

export default Header;