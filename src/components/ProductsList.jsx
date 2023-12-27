import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productSlice";
import Products from "./Products";
import { STATUSES } from "../store/productSlice";



const ProductsList = () => {
  const dispatch = useDispatch()
  const { data: products, status }= useSelector((state) => state.product)
  // const [products, setProducts] = useState([]);

  // const getData = () => {
  //   axios
  //     .get(Endpoints.PRODUCTS_URL)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProducts(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    dispatch(fetchProducts())
    // getData();
  }, []);

  if(status === STATUSES.LOADING){
    return <h2>Loading....</h2>
  }
  if(status === STATUSES.ERROR){
    return <h2>Something went wrong!</h2>
  }

  return (
    <div className="container-fluid py-2">
      <div class="row row-cols-sm-5">
        {
          products.map((product, index) => (
            <Products key={index} data={product}/>
          ))
        }
      </div>
    </div>
  );
};

export default ProductsList;
