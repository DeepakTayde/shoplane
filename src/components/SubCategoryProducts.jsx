import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import Endpoints from "../api/Endpoints";
import { useParams } from "react-router-dom";

const SubCategoryProducts = () => {
    const {catName} = useParams()
  const [subCategory, setSubCategory] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.SUB_CATEGORY_URL + catName)
      .then((response) => {
        console.log(response.data);
        setSubCategory(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [catName]);

  return (
    <div className="container-fluid py-2">
      <div class="row">
        {
            subCategory.map((category, index) => (
            <Products key={index} data={category}/>
          ))
        }
      </div>
    </div>
  );
};

export default SubCategoryProducts;
