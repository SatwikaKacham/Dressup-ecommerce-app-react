
import CardImg from "../vertical-card-component/images/card-image.png"
export default function VerticalCardComponent(){
    return(
    
        <div className="card-container">
        <div className="card-image-and-header">
            <img className="card-image" src={CardImg}/>
            <span className="material-icons-outlined heart-icon-badge">
            favorite_border
            </span>
            <header className="card-heading">
                <div className="card-head"><b>Levis</b></div>
                <div className="card-discription"> Women Pink Printed Sweatshirt </div>
            </header>

        </div>

        <div className="card-price-tag">
            <div className="card-price">Rs. 1874 </div>
            <small className="card-price-note">inclusive of all taxes</small>
        </div>

        <div className="card-buttons">
            <button className="primary-icon-button">  
                <span className="material-icons-outlined"> shopping_cart</span>
                 Add to Cart
                 </button>
        </div>
    </div>
    )
}