# SHOPLANE: E-commerce Project
## Overview
Welcome to SHOPLANE, an e-commerce platform built with React, Bootstrap, Formik, Yup, React Router DOM, Fake Store API, and Redux Toolkit. This project aims to provide users with a seamless shopping experience, featuring sign-up and sign-in functionalities, a dynamic product catalog, a shopping cart, a favorites page, and detailed product pages.

## Table of Contents
1. 
2. [﻿Usage]
3. [﻿Features]
4. [﻿Project Structure]
5. [﻿Technologies Used]
6. [﻿Contributing]
7. [﻿License]
## Usage
The application provides a user-friendly interface for shopping. Key functionalities include:

- **Sign Up and Sign In:**
    - Users can sign up for a new account or sign in with existing credentials.
    - Validation is handled using Formik and Yup for a seamless user experience.
- **Product Catalog:**
    - Explore a variety of products in the catalog, each displayed in a product card.
    - Click on a product card to view details and add/remove items to/from the cart.
- **Shopping Cart:**
    - Access the shopping cart to view the items added.
    - Remove items from the cart.
- **Favorites Page:**
    - Navigate to the favorites page to see all hearted items.
    - Add and remove items from favorites.
- **Category Pages (Clothing and Accessories):**
    - Explore specific categories to view relevant items.
    - Add items to the cart directly from category pages.
- **Product Details:**
    - Click on a product to view detailed information on a dedicated product details page.
## Features
1. **Authentication:**
    - Secure user authentication using Formik and Yup.
    - Sign-up and sign-in functionalities.
2. **Product Catalog:**
    - Display a dynamic catalog of products from the Fake Store API.
    - Product cards show add/remove buttons for easy cart management.
3. **Shopping Cart:**
    - Maintain a shopping cart that displays added items.
    - Ability to remove items from the cart.
4. **Favorites Page:**
    - A dedicated page to display hearted items.
    - Add and remove items from favorites.
5. **Category Pages:**
    - Explore items by category (Clothing and Accessories).
    - Add items to the cart directly from category pages.
6. **Product Details Page:**
    - Click on a product to view detailed information.
## Project Structure
```
/shoplane
|-- public
|-- src
|   |-- components
|   |   |-- Auth
|   |   |-- Cart
|   |   |-- Favorites
|   |   |-- ProductDetails
|   |   |-- ProductList
|   |   |-- ...
|   |-- pages
|   |   |-- CartPage
|   |   |-- FavoritesPage
|   |   |-- HomePage
|   |   |-- LoginPage
|   |   |-- ProductDetailsPage
|   |   |-- ...
|   |-- redux
|   |   |-- authSlice.js
|   |   |-- cartSlice.js
|   |   |-- favoritesSlice.js
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- .gitignore
|-- package.json
|-- README.md
|-- ...
```

![diagram-export-1-16-2024-4_06_06-PM](https://github.com/DeepakTayde/shoplane/assets/108435183/c8635ea5-4cec-47ea-9f96-3583e0523f84)
![diagram-export-1-16-2024-4_05_37-PM](https://github.com/DeepakTayde/shoplane/assets/108435183/0de4db7e-7c6b-4623-b989-e78a5533a660)


## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Bootstrap:** A popular CSS framework for responsive and mobile-first front-end development.
- **Formik:** A form library for React that helps with form handling.
- **Yup:** A JavaScript schema builder for value parsing and validation.
- **React Router DOM:** A routing library for React.
- **Fake Store API:** A fake REST API for testing and prototyping.
- **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
## Contributing
Feel free to contribute by opening issues or submitting pull requests. Follow the [﻿Contributing Guidelines](https://chat.openai.com/c/CONTRIBUTING.md).

## License
This project is licensed under the MIT License - see the LICENSE file for details.

