import React from "react";
import { Rating } from "@mui/material";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ( {id, image, title, price, quantity=0, category, description, rating} ) => {
  const dispatch = useDispatch();
//   const {   id,
//   image,
//   title,
//   price,
//   quantity = 0,
//   category,
//   description,
//   rating} = props
  console.log( id,
  image,
  title,
  price,
  quantity,
  category,
  description,
  rating
)

  
  return (
    <>
      <div  className=" rounded justify-content-center">
        <div class="card h-100 p-2">
          <div class="row g-0">
            <div class="col-md-3">
              <div className="d-flex align-item-md-center pt-5 p-2">
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
                    value={rating?.rate}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <h6>({rating?.count})</h6>
                </div>

                <h6 className=" text-dark">
                  <small>$</small>
                  <strong>{price}</strong>
                </h6>
              </div>
            </div>

            <div class="col-md-3 pt-2">
              <div className=" card-body text-center">
                <div className=" card-text mb-5 ">
                <strong>Total Price : </strong>
                <strong>${(price * quantity).toFixed(2)}</strong>
                </div>

                <div class=" btn-group mb-2" role="group">
                <button onClick={() => dispatch(decrementQuantity(id))} className="btn btn-danger" type="button">-</button>
                <input className="btn btn-block " type="input" value={quantity}/>
                <button onClick={() => dispatch(incrementQuantity(id))} className="btn btn-success" type="button">+</button>
                </div>
                <button
                onClick={() => dispatch(removeItem(id))}
                  className="btn btn-block btn-danger"
                >
                  Remove
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
