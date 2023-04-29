import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {LOGIN_API_URL, PLACE_ORDER_API_URL} from "../helper";
import './CheckOut.css';
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import login from "./Login";

const CheckOut = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [billingInformation, setBillingInformation] = useState({
        billingEmail: "",
        billingFirstName: "",
        billingLastName: "",
        billingAddress: "",
        billingAddress2: "",
        billingCity: "",
        billingProvince: "",
        billingPostalCode: "",
        billingPhoneNumber: ""
    })
    const [shippingInformation, setShippingInformation] = useState({
        shippingEmail: "",
        shippingFirstName: "",
        shippingLastName: "",
        shippingAddress: "",
        shippingAddress2: "",
        shippingCountry: "",
        shippingProvince: "",
        shippingPostalCode: "",
        shippingPhoneNumber: ""
    })
    const [checkedBox, setCheckedBox] = useState(false)

    const onChange = (e) => {
        const {name, value} = e.target
        setBillingInformation(prevState => ({
            ...prevState, [name]: value
        }))
    }


    const numberBag = useSelector(state => state?.cartReducer?.numberBag)
    const shoppingBag = useSelector(state => state?.cartReducer?.shoppingBag)
    // console.log('shoppingBag--->', shoppingBag)

    let subTotal = 0;
    shoppingBag && Object.keys(shoppingBag).forEach(item => {
        subTotal += shoppingBag[item].quantity * shoppingBag[item].price.match(/(\d+)/)[0];
        return subTotal
    })
    const size = useSelector(state => state?.cartReducer?.size)

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(actions.loginAction.login(email, password));
    };

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // let response = await axios.post(LOGIN_API_URL, {
    //             let response = await axios.post(`http://localhost:5000/login`, {
    //             email,
    //             password,
    //         })
    //
    //         console.log('response--->', response)
    //
    //         // const token = response?.data?.token
    //         // const token = response?.data?.data?.token
    //         // localStorage.setItem('token', token);
    //
    //         // if(token) {
    //         //     localStorage.setItem('user', JSON.stringify(response.data));
    //         //
    //         // }
    //         // return token;
    //
    //
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    const placeHolder = () => {

        return async dispatch => {
            const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
            const user = localStorage.getItem('user')
            // console.log('user-->', user)
            const orderItems = shoppingBag.map(item => ({
                quantity: item.quantity,
                productId: item.productId,
                colorId: item.colorId,
                size: item.size,

            }))
            console.log('orderItems--->', orderItems)

            const token = `bear ${JSON.parse(user).data.token}`
            console.log('token-->', token)
            const data = {
                "orderNumber": "133456789412",
                "userEmail": "mark2win@info.com",
                "shippingAddress": "113 defence street",
                "orderItems": orderItems,
                "taxRate": 1.13,
                "totalAmount": 113.00,
            }


            try {
                let res = await axios.post(PLACE_ORDER_API_URL, data, {
                    headers: {'Authorization': `${token}`}
                })


                const orderItems = res.data.data.orderItems
                console.log(orderItems)

                if (orderItems) {
                    localStorage.setItem('place order', JSON.stringify(res.data))
                    navigate('/payment')
                }

                return orderItems;

            } catch (error) {
                console.log(error)
                navigate('/login')
            }
        }
    }


    const handlePlaceHolder = async (e) => {
        e.preventDefault();
        dispatch(placeHolder())
    }

    return (<div className="page">
            <div className="body-container">
                <div className='checkout-container'>
                    <h1>Checkout</h1>
                    <div className="navBar-cart">
                        <ShoppingBagOutlinedIcon onClick={() => navigate('/mybag')}/>
                        <span className='cart-number'>{numberBag}</span>
                    </div>
                </div>

                <div className="flex-container">
                    <div className="flex-child">
                        <div className="checkout-left">
                            <div className="heading-section">
                                <div className="checkout-heading">
                                    <h2>Have an account</h2>
                                    <button className="login-container">
                                        <div className='login-part'>
                                            <div className="login-dropdown">
                                                <span className="login-btn">Log in</span>
                                                <span>to checkout more quickly and easily</span>
                                                <span>
                            {/*{Navbar}*/}
                                                    ▼</span>
                                            </div>
                                            {/*<FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-down" />*/}

                                            <div className="contact-way">
                                                <div className="email-pwd">


                                                    <form onSubmit={handleLogin}>
                                                        <div className="">

                                                            <label htmlFor="login-email">Email address</label>

                                                            <input
                                                                className='email'
                                                                type="text"
                                                                placeholder="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}

                                                            />
                                                        </div>


                                                        <div className="dropdown pwd">
                                                            <label htmlFor="login-pwd">Password
                                                                <svg height="20" width="20" viewBox="0 0 24 24"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     className="info-tooltip_icon__6vlhP"
                                                                     focusable="false" role="img"
                                                                     aria-hidden="true">
                                                                    <g fill="none" fill-rule="evenodd"
                                                                       stroke="currentColor">
                                                                        <circle cx="12" cy="12" r="11"
                                                                                stroke-width="2"></circle>
                                                                        <g fill="currentColor" fill-rule="evenodd"
                                                                           transform="translate(10.25 6)">
                                                                            <path
                                                                                d="m3.3 1.15c0 .63512746-.51487254 1.15-1.15 1.15s-1.15-.51487254-1.15-1.15.51487254-1.15 1.15-1.15 1.15.51487254 1.15 1.15z"></path>
                                                                            <path
                                                                                d="m2.06769231 9.88461538h1.16307692v.53846152c0 .5947682-.48215488 1.0769231-1.07692308 1.0769231h-1.07692307c-.2408456-.0003004-.46933342-.1066654-.62461539-.2907692-.15086279-.1915781-.21347505-.4381139-.17230769-.6784616l.88307692-4.41538458h-1.16307692v-.53846154c0-.5947682.48215489-1.07692308 1.07692308-1.07692308h1.07692307c.24084561.00030042.46933342.10666544.62461539.29076923.15086279.19157811.21347505.43811387.17230769.67846154z"></path>
                                                                        </g>
                                                                    </g>
                                                                </svg></label>


                                                            <input type="text"
                                                                   className="password"
                                                                   placeholder="password"
                                                                   value={password}
                                                                   onChange={(e) => setPassword(e.target.value)}

                                                            />
                                                            {/*<input className="password" type="password"/>*/}
                                                            <label className="forgot-pwd" htmlFor="forgot-pwd">Forgot
                                                                your password?</label>
                                                        </div>

                                                        <button type="submit"
                                                                className="signin-btn"
                                                            // onClick={() => navigate('/mybag')}

                                                        >Sign in
                                                        </button>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </button>


                                    {/*<button className="signin-btn">sign in</button>*/}


                                </div>
                            </div>

                            <div className="heading-section">
                                <div className="checkout-heading">
                                    <h2>Contact information</h2>
                                    <div className="contact-section">
                                        <div className="contact-way">
                                            <label htmlFor="login-pwd">Email address (for oder notification)</label>
                                            <input className="input-list email" type="email"/>

                                            <form className="checkbox-align">
                                                <input className="checkbox" type="checkbox"/>
                                                <label className="contact-info" htmlFor="contact-info">Sign me up for
                                                    lululemon emails
                                                    (you can unsubscribe at any time). See our <span
                                                        className="privacy-policy">privacy policy</span>
                                                    for details.</label></form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heading-section">
                                <div className="checkout-heading">
                                    <h2>Shipping address</h2>
                                    <div className="account-login">
                                        <div className="contact-way">
                                            <label htmlFor="first-name">First name</label>
                                            <input className="first-name"
                                                   type="text"
                                                   name="billingFirstName"
                                                   placeholder="FirstName"
                                                   onChange={onChange}
                                                   required
                                            />
                                        </div>

                                        <div className="last-name">
                                            <label className="lastname" htmlFor="last-name">Last name</label>
                                            <input className="last-name"
                                                   type="text"
                                                   name="billingLastName"
                                                   placeholder="LastName"
                                                   onChange={onChange}
                                                   required
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="contact-way">
                                    <label htmlFor="phone-number">Phone number</label>
                                    <input className="input-list phone-number" type="text"
                                           name="billingPhoneNumber"
                                           placeholder="Phone Number"
                                           onChange={onChange}
                                           required/>


                                    <p className="p-tag">This will be only used for delivery related issues.</p>
                                </div>
                                <div className="contact-way">
                                    <label htmlFor="address-name">Address</label>
                                    <input className="input-list address-input"
                                           type="text"
                                           name="billingAddress"
                                           onChange={onChange}
                                           required
                                           placeholder="Include apt, suite, or floor number here"/>
                                </div>
                                <div className="contact-way">
                                    <label htmlFor="option-note">Delivery note (Optional)</label>
                                    <input className="option-note" type="text"/>
                                </div>
                                <div className="contact-location">
                                    <div className="contact-way">
                                        <label htmlFor="city">City</label>
                                        <input className="city-input" type="text"
                                               name="billingCity"
                                               placeholder="city"
                                               onChange={onChange}
                                               required

                                        />
                                    </div>
                                    <div className="contact-way">
                                        <label htmlFor="last-name">Province</label>
                                        <input
                                            className="input-list-change" id="province-list"
                                            type="text"
                                            name="billingProvince"
                                            placeholder="Province / state"
                                            onChange={onChange}
                                            required
                                        />

                                    </div>
                                    <div className="contact-way">
                                        <label htmlFor="phone-number">Postal Code</label>
                                        <input className="phone-number" type="text"
                                               name="billingPostalCode"
                                               placeholder="Postal Code/Zip"
                                               onChange={onChange}
                                               required

                                        />
                                    </div>
                                </div>
                                <div className='general'>
                                    <label htmlFor="" style={{fontSize: "20px"}}>
                                        <input type='checkbox' checked={checkedBox}
                                               onClick={() => setCheckedBox(!checkedBox)}/> Billing address is the same
                                        as my shipping address</label>
                                </div>

                            </div>
                            {!checkedBox &&
                                <div className="heading-section">
                                    <div className="checkout-heading">
                                        <h2>Shipping address</h2>
                                        <div className="account-login">
                                            <div className="contact-way">
                                                <label htmlFor="first-name">First name</label>
                                                <input className="first-name"
                                                       type="text"
                                                       name="billingFirstName"
                                                       placeholder="FirstName"
                                                       onChange={onChange}
                                                       required
                                                />
                                            </div>

                                            <div className="last-name">
                                                <label className="lastname" htmlFor="last-name">Last name</label>
                                                <input className="last-name"
                                                       type="text"
                                                       name="billingLastName"
                                                       placeholder="LastName"
                                                       onChange={onChange}
                                                       required
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-way">
                                        <label htmlFor="phone-number">Phone number</label>
                                        <input className="input-list phone-number" type="text"
                                               name="billingPhoneNumber"
                                               placeholder="Phone Number"
                                               onChange={onChange}
                                               required/>


                                        <p className="p-tag">This will be only used for delivery related issues.</p>
                                    </div>
                                    <div className="contact-way">
                                        <label htmlFor="address-name">Address</label>
                                        <input className="input-list address-input"
                                               type="text"
                                               name="billingAddress"
                                               onChange={onChange}
                                               required
                                               placeholder="Include apt, suite, or floor number here"/>
                                    </div>
                                    <div className="contact-way">
                                        <label htmlFor="option-note">Delivery note (Optional)</label>
                                        <input className="option-note" type="text"/>
                                    </div>
                                    <div className="contact-location">
                                        <div className="contact-way">
                                            <label htmlFor="city">City</label>
                                            <input className="city-input" type="text"
                                                   name="billingCity"
                                                   placeholder="city"
                                                   onChange={onChange}
                                                   required

                                            />
                                        </div>
                                        <div className="contact-way">
                                            <label htmlFor="last-name">Province</label>
                                            <input
                                                className="input-list-change" id="province-list"
                                                type="text"
                                                name="billingProvince"
                                                placeholder="Province / state"
                                                onChange={onChange}
                                                required
                                            />

                                        </div>
                                        <div className="contact-way">
                                            <label htmlFor="phone-number">Postal Code</label>
                                            <input className="phone-number" type="text"
                                                   name="billingPostalCode"
                                                   placeholder="Postal Code/Zip"
                                                   onChange={onChange}
                                                   required

                                            />
                                        </div>
                                    </div>


                                </div>


                            }



                            <div className="heading-section">
                                <div className="checkout-heading">
                                    <h2>Shipping & gift options</h2>
                                    <div className="shipping-info">
                                        <p className="shipping-option">2-10 business days</p>
                                        <p className="shipping-option">Standard Shipping <span>(Free)</span></p>
                                    </div>
                                    <div className="gift-checkbox">
                                        <input type="checkbox"/>
                                        This is a gift, add a message
                                    </div>
                                </div>
                                <div className="contact-way">
                                    <div className="to-from">
                                        <div className="to-section">
                                            <label htmlFor="to-whom">To</label>
                                            <input className="to-input" type="text"/>
                                        </div>
                                        <div className="from-section">
                                            <label htmlFor="from-whom">From</label>
                                            <input className="from-input" type="text"/>
                                        </div>
                                    </div>
                                    <label htmlFor="">Message</label>
                                    <input className="message-insert" type="text"/>
                                    <p>Your message will be printed on a receipt with prices hidden.</p>
                                </div>
                            </div>
                            <button class="next-step"
                                    onClick={handlePlaceHolder}
                                // onClick={placeHolder}


                            >go to next step
                            </button>
                        </div>
                    </div>

                    <div className="flex-child">
                        <div className="amount-box">
                            <h2>Order summary</h2>
                            <button className="item-ttl">
                                <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                     className="bag-summary_bagIcon__KfM7O" focusable="false" role="img"
                                     aria-hidden="true">
                                    <path
                                        d="M20 6.25h-3.25c-.68-3.62-2.53-6-4.75-6s-4.07 2.38-4.75 6H4a.76.76 0 00-.75.75v12A4.75 4.75 0 008 23.75h8A4.75 4.75 0 0020.75 19V7a.76.76 0 00-.75-.75zm-8-4.5c1.38 0 2.66 1.84 3.22 4.5H8.78c.56-2.66 1.84-4.5 3.22-4.5zM19.25 19A3.26 3.26 0 0116 22.25H8A3.26 3.26 0 014.75 19V7.75H7l-.24 2.16.49.06a1 1 0 001.12-.87l.17-1.35h6.92l.17 1.35a1 1 0 001.12.87l.49-.06L17 7.75h2.28L19.25 19z"
                                        fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                                <span className="total-item">{numberBag} item </span>
                                <span>▼</span>
                                <span className="total-price">
                            <strong className="no-tax-price"> SubTotal $ {subTotal}</strong>
                        </span>
                            </button>
                        </div>
                        {shoppingBag && shoppingBag.map(item => {
                            return (

                                <div className="products-chosen">
                                    <img className="img-border"
                                         src={item.images?.find(i => i.colorId === item.colorId).mainCarousel?.media?.split('|')[0]}

                                         alt=""/>

                                    <div className="clothing-incart">
                                        <span className="product-heading">{item.name}</span>
                                        <span>{item.images?.find(i => i.colorId === item.colorId).colorAlt}</span>
                                        <span>Size: {item.size}</span>
                                        <span className="clothing-incart">Quantity: {item.quantity}</span>
                                    </div>
                                    <div className="">
                                        <span>{item.price}</span>
                                    </div>
                                </div>

                            )
                        })


                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CheckOut;