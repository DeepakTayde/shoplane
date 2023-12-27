import React, { useState, useEffect } from "react";
import axios from "axios";

import Endpoints from "../api/Endpoints";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({});

  const getData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_ID_URL + id)
      .then((response) => {
        console.log("Response------------->", response.data);
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      {/*added product.rating check because api was failing when rate was undefined*/}
      {product?.rating&&<ProductDetails key={id} data={product} />}
    </>
  );
};

export default ProductDetailsPage;
