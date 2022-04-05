import CardImg from "../wishlist-card-component/images/card-image.png"
import "../wishlist-card-component/wishlist-card-component.css"
export default function WishlistCardComponent()
{
    return(
        <div className="card-container">
        <div className="card-image-and-header">
            <img className="card-image" src={CardImg}/>
            <span className="material-icons-outlined cross-badge">
                close
                </span>
            <header className="card-heading">
                <div className="card-head"><b>Levis</b></div>
                <div className="card-discription"> Women Pink Printed Sweatshirt </div>
            </header>

        </div>

        <div className="card-price-tag">
            <div className="card-price">Rs. 1874 </div>
        </div>

        <div className="card-buttons ">
            <button className="primary-icon-button wishlist-button-and-icon">  
                    <span className="material-icons-outlined wishlist-button"> shopping_cart</span>
                     Move to Cart
                     </button>
        </div>
    </div> 
    )
}