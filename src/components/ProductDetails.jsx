import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import SummeryCard from "./SummeryCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

const ProductDetails = (props) => {
  const {id, title, price, description, category, image, rating } = props.data;

  const dispatch = useDispatch();
  const navigate =useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCartAdd = ({ id, image, title, price, category, description, rating }) => {
    dispatch(addToCart({
      id, image, title, price, category, description, rating,
    })
  )
    setShowAlert(true);
    setAddedToCart(true);

    
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);

  };

  const handleCheckoutToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="container-fluid py-2">
      <div className="row">
        <div className=" col-lg-9 mt-3">
          <div className="card h-100 p-3 ps-5 pe-5">
            <div className="row no-gutters">
              <div className="col-md-3  p-2 text-center border-right">
                <img
                  src={image}
                  alt=""
                  className="img-responsive img-fluid "
                  style={{ height: "300px" }}
                />
              </div>

              <div className="col-md-9 pl-2">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>BRAND:</b> {title}
                  </h5>
                  <h6>
                    <b>CATEGORY: </b>
                    {category}
                  </h6>
                  <p className="card-text">
                    <b>DESCRIPTION: </b>
                    {description}
                  </p>
                  <hr />
                  <div className="d-flex">
                    <Rating
                      name="half-rating-read"
                      value={rating.rate}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <h6>({rating.count})</h6>
                  </div>

                  <h6 className="">$ {price}</h6>
                </div>

                {showAlert && addedToCart ? (
                  <alert variant="success" className=" text-success text-center mt-3">
                      Item added to cart!
                  </alert>
                ) : null}
                <button
                variant={addedToCart ? "primary" : "success"}
                className={`btn ${
                  addedToCart
                    ? "btn btn-success  btn-block"
                    : "btn btn-primary  btn-block"
                }`}
                onClick={addedToCart ? handleCheckoutToCart :()=> handleCartAdd({ id, image, title, price, category, description, rating })}
                // disabled={addedToCart}
              >
                {addedToCart ? (
                  "Checkout to Cart"
                ) : (
                  <span>
                    <i className="fa-solid fa-cart-shopping"></i> Add To
                    Cart
                  </span>
                )}
              </button>
                <button className="btn btn-warning btn-block">
                    Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mt-3 h-100">
            <div className="card  p-3">
                <h3 className="text-center"><b>Cart Items</b></h3>
                <hr />
                  <SummeryCard/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
