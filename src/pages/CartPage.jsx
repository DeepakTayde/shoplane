// import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../store/cartSlice";
// import axios from "axios";

import CartItem from "../components/CartItem";
import SummeryCard from "../components/SummeryCard";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("item clg"+cartItems)
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch product details when the cart changes
  //   const fetchProducts = async () => {
  //     const productDetails = await Promise.all(
  //       cartItems.map(async (item) => {
  //         const response = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
  //         return response.data;
  //       })
  //     );
  //     setProducts(productDetails);
  //   };

  //   fetchProducts();
  // }, [cartItems]);

  // console.log( "prod"+cartItems)

  // const handleRemoveFromCart = (productId) => {
  //   dispatch(removeFromCart( {productId} ));
  // };

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-8">
            <div className=" card mt-1 mb-0 p-2">
              <h3 className=" text-center ">
                <b>Shopping Cart</b>
              </h3>
            </div>
            {cartItems.length === 0 ? (
              <div className=" mt-3 text-center text-danger">
              <h3> Your Cart is Empty ..!</h3>
            </div>
            ) : (

              cartItems?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  category={item.category}
                  description={item.description}
                  rating={item.rating}
                />
              ))
            )}
          </div>

          <div className="col-lg-4 h-100">
            <div className=" card mt-1 mb-0 p-2">
              <h3 className="text-center">
                <b>Order Summary</b>
              </h3>
            </div>
            <SummeryCard />

            <div className=" mt-3">
              <button
                onClick={() => dispatch(emptyCart())}
                className="btn btn-block btn-danger text-center"
              >
                Empty Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
