import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyWishList } from "../store/wishListSlice";
import WishListItem from "../components/WishListItem";

const WishListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishList);

  // const handleCartAdd=(product)=>{
  //     dispatch(addToCart(product))
  //     setIsAdded(true);

  //     setTimeout(() => {
  //       setIsAdded(false);
  //   dispatch(removeFromWishList(product.id));

  //     }, 2000);
  // }
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-8">
            <div className=" card mt-1 p-2">
             
              <h2 className=" text-center strong ">Wish List </h2>
            </div>
            {
              products.length === 0 ? (
              <div className="mt-3 text-center text-danger">
                
                <h3> Your Wish List Is Empty ...!</h3>
              </div>
            ) : (
              products.map((product, index) => (
                <WishListItem key={index} data={product} />
              ))
            )
          }
          </div>

          <div className="col-lg-4 h-100">
            <div className=" mt-3">
              <button
                onClick={() => dispatch(emptyWishList())}
                className="btn btn-block btn-danger text-center"
              >
                Empty Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListPage;
