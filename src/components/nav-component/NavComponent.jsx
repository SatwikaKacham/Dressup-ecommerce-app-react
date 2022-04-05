import logo from "../../images/dressup-logo.png";
import  "../nav-component/nav-component.css";
import { Link } from "react-router-dom";
function NavComponent(){
    return(
<nav className="nav-container">
        <div className="nav-logo-and-title">
            <a href="/index.html"><img className="nav-logo" src={logo} alt="logo"/></a>
            <Link to="/" className="nav-title">DressUp</Link>
        </div>

        <div className="nav-navigators">
            <Link to="/" className="nav-navigator-item nav-active">Home</Link>
          <Link to="/ProductListingPage" className="nav-navigator-item">Products</Link>

        </div>

        <div className="nav-search">
            <span className="material-icons-outlined">
                  search
              </span>
            <input type="text" placeholder="Search for products...."/>
        </div>

        <ul className="nav-icons">
            <li><span className="material-icons-outlined icon">
                      <Link to="/LoginPage">account_circle</Link>
                       </span>
            </li>

            <li>
                <div className="badge-container">
                    <span className="material-icons-outlined icon">
                        <Link to="/WishlistPage">favorite_border</Link>
                        </span>
                    <div className="icon-badge">5</div>
                </div>
            </li>
            <li>
                <div className="badge-container">
                    <span className="material-icons-outlined icon">
                        <Link to="/CartPage">shopping_cart</Link>
                         </span>
                    <div className="icon-badge">3</div>
                </div>
            </li>
        </ul>
    </nav>
    );
}

export default NavComponent;