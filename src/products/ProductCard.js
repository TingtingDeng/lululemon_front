import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from "../actions";
import './Product.css'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";


const ProductCard = ({product}) => {

    const dispatch = useDispatch()

    const defaultImgUrl = product.images[0]?.mainCarousel?.media?.split('|')[0]
    const defaultColorId = product.images[0]?.colorId
    // console.log('defaultImgUrl--->', defaultImgUrl)

    const [imgUrl, setImgUrl] = useState(`${defaultImgUrl}`)
    const [colorId, setColorId] = useState(`${defaultColorId}`)


    const imgChangeHandler = (colorId) => {
        setImgUrl(`http://api-lulu.hibitbyte.com/static/images/productImages/${product.productId}/${colorId}/${product.productId}_${colorId}_img0.jpg`)
        setColorId(colorId)
    }

    useEffect(() => setImgUrl(defaultImgUrl), [product.images])
    useEffect( () => setColorId(defaultColorId), [product.images])



    const swatchesRendered = product.swatches.map((s, index) => {
        // console.log(product.swatches)
        // console.log('colorId--->', s.colorId)
        return (
            <div key={index}>
                <carousel>
                    <div>
                        <img alt=''
                             src={s.swatch}
                             className='swatch-img'
                             onMouseEnter={() => imgChangeHandler(s.colorId)}
                        />
                    </div>

                </carousel>
            </div>

        )
    })
    let productId = product.productId

    return (

        <div className='product-item'>
            <Link to={`/product/${product.name}/${productId}/${colorId}`}>
                <img
                    src={imgUrl}
                    className="product-image"
                    alt=""/>

            </Link>

            <div className="product-swatch-container">
                {swatchesRendered}
            </div>


            <div className='product-name-price'>
                <span>{product.name}</span>
                <span>{product.price}</span>
            </div>


        </div>
    );
};

export default ProductCard;