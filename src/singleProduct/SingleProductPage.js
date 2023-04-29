import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import './SingleProductPage.css';

import actions from '../actions';
import axios from "axios";
import {actionType, mykey} from "../helper";
import Button from '@mui/material/Button';

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const SingleProductPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {name,productId, colorId} = useParams()
    console.log('productId-->', productId)
    console.log('colorId--->', colorId)
    console.log('name--->', name)


    const [index, setIndex] = useState(0)

    useEffect(() => {
        dispatch(actions.productAction.fetchSingleProduct(productId))
    }, [])

    useEffect(() => {
        dispatch(actions.productAction.fetchColorId(colorId))
    }, [colorId])


    const product = useSelector(state => state?.productReducer?.product)
    console.log('product/singleProduct--->', product)

    const imagesSelected = product.images && product.images.find(item => {
        return item.colorId === colorId
    })
    // console.log('imagesSelected-->', imagesSelected)

    const products = useSelector(state => state?.productReducer?.products)

    console.log('products/singleProduct', products)

    // const nameList = product?.name?.split(" ")
    // console.log('nameList-->', nameList)
    // const likedProducts = products?.filter(item => item?.name?.includes( nameList[3]) )
    // console.log('likedProducts--->', likedProducts)

    const previousHandler = () => {
        if (index > 0) {

            setIndex(index => index - 1)
            // setImgUrl(`http://api-lulu.hibitbyte.com/static/images/productImages/${productId}/${colorId}/${productId}_${colorId}_img[${index}].jpg`)
            // setImgUrl(imagesSelected?.mainCarousel?.media?.split('|') [index])
        }
    };

    const nextHandler = () => {
        if (index < imagesSelected?.mainCarousel?.media?.split('|').length - 1) {
            setIndex(index => index + 1)
            // setImgUrl(`http://api-lulu.hibitbyte.com/static/images/productImages/${productId}/${colorId}/${productId}_${colorId}_img[${index}].jpg`)
            // setImgUrl(imagesSelected?.mainCarousel?.media?.split('|') [index])
        }
    }

    const imgUrl = imagesSelected?.mainCarousel?.media?.split('|') [index]

    const imgHandler = (index) => {
        setIndex(index)
    }
    console.log('index-->', index)



    return (
        <div className='parent-div'>

            {/*  left part  */}
            <div className="top-section">
                <div className="child">
                    <div className="img-product">


                        <img src={imgUrl} className='img-size'/>

                        <div className="carousel-img">
                            <ChevronLeftOutlinedIcon
                                className='arrow'
                                onClick={() => previousHandler(index)}/>



                            <ChevronRightOutlinedIcon
                                className='arrow'
                                onClick={() => nextHandler(index)} />


                        </div>
                        <div className="magnify-glass">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className="img-gallery">

                        {imagesSelected &&
                            imagesSelected?.mainCarousel?.media?.split('|').map((img, index) => {
                                return (
                                    <div key={index} className='img-gallery-item'>
                                        <img
                                            src={img}
                                            onClick={() => imgHandler(index)}
                                            style={{width: '36px', height: '36px'}}
                                            alt=""/>

                                    </div>
                                )
                            })

                        }

                        <div className="model-info">Jade is 5'9" and wears a size 6</div>

                    </div>
                </div>

                {/* right part   */}
                <div className="child entire-center">
                    <ul className="nav-clothes">
                        <li className="women-clo">Women's Clothes</li>
                        <li className="c-j">Coats & Jackets</li>
                    </ul>

                    <div className="product-title">
                        <span className='pro-name'>{product.name}</span>

                        <div className="payment-way">
                            <span className="price-clothes"> {product.price} </span>

                            <div>
                                {/*<img src='./single1.jpg' alt='' className="way-to-pay" />*/}

                            </div>
                        </div>
                        <div className="colour-class">
                            <span className='colour-text'>Colour</span>
                            <span className='colour-text'>{imagesSelected?.colorAlt}</span>

                        </div>
                        <div className="colors-icon">
                            {product.swatches &&
                                product.swatches.map((item, index) => {
                                    return (
                                        <div key={index} className='swatch-img'>
                                            <img src={item.swatch}
                                                 onClick={() => navigate(`/product/${name}/${productId}/${item.colorId}`)}

                                            />
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div className="size-guide">
                            <span>Select Size</span>
                            <span>Size Guide</span>
                        </div>

                        <div className='all-sizes'>
                            {product?.sizes &&

                                product?.sizes[0] &&

                                product?.sizes[0].details.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <button onClick={() => navigate(`/product/${name}/${productId}/${colorId}/${item}`)}


                                            >{item}</button>
                                        </div>

                                    )
                                })

                            }
                        </div>

                        {/* hard code*/}
                        <div className="my-size">
                            <img width="16px" height="16px"
                                 src="https://cdn.truefitcorp.com/store-lls/7.0.0-localized.48/resources/store/lls/images-snapshot/responsive/logo/bg-logo-red.svg"
                                 alt=""/>
                            <span className="p-my-size">What's My Size?</span>
                        </div>
                        <div className="main-row">

                            <div className="sub-row ship-me">
                                <h3>Ship it to me</h3>
                                <p className="get-by-date">free ship and returns</p>
                            </div>

                            <div className="sub-row">
                                <div className="pick-up-in-store">
                                    <svg height="20" width="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                         className="accordionItemHeadingIcon-3fkWR" focusable="false" role="img"
                                         aria-hidden="true">
                                        <path
                                            d="M14.667 14.167h-.834v-8.62l.667.246a.5.5 0 0 0 .667-.46V2.667a.5.5 0 0 0-.307-.46 17.68 17.68 0 0 0-13.72 0 .5.5 0 0 0-.307.46v2.666a.5.5 0 0 0 .667.46s.667-.253.667-.246v8.62h-.834a.667.667 0 0 0-.666.666v.334h14.666v-.334a.667.667 0 0 0-.666-.666Zm-8.834 0V9.833H7.5v4.334H5.833Zm3.667 0h-1V9.833h1.667v4.334H9.5Zm3.333 0h-1.666V9.333a.507.507 0 0 0-.5-.5H5.333a.507.507 0 0 0-.5.5v4.834H3.167V5.213a17.393 17.393 0 0 1 9.666 0v8.954Zm-11-9.567V3a17.18 17.18 0 0 1 12.334 0v1.6a18.147 18.147 0 0 0-12.334 0Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p className="pickup"> Pick up in-store </p>
                                <i className="fa-regular fa-plus"></i>
                            </div>

                            <div className="sub-row">
                                <button
                                    className="atb-btn"
                                    onClick={() => alert('Please select size')}

                                >

                                    Add to bag

                                </button>
                            </div>

                        </div>


                    </div>


                </div>


            </div>
            <div className="child-like">
                {/*<div className="top-right">*/}
                {/*    <h4>you may like</h4>*/}
                {/*    {*/}
                {/*        likedProducts &&*/}
                {/*        likedProducts.map((item, index) => {*/}
                {/*            return (*/}
                {/*                <div className="product-rec">*/}
                {/*                    <img*/}
                {/*                        src={item.images[0].mainCarousel?.media?.split('|')[0]}*/}
                {/*                        alt=""*/}
                {/*                        style={{width: '80px', height: '100px'}}*/}
                {/*                    />*/}

                {/*                    <span className='link-product'>{item.name}</span>*/}

                {/*                </div>*/}
                {/*            )*/}

                {/*        } )*/}
                {/*    }*/}


                {/*</div>*/}

            </div>
        </div>
    );
};

export default SingleProductPage;