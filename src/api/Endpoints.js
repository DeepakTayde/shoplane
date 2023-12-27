import Constants from "./Constants"

const Endpoints = {
    PRODUCTS_URL : `${ Constants.BASE_URL }products`,
    CATEGORIES_URL: `${ Constants.BASE_URL }products/categories`,
    SUB_CATEGORY_URL : `${Constants.BASE_URL}products/category/`,
    PRODUCT_BY_ID_URL : `${Constants.BASE_URL}products/`,
    LOGIN_USER_URL : `${Constants.BASE_URL}auth/login`,
    REGISTER_USER_URL : `${Constants.BASE_URL}users`,

    // ELECTRONICS_URL : `${Constants.BASE_URL}products/category/electronics`,
    // MENS_CLOTHING_URL : `${Constants.BASE_URL}products/category/men's%20clothing`,
    // WOMENS_CLOTHING_URL : `${Constants.BASE_URL}products/category/women's%20clothing`,
}

export default Endpoints;