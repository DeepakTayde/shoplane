import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../store/wishListSlice";
import { addToCart } from "../store/cartSlice";
import {Link, useNavigate } from "react-router-dom";

const WishListItem = (props) => {
  const { id, title, image, category, description, rating, price } = props.data;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCartAdd = ({ id, title, image, category, description, rating, price }) => {
    dispatch(addToCart({ id, title, image, category, description, rating, price }));
    setShowAlert(true);
    setAddedToCart(true);

          setTimeout(() => {
        setShowAlert(false);
      }, 2000);
  };

  const handleCheckoutToCart = () => {
    navigate("/cart");
  };

  const handleRemove = (productId) => {
    dispatch(removeFromWishList(productId));
  };

  return (
    <>
      <div key={id} className=" rounded justify-content-center">
        <div class="card h-100 p-2">
          <div class="row g-0">
            <div class="col-md-3">
              <div className="text-center p-2">
                <img
                  src={image}
                  alt=""
                  className="img-responsive img-fluid "
                  style={{ height: "250px" }}
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{title}</h5>

                <p class="card-text">
                  <small class="text-muted">{category}</small>
                </p>

                <p class="card-text">
                  <small>{description}</small>
                </p>
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

                <h6 className=" text-dark">Price : $ {price}</h6>
              </div>
            </div>

            <div class="col-md-3 pt-5">
              <div className=" card-body">
                <div className=" btn-group-sm">
                
                  <Link
                    to={"/products/details/" + id}
                    className="btn btn-warning btn-sm btn-block"
                  >
                    More Details
                  </Link>

                  {showAlert && addedToCart ? (
                    <alert
                      variant="success"
                      className=" text-success text-center mt-3"
                    >
                      Item added to cart!
                    </alert>
                  ) : null}

                  <button
                    variant={addedToCart ? "primary" : "success"}
                    className={`btn ${
                      addedToCart
                        ? "btn btn-success btn-sm btn-block"
                        : "btn btn-primary btn-sm btn-block"
                    }`}
                    onClick={addedToCart ? handleCheckoutToCart :()=> handleCartAdd({ id, title, image, category, description, rating, price })}
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


                  <button
                    onClick={() => handleRemove(id)}
                    className="btn btn-block btn-danger"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListItem;
