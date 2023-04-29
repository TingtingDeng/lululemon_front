import React from 'react';
import'./luluFooter.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="grid-footer-container">
                <div className="grid-top">
                    <h5><a href="#">MY ACCOUNT</a></h5>
                    <ul className='grid-top-item'>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Member Hb</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">Closet</a></li>
                        <li><a href="#">Communications</a></li>
                        <li><a href="#">Sign Out</a></li>
                    </ul>
                </div>
                <div className="grid-top">
                    <h5><a href="#">HELP</a></h5>
                    <ul className='grid-top-item'>
                        <li><a href="#">COVID-19 FAQ</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Ordering</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Redeem Gift Cards</a></li>
                        <li><a href="#">Sizing</a></li>
                        <li><a href="#">Our Products</a></li>
                    </ul>
                </div>
                <div className="grid-top">
                    <h5><a href="#">ABOUT US</a></h5>
                    <ul className='grid-top-item'>
                        <li><a href="#">Our Business</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Strategic Sales</a></li>
                        <li><a href="#">Affiliate and Creators</a></li>
                        <li><a href="#">Sweet Collective</a></li>
                        <li><a href="#">Team Canada</a></li>
                    </ul>
                </div>
                <div className="grid-top">
                    <h5><a href="#">CONTACT US</a></h5>
                    <ul className='grid-top-item'>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Email Sign Up</a></li>
                        <li><a href="#">Contact US</a></li>
                    </ul>
                </div>
                <div className="grid-bottom">
                    <ul><a href="#">CAREERS</a></ul>
                    <ul><a href="#">COMMUNITY</a></ul>
                    <ul><a href="#">LULULEMON STUDIO</a></ul>
                    <ul><a href="#">SUSTAINABILITY</a></ul>
                    <ul><a href="#">SOCIAL IMPACT</a></ul>
                    <ul><a href="#">DIVERSITY AND INCLUSION</a></ul>
                    <ul><a href="#">LULULEMON APPS</a></ul>
                </div>
                <div className="grid-bottom">
                    <ul><a href="#">GIFT CARDS</a></ul>
                    <ul><a href="#">STORE LOCATOR</a></ul>
                    <ul><a href="#">Privacy Policy (Last Update: 9/28/22)</a></ul>
                    <ul><a href="#">UK Modern Slavery Act</a></ul>
                    <ul><a href="#">California Transparency Act</a></ul>
                    <ul><a href="#">Accessibility Statement</a></ul>
                </div>
                <div className="social-links">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="grid-bottom"></div>

                <div className="bottom">
                    <div className="bottom-left">
                        <p>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</p>
                    </div>
                    <div className="bottom-right">
                        <div>
                            <p className="bottom-right-left">Privacy Policy (Last Updated: 9/28/22)</p>
                        </div>
                        <div>
                            <p className="bottom-right-right">Terms of Use (Last Updated: 10/5/22)</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;