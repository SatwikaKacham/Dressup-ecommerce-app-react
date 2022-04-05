
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import "../landing-page/landing-page.css";
import menClothing from "../../images/men-clothing.jpg";
import womenClothing from "../../images/women-clothing.jpg";
import sale from "../../images/sale.jpg";
import allmenclothing from "../../images/all-men-clothing.jpg";
import allwomenClothing from "../../images/all-women-clothing.jpg";
import allkidsClothing from "../../images/all-kids-clothing.jpg";


function LandingPage(){
    return(
      <div>
     <NavBar/>
    <div className="home-image-slider-container">
        <div className="home-page-image-slides">
            <input type="radio" name="slide-radio" id="radio1"/>
            <input type="radio" name="slide-radio" id="radio2"/>
            <input type="radio" name="slide-radio" id="radio3"/>

            <div className="slide-image first">
                <img src={menClothing}/>
            </div>
            <div className="slide-image">
                <img src={womenClothing}/>
            </div>
            <div className="slide-image">
                <img src={sale}/>
            </div>

            <div className="men-clothing-description-and-button">
                DressUp provides Trendy and occational Men and Women clothing.
                <button className="button-container primary-button"><a  className="home-page-button" href="/products-listing-page/products-listing-page.html">Shop Now</a></button>

            </div>

        </div>
        <div className="slides-manual">
            <label htmlFor="radio1" className="slide-manual-button"></label>
            <label htmlFor="radio2" className="slide-manual-button"></label>
            <label htmlFor="radio3" className="slide-manual-button"></label>
        </div>
    </div>

    <div className="all-categories-and-title-container">
        <div className="page-heading"><b>CATEGORIES</b></div>
        <div className="all-categories-container">
            <div className="category-img-and-head-container">
                <img src={allwomenClothing} alt="Women clothing"/>
                <div className="page-sub-heading">Women Clothing</div>
            </div>

            <div className="category-img-and-head-container">
                <img src= {allmenclothing} alt="men clothing"/>
                <div className="page-sub-heading">Men Clothing</div>
            </div>

            <div className="category-img-and-head-container">
                <img src={allkidsClothing} alt="Kids clothing"/>
                <div className="page-sub-heading">Kids Clothing</div>
            </div>

        </div>

    </div>
   <Footer/>
      </div>
    );
}

export default LandingPage;