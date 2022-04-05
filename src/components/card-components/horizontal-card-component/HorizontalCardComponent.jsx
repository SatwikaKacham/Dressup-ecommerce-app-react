
import CartImg from "../horizontal-card-component/cart-image.png"
import "../horizontal-card-component/horizontal-card-component.css"
export default function HorizontalCardComponent()
{
    return(
        <div className="card-container card-container-horizontal">
                <div className="card-image-and-header card-image-and-header-horizontal">
                    <img className="card-image card-image-horizontal" src={CartImg}/>
                    <header className="card-heading card-heading-horizontal">
                        <div className="card-head"><b>Levis</b></div>
                        <div className="card-discription"> Women Blue Colour blocked Denim Jacket </div>
                        <div className="card-quantity">
                            <label className="card-quantity-label">
                                Qty:
                                <select className="quantity-dropdown-list">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                  </select>
                           </label>
                            <label className="card-quantity-label">
                            Size:
                            <select className="size-dropdown-list" >
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                           </label>


                        </div>

                        <div className="card-price">Rs. 1874 </div>


                        <span className="material-icons-outlined cross-badge">
                            close
                        </span>
                    </header>
                </div>
            </div>
    )
}