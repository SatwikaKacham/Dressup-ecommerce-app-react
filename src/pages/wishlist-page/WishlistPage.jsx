
import "../wishlist-page/wishlist-page.css"
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import WishlistCard from "../../components/card-components/wishlist-card-component/WishlistCardComponent"

export default function WishlistPage(){
    return(

        <div>
            <NavBar/>
      <div className="page-heading"><b>MY WISHLIST</b></div>

<div className="wishlist-products-listing-container">

       <WishlistCard/>
       <WishlistCard/>
       <WishlistCard/>
       <WishlistCard/>
       <WishlistCard/>

      </div>



<Footer/>

        </div>

    )
}