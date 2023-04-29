
import {Navigate, Route, Routes} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Main from "./main/Main";
import SingleProductPage from "./singleProduct/SingleProductPage";
import CheckOut from "./login/CheckOut";
import MyBag from "./cart/MyBag";

import {Payment} from "./cart/Payment";
import SuccessShopping from "./cart/SuccessShopping";
import LoginContainer from "./login/LoginContainer";
import ToCheckOutPage from "./singleProduct/ToCheckOutPage";
import axios from "axios";

function App() {
    const [isCartEmpty] = useState(false)
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setMessage(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
    <div className="App">
        <p>{message}</p>
       {/*<Home/>*/}
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/product/:name/:productId/:colorId' element={<SingleProductPage/>} />
            <Route path='/product/:name/:productId/:colorId/:size' element={<ToCheckOutPage/>} />
            <Route path='/mybag' element={<MyBag /> }/>

            <Route path='/login' element={<CheckOut />} />
            {/*<Route path='/login' element={<LoginContainer />} />*/}

            <Route path='/payment' element={<Payment />} />
            <Route path='/success-shopping' element={<SuccessShopping />} />

            {/*// mobile version*/}
            {/*<Route path='/cartList' element={<CartList/>} />*/}
            {/*<Route path='/orderList' element={<OrderList/>} />*/}
            {/*<Route path='/shippingForm' element={<ShippingForm/>} />*/}

        </Routes>





    </div>
  );
}

export default App;
