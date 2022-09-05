import React, {useState, useEffect} from "react";

import Link from "next/link";
import {useStateContext} from "../context/StateContext";
import {runFireworks} from "../lib/utils";
import {BsBagCheckFill} from "react-icons/bs";

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
       <div className="success-wrapper">
           <div className="success">
               <p className="icon">
                   <BsBagCheckFill />
               </p>
               <h2>Thank you for your order!</h2>
               <p className="email-msg">Check your email box for the receipt.</p>
               <p className="description">
                   If you have any questions, please email
                   <a href="mailto:order@order.com" className="email">order@order.com</a>
               </p>
               <Link href="/">
                   <button  className="btn" type="button">Continue Shopping</button>
               </Link>
           </div>
       </div>
    )
}

export default Success;