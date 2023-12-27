import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SubCategoryProductsPage from "./pages/SubCategoryProductsPage";
import ErrorPage from './pages/ErrorPage'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import WishListPage from './pages/WishListPage'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProtectedRoute Component={ProductsPage}/>} />
          <Route path="/products/details/:id" element={<ProtectedRoute Component={ProductDetailsPage}/>} />
          <Route path="/products/category/:catName" element={<ProtectedRoute Component={SubCategoryProductsPage}/>} />
          <Route path="/about" element={<ProtectedRoute Component={AboutPage}/>} />
          <Route path="/contact" element={<ProtectedRoute Component={ContactPage}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path="/*" element={<ErrorPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
