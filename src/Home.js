import {Navigate, Route, Routes} from "react-router-dom";
import SingleProductPage from './singleProduct/SingleProductPage'
import Header from "./header/Header";
import Main from "./main/Main";
import Carts from './cart/MyBag';
import {useState} from "react";
import CheckOutProductPage from "./singleProduct/CheckOutProductPage";

function Home() {

    return (
        <div>

            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/product/:name/:productId/:colorId' element={<SingleProductPage/>} />
                <Route path='/product/:name/:productId/:colorId/:sizes' element={<CheckOutProductPage/>} />

            </Routes>

        </div>
    );
}

export default Home;