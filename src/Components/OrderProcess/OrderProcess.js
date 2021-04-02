import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './OrderProcess.css'

const OrderProcess = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrder]  =  useState([]);

    useEffect(() =>{
        fetch('https://blooming-chamber-00564.herokuapp.com/orderprocess?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setOrder(data));
    }, [loggedInUser.email])
    return (
        <div className="order-container">
            <div className="order">
                <h3>Your Orders: {orders.length}</h3>
                    {
                        orders.map(order => <li><h4>You ordered: "{order.name}" of {order.author} on {order.date}</h4> </li>)
                    }
            </div>
        </div>
    );
};

export default OrderProcess;