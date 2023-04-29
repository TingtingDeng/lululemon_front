import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './SuccessShopping.css'
import axios from "axios";




const SuccessShopping = () => {
    const modalStyle = {
        position: 'fixed',
        margin: 'auto',
        top: '500px',
        left: '500px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        zIndex: '1000',
        padding: '50px',
        width: '700px',
        height: '300px',

    }



    const btnStyle = {
        backgroundColor: 'red',
        width: '180px',
        height: '53px',
        borderRadius: '5px',
        borderStyle: 'none',
        color: 'white'
    }

    const navigate = useNavigate()
    const [orders, setOrders] = useState([]);
    const [selectedPeriods, setSelectedPeriods] = useState({
        lastSixMonths: false,
        lastYear: false,
        all: false,
    });

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         const response = await axios.get('http://localhost:5000/order');
    //         setOrders(response.data);
    //     };
    //     fetchOrders();
    // }, []);
    //
    // const filteredOrders = orders.filter(order => {
    //     const orderDate = new Date(order.date);
    //     const currentDate = new Date();
    //     if (selectedPeriods.lastSixMonths) {
    //         return currentDate.getTime() - orderDate.getTime() < 183 * 24 * 60 * 60 * 1000;
    //     } else if (selectedPeriods.lastYear) {
    //         return currentDate.getTime() - orderDate.getTime() < 365 * 24 * 60 * 60 * 1000;
    //     } else return selectedPeriods.all;
    // });

  useEffect(() => {
      const placeHolder = async () => {

              const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))

              const orderItems = shoppingBag.map(item => ({
                  quantity: item.quantity,
                  productId: item.productId,
                  colorId: item.colorId,
                  size: item.size,

              }))
              console.log('orderItems--->', orderItems)


              const data = {
                  "orderNumber": "133456789413",
                  "userEmail": "mark2win@info.com",
                  "shippingAddress": "113 defence street",
                  "orderItems": orderItems,
                  "taxRate": 1.13,
                  "totalAmount": 113.00,
              }

              try {

                  let res = await axios.post('http://localhost:5000/order', data)
                  console.log('res-->', res)


              } catch (error) {
                  console.log(error)
              }
          }

      placeHolder()

  })





    const handleCheckboxChange = period => {
        setSelectedPeriods({
            ...selectedPeriods,
            [period]: !selectedPeriods[period],
        });
    };

    const handlePrint = async (e) => {
        e.preventDefault()
        try {

           const data = {
               "orderNumber": "1234567929",
               "userEmail": "mark2win@info.com",
               "shippingAddress": "113 defence street",
               "orderItems": [
                   {
                       "price": "",
                       "name": "",
                       "quantity": 1,
                       "size": "s"

                   }
               ],

               "taxRate": 1.13,
               "totalAmount": 113.00,
           }


            let res = await axios.post('http://localhost:5000/create-pdf', data)
            console.log('res-->', res)

        } catch (error) {
            console.log(error)

        }

    }


    return (
        <div className='container'>
            <div className='modal-style'>

                <img src="/img/success.jpg" alt="" style={{width: '200px', height: '200px'}}/>
                <span className='text-span'>Thank you for Payment!</span>

                <button style={btnStyle}
                        onClick={() => navigate('/')}
                >Continue Shopping
                </button>

                <button className="btn-print"
                        onClick={handlePrint}


                >Print Receipt</button>

                <div className="order-container">
                    {/*<span className="order">ORDERS</span>*/}
                    <div className="option-period">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedPeriods.lastSixMonths}
                                onChange={() => handleCheckboxChange('lastSixMonths')}
                            />
                            Last 6 Months
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedPeriods.lastYear}
                                onChange={() => handleCheckboxChange('lastYear')}
                            />
                            Last Year
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedPeriods.all}
                                onChange={() => handleCheckboxChange('all')}
                            />
                            All Time
                        </label>
                    </div>

                </div>




            </div>





        </div>



    );
};

export default SuccessShopping;