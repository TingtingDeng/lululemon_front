import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Modal = ({open,imgUrl,product, name, sizes, colorId, productId,price, onClose}) => {

    const navigate = useNavigate();

    const shoppingBag = useSelector(state => state?.cartReducer.shoppingBag)
    console.log('shoppingBag/Modal', shoppingBag)
    const  numberBag = useSelector(state => state?.cartReducer.numberBag)
    console.log('numberBag-->', numberBag)

    let subTotal = 0;
    shoppingBag &&
    Object.keys(shoppingBag).forEach(item => {
        subTotal += shoppingBag[item].quantity * shoppingBag[item].price?.match(/(\d+)/)[0];
        return subTotal
    })

    if(!open) return null

    return ReactDom.createPortal (
        <div className='overlay-styles'>
           <div className='modal-styles'>
               <div className="modal-container">
                   <div className="modal-top">
                       <div className="modal-top-left">
                           <h2 className="modal-header-title">Added To Your Bag</h2>
                           <div className="bag-icon-container">
                               <ShoppingBagOutlinedIcon/>
                               {/*<img src={imgUrl} alt="" style={{width: '32px', height: '32px'}}/>*/}
                               <div className="bag-icon-items">{numberBag} items</div>

                           </div>
                       </div>
                       <button onClick={onClose}>X</button>
                   </div>

                   <div className="modal-medium">
                       <div className="product-info-container">


                           <img src={imgUrl} alt="" style={{width: '93px', height: '111px'}}/>
                           <div className="product-details">
                               <h3>{name}</h3>
                               <span className="product-size">Size: {sizes}</span>
                               <span className="product-price">{price}</span>

                           </div>
                       </div>

                       <div className="checkout-container">
                           <div className="subtotal-container">
                               <span>Subtotal</span>
                               <span>{price}</span>
                           </div>
{/*                           <div >*/}
{/*                               <button className='btn-checkout'*/}
{/*o                                      onClick={() => navigate('/carts')}*/}


{/*                               >VIEW BAG & CHECKOUT</button>*/}
{/*                           </div>*/}
                           <Link to={`/mybag`}>
                               <button className='btn-checkout'

                               >VIEW BAG & CHECKOUT</button>


                           </Link>


                           <div className="continue-shopping">
                               <span className='continue-shopping-text'>CONTINUE SHOPPING</span>
                               <span>---></span>
                           </div>

                       </div>

                   </div>


                   {/*<div className="modal-bottom">*/}
                   {/*    <h2>Goes well with</h2>*/}
                   {/*    <div className="bottom-product-container">*/}
                   {/*        <div className="bottom-product-item">*/}

                   {/*            <img src={imgUrl} alt="" />*/}
                   {/*            <span>Wunder Train</span>*/}
                   {/*            <div className="bottom-product-info">*/}
                   {/*                <span>$88 CAD</span>*/}

                   {/*            </div>*/}
                   {/*        </div>*/}
                   {/*        <div className="bottom-product-item">*/}

                   {/*            <img src={imgUrl} alt="" />*/}
                   {/*            <span>Wunder Train</span>*/}
                   {/*            <div className="bottom-product-info">*/}
                   {/*                <span>$88 CAD</span>*/}

                   {/*            </div>*/}
                   {/*        </div>*/}
                   {/*        <div className="bottom-product-item">*/}

                   {/*            <img src={imgUrl} alt="" />*/}
                   {/*            <span>Wunder Train</span>*/}
                   {/*            <div className="bottom-product-info">*/}
                   {/*                <span>$88 CAD</span>*/}

                   {/*            </div>*/}
                   {/*        </div>*/}
                   {/*        <div className="bottom-product-item">*/}

                   {/*            <img src={imgUrl} alt="" />*/}
                   {/*            <span>Wunder Train</span>*/}
                   {/*            <div className="bottom-product-info">*/}
                   {/*                <span>$88 CAD</span>*/}

                   {/*            </div>*/}
                   {/*        </div>*/}
                   {/*    </div>*/}


                   {/*</div>*/}


               </div>


           </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;