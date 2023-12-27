import React from 'react'
import { useSelector } from "react-redux";


const SummeryCard = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);


    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartItems.forEach((item) => {
          totalQuantity += item.quantity;
          totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
      };

  return (
    <>
    <div className="card h-100 p-3 ps-5 pe-5">
    <h5 className="mb-3">Total Items : <b>{getTotal().totalQuantity} items</b> </h5>

    <h5 className="mt-3">
      <b>
        Order Total  : $
        {getTotal().totalPrice}
      </b>
    </h5>
  </div>
    </>
  )
}

export default SummeryCard