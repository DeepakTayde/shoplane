## **SHOPLANE: E-commerce Project 🛍️**

**ShopLane** is an e-commerce web application offering users a seamless shopping experience, enabling them to explore a wide range of products, add items to their cart, and complete secure transactions. This project demonstrates the implementation of key e-commerce functionalities using modern web development technologies.

**Live Demo**: [ShopLane on Netlify](https://shoplane-by-deepak.netlify.app/)

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

## Key Features 🌟

- **Product Catalog**: Browse through a diverse range of products with detailed descriptions, prices, and images.
- **Search and Filter**: Easily find desired products using the search bar and various filters (category, price range, ratings).
- **Product Details**: View comprehensive information about individual products, including customer reviews and ratings.
- **Shopping Cart**: Add products to the cart, update quantities, and review total costs in real-time.
- **Checkout Process**: Proceed through a secure checkout process, including address input and payment.
- **Order History**: View and track previous orders.
- **Responsive Design**: The UI is designed to provide a smooth experience across different devices, using **React JS** and **CSS Flexbox**.
- **Backend Integration**: The backend handles product information, user authentication, and order management.

## Tech Stack 🛠️

- **Frontend**: React JS, CSS Flexbox
- **Backend**: Django, Python
- **Database**: SQLite (Django ORM)
- **Hosting**: Netlify for frontend deployment

## Project Structure 📁

- **Frontend**: All React components are located in the `src/` folder, with API handling performed using Axios in the `services/` folder.
- **Backend**: Django is used for handling product data, user authentication, and order management, ensuring secure and efficient processing.


## FrontEnd File Structure 📁

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


## Installation and Setup 🚀

### 1. Clone the repository

```bash
git clone https://github.com/DeepakTayde/shoplane.git
cd shoplane
```

### 2. Frontend Setup

Navigate to the frontend folder and install dependencies:

```bash
npm install
npm start
```

This will start the development server at `http://localhost:3000`.

### 3. Backend Setup

Make sure you have Python and Django installed. Navigate to the backend folder and run:

```bash
pip install -r requirements.txt
python manage.py runserver
```

The backend will run on `http://localhost:8000`.

## Usage ⚙️

- **Homepage**: Displays a collection of products available for purchase.
- **Product Details**: Click on any product to see detailed information including reviews and ratings.
- **Add to Cart**: Add products to your shopping cart and proceed to checkout.
- **Order History**: View previous orders and their status.
  
## Live Deployment 🔗

Access the live version of the app here: [ShopLane on Netlify](https://shoplane-by-deepak.netlify.app/)

## Contributing 🤝

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements 🙌

Thanks to the open-source community for providing valuable tools and resources that helped in building this project.

---

