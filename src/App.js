import "./App.css";
// import LandingPage from "../src/pages/landing-page/LandingPage";
import CartPage from "./pages/cart-page/CartPage";
import LandingPage from "./pages/landing-page/LandingPage";
import ProductListingPage from "./pages/product-listing-page/ProductListingPage";
import LoginPage from "./pages/login-page/LoginPage";
import WishlistPage from "./pages/wishlist-page/WishlistPage";
import SigninPage from "./pages/signin-page/SigninPage";

import {Routes ,Route} from "react-router-dom";

function App() {
    return (
        
        <div className = "App" >
        <Routes>
        <Route path="/WishlistPage" element={<WishlistPage />} />
        <Route path="/SigninPage" element={<SigninPage />} />
        <Route path="/LoginPage" element={<LoginPage />} /> 
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/ProductListingPage" element={<ProductListingPage />} />
        <Route path="/" element={<LandingPage />} />

      </Routes>
        </div>
    );
}
export default App;