import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import './Carts.css'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {PLACE_ORDER_API_URL} from "../helper";
import {Payment} from "./Payment";
import actions from "../actions";


const MyBag = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const shoppingBag = useSelector(state => state?.cartReducer?.shoppingBag)
    const numberBag = useSelector(state => state?.cartReducer?.numberBag)

    const size = useSelector(state => state?.cartReducer?.size)
    console.log('size/myBag--->', size)

    // const item = shoppingBag[0]

   // const imgUrl = item.images.find(i=> i.colorId === item.colorId).mainCarousel?.media?.split('|')[0]
   //  console.log('imUrl-->', imgUrl)
   // const orderItems = JSON.parse(localStorage.getItem('shoppingBag'))



    let subTotal = 0;
    Object.keys(shoppingBag).forEach(item => {
        subTotal += shoppingBag[item].quantity * shoppingBag[item].price.match(/(\d+)/)[0];
        return subTotal
    })
   console.log('subTotal-->', subTotal)




    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">My Bag (<span>{numberBag}</span> items)</h5>
                                    <p><ShoppingBagOutlinedIcon/><span>Items in bag are not reserved. Checkout now to get your gear.</span>
                                    </p>
                                </div>
                                <div className="card-body">
                                    {shoppingBag &&
                                        shoppingBag.map((item, index)  => {

                                            return (

                                                    <div className="row" key = {index}>
                                                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                            {/*// <-- Image -->*/}
                                                            <div
                                                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                                                data-mdb-ripple-color="light">
                                                                <img

                                                                src={item.images?.find(i => i.colorId === item.colorId).mainCarousel?.media?.split('|')[0]}
                                                                    className="w-100" alt='' style = {{width:'210px', height: '210px'}}/>
                                                                <a href="#!">
                                                                    <div className="mask"
                                                                         style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                                                                </a>
                                                            </div>
                                                            {/*// <-- Image -->*/}
                                                        </div>

                                                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                            {/*// <-- Data -->*/}
                                                            <p><strong>{item.name}</strong></p>
                                                            <p>Color: {item.images?.find(i => i.colorId === item.colorId).colorAlt}</p>
                                                            <p>Size: {item.size}</p>
                                                            <p>
                                                                Edit
                                                            </p>
                                                            <p>Free Shipping + Free Returns</p>
                                                            {/*// <!-- Data -->*/}
                                                        </div>

                                                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                            <p className="text-start text-md-center">
                                                                Item Price:
                                                                <strong>{item.price}</strong>
                                                            </p>
                                                            {/*// <!-- Quantity -->*/}
                                                            <div className="d-flex mb-4" style={{
                                                                maxWidth: "300px",
                                                                display: 'flex',
                                                                alignItems: 'flex-end'
                                                            }}>
                                                                {/*<button className="btn btn-light px-2 me-2"*/}
                                                                {/*        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">*/}
                                                                {/*    <RemoveOutlinedIcon/></button>*/}

                                                                <div className="form-outline">
                                                                    <label className="form-label"
                                                                           htmlFor="form1">Quantity</label>
                                                                    <input id="form1" min="0" name="quantity" value={item.quantity}
                                                                           type="number"
                                                                           className="form-control"/>

                                                                </div>

                                                                {/*<button className="btn btn-light px-2 ms-2"*/}
                                                                {/*        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">*/}
                                                                {/*    <AddOutlinedIcon/></button>*/}
                                                            </div>
                                                            {/*// <!-- Quantity -->*/}

                                                            {/*// <!-- Price -->*/}

                                                            {/*// <!-- Price -->*/}
                                                            <p className="text-start text-md-center">
                                                                Total Price:
                                                                <strong>{item.price}</strong>
                                                            </p>
                                                            <div><span>Save for Later</span> |

                                                                <span onClick={() => dispatch(actions.cartAction.removeFromShoppingBag(item))}

                                                                > Remove</span></div>
                                                        </div>
                                                    </div>



                                            )
                                        })


                                    }

                                    <hr className="my-4"/>


                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Saved for Later</strong></p>
                                    <p className="mb-0">Sign in or create a member account to view your saved items.</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                         alt="Visa"/>
                                    <img className="me-2" width="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                         alt="American Express"/>
                                    <img className="me-2" width="45px"
                                         src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                         alt="Mastercard"/>
                                    <img className="me-2" width="45px"
                                         src="https://1000logos.net/wp-content/uploads/2017/05/PayPal-Logo-2007.png"
                                         alt="PayPal acceptance mark"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Order Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center px-0 pb-0">
                                            Subtotal
                                            <span>$ {subTotal}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>FREE</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            TAX
                                            <span>Calculated at Checkout</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Estimated Total</strong>

                                            </div>
                                            <span><strong>$ {subTotal}</strong></span>

                                        </li>
                                        {/*<strong>*/}
                                        {/*    <p className="mb-0">or 4 payments of $17.00 with</p>*/}
                                        {/*</strong>*/}
                                    </ul>

                                    <Link to='/login'
                                        type="button"
                                        className="btn btn-danger btn-lg btn-block"
                                        style={{width: '100%'}}


                                    >
                                        <img style={{width: '5%', objectFit: 'cover'}}
                                              // onClick={placeHolder}
                                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/2048px-Lululemon_Athletica_logo.svg.png"
                                             alt=""/>
                                        CHECKOUT
                                    </Link>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default MyBag;