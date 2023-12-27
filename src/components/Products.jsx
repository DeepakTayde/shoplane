import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/cartSlice";
import { addToWishList, removeFromWishList } from "../store/wishListSlice";

const Products = (product) => {
  const { id, image, title, price, category, description, rating } =
    product?.data;

  const dispatch = useDispatch();
  const navigate =useNavigate()

  const [iconColor, setIconColor] = useState(false);
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

  const handleWishList = (product, iconColor) => {
    if(!iconColor){
      dispatch(addToWishList(product))
    } else {
   dispatch(removeFromWishList(product.id));
    }
  };

  return (
    <div key={id} className="col-sm-12 col-lg-3 col-md-3 mt-2">

      <div className="card h-100 rounded p-3 ps-5 pe-5">

        <i
          className="heart fa fa-heart text-right"
          style={{ color: iconColor ? "red" : "gray" }}
          onClick={() => {
            handleWishList(product.data, iconColor);
            setIconColor(!iconColor);    

          }}
        />
        <div className="card-body ">
          <div className="text-center p-2">
            <img
              src={image}
              alt=""
              className="img-responsive img-fluid "
              style={{ height: "150px" }}
            />
          </div>
          <hr />
          <div className=" card-subtitle">
            <h6 className="text-truncate">
              <b>BRAND:</b> {title}
            </h6>
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
        </div>
        <div className=" btn-group-sm">
          <Link
            to={"/products/details/" + id}
            className="btn btn-warning btn-sm btn-block"
          >
            More Details
          </Link>
          {showAlert && addedToCart ? (
            <alert variant="success" className=" text-success text-center mt-3">
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

        </div>
      </div>
    </div>

    //   <div className="col-sm-3">
    //   <div className="card rounded mb-3">
    //   <img src={image} className="card-img-top img-thumbnail d-block" style={{ "max-width": "540px" }} alt="..."/>
    //   <div className="card-body">
    //     <h6 className="card-title"><strong>{title}</strong></h6>
    //     <p className="card-text"><small>{description}</small></p>
    //     <h6 className="card-text mb-2">Price : {price}</h6>
    //     <a href="#" className="btn btn-primary">Add To Cart</a>
    //   </div>
    // </div>
    // </div>
    // <div className="col-sm-3">
    //   <div class="card mb-3" style={{ "max-width": "540px" }}>
    //     <div class="row no-gutters">
    //       <div class="col-md-4">
    //         <img src={image} alt="..." />
    //       </div>
    //       <div className="col-md-8">
    //         <div className="card-body">
    //           <h5 className="card-title">{title}</h5>
    //           <h6 className="card-subtitle mb-2">Price : {price}</h6>
    //           <p className="card-text">
    //             <small>{description}</small>
    //           </p>
    //           <a href="#" className="btn btn-primary">
    //             Add To Cart
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Products;
