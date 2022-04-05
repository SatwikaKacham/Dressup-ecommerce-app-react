import "../product-listing-page/product-listing-page.css"
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import SideBar from "../../components/sidebar-component/SidebarComponent"
import VerticalCard from "../../components/card-components/vertical-card-component/VerticalCardComponent";
import VerticalCardWithBadge from "../../components/card-components/vertical-card-with-badge-component/VerticalCardWithBadgeComponent";
export default function ProductListingPage(){
    return(

   <div>
      <NavBar />  
    <div className="side-bar-and-all-products">
       <SideBar />
        <div className="products-listing-page-all-products-container">
            {/* <!-- all products --> */}

              <VerticalCard/>
              <VerticalCard/>
              <VerticalCard/>
              <VerticalCardWithBadge/>
              <VerticalCardWithBadge/>
              <VerticalCardWithBadge/>
              <VerticalCard/>
        </div>
    </div>
     <Footer/>
    </div>
    )
}