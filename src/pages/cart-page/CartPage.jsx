import "../cart-page/cart-page.css"
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import HorizontalCard from "../../components/card-components/horizontal-card-component/HorizontalCardComponent"
import Billing from "../../components/billing-component/BillingComponent"
function CartPage()
{
    return(
 <div>
    <NavBar/>

    <div className="page-heading"><b>MY CART</b></div>

    <div className="cart-product-items-and-cart-bill">

        <div className="cart-product-items">

            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>

        </div>

        <Billing/>

    </div>

    <Footer/>
 </div>
    );

}

export default CartPage;