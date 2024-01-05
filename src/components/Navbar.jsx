import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Endpoints from "../api/Endpoints";
// import { selectCartItems } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken, selectCurrentUser } from "../store/authSlice";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [loginStatus, setLoginStatus] = useState(false);
  // const [userName, setUserName] = useState("");
  const [category, setCategory] = useState([]);
  // const cartProducts = useSelector(selectCartItems)
  const wishListProducts = useSelector((state)=>state.wishList)

  const cart = useSelector((state) => state.cart.cartItems)
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

// const getTotalQuantity = () => {
//   let total = 0
//   cart?.forEach(item => {
//     total += item.quantity
//   })
//   return total
// }

console.log("cart items"+ cart)

const getTotalQuantity = () => {
  let total = 0
  Array.from(cart).forEach(item => {
    total += item.quantity
  })
  return total
}

  // const {"username", "password"}= userName;

  const getData = () => {
    axios
      .get(Endpoints.CATEGORIES_URL)
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onLogoutHandler = () => {
    // localStorage.clear();
    // setLoginStatus(false);

    dispatch(logOut())
    // dispatch(emptyCart())
    // dispatch(emptyWishList())

    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  useEffect(() => {
    // !localStorage.getItem("token")
    //   ? setLoginStatus(false)
    //   : setLoginStatus(true);
      
    // if (localStorage.getItem("user")) {
    //   let user = JSON.parse(localStorage.getItem("user"));
    //   setUserName(user.username);
    // }

    getData();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light py-2">
      <div className="container-fluid">
        <Link className="navbar-brand d-lg-none" to="/">
          SHOPLANE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse p-2 flex-column justify-content-lg-center"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row w-100">
            <Link to="/" className="navbar-brand d-none d-lg-block">
              <b><span className=" text-primary">SHOP</span>LANE</b>
            </Link>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link " to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center">
                {token ? (
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-success btn-lg dropdown-toggle mx-2"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-user mx-2"></i>
                      <span>
                        {user}
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item btn-danger" onClick={onLogoutHandler}>
                        Log Out
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-secondary btn-lg dropdown-toggle mx-2"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-user mx-2"></i>
                      <span>
                        Log In /<small>or SignUp</small>
                      </span>
                    </button>
                    <div className="dropdown-menu">  
                      <Link className="dropdown-item" to={"/register"}>
                        Sign Up
                      </Link>
                      <Link className="dropdown-item" to={"/login"}>
                        Log In
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="nav-item d-flex align-items-center ms-2">
                { token ? (<Link to={'/cart'} className="nav-link  mx-2 position-relative">
                  <i className="fa-solid fa-cart-shopping text-primary"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  { getTotalQuantity() || 0}
                </span>
                </Link>) : <div></div> }
              </li>
              { token ? (<li className="nav-item d-flex align-items-center ms-2">
              <Link to={'/wishlist'} className="nav-link  mx-2 position-relative">
              <i className="fa-solid fa-heart text-primary"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              { wishListProducts.length }
            </span>
            </Link>
              </li>) : <div></div> }
            </ul>
          </div>
          <div className="d-block w-100 pt-2">
          <hr className="my-2" />
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item mx-2">
                <Link to={"/products"} className="nav-link">
                  All
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to={"/products/category/" + category[0]}
                  className="nav-link"
                >
                  Electronics
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to={"/products/category/" + category[1]}
                  className="nav-link"
                >
                  Jewelry
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to={"/products/category/" + category[2]}
                  className="nav-link"
                >
                  Men's Clothings
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to={"/products/category/" + category[3]}
                  className="nav-link"
                >
                  Women's Clothings
                </Link>
              </li>
            </ul>
          <hr className="my-0" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
