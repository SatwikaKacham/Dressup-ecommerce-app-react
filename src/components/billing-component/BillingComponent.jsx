import "../billing-component/billing-component.css"

export default function BillingComponent()
{
    return (
        
        <div className="cart-bill">
            <div className="cart-price-details-head"><b>PRICE DETAILS</b></div>
            <div className="cart-price-details">
                <ul className="cart-details">
                    <li>Price(3 items)</li>
                    <li>Discount</li>
                    <li>Delivery Charges</li>
                </ul>

                <ul className="cart-details-prices">
                    <li>Rs. 5622</li>
                    <li>Rs. 0</li>
                    <li>Rs. 60</li>
                </ul>


            </div>
            <div className="cart-total-amount">
                <div className="cart-total-amount-head"><b>TOTAL AMOUNT</b></div>
                <div><b>Rs. 5682</b></div>
            </div>
            <button className="button-container primary-icon-button cart-checkout-button">   
                 <span className="material-icons-outlined icon checkout-icon"> shopping_cart_checkout</span>
                  Check Out
            </button>


        </div>
    )
}