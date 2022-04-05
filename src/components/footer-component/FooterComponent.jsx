
import "../footer-component/footer-component.css"
import logo from "../../images/dressup-logo.png"
function Footer(){
    return(
        <footer className="foot">
        <div className="footer-catogories">
            <div className="footer-sideheading">Catogories</div>
            <ul className="footer-sub-catogories">
               <li><a className="footer-sub-item" href="#">Mens</a></li>
               <li><a className="footer-sub-item" href="#">Womens</a></li>
               <li><a className="footer-sub-item" href="#">Kids</a></li>
            </ul>
        </div>
        <div className="footer-catogories">
            <div className="footer-sideheading">QuickLinks</div>
            <ul className="footer-sub-catogories">
               <li><a className="footer-sub-item" href="#">Home Page</a></li>
               <li><a className="footer-sub-item" href="#">Products Page</a></li>
               <li><a className="footer-sub-item" href="#">Cart</a></li>
               <li><a className="footer-sub-item" href="#">Wishlist</a></li>
            </ul>
        </div>
        <div className="footer-catogories">
        <img src={logo} alt="logo" className="logo" />
        <div className="footer-sideheading">Contact:</div>
        <ul className="footer-sub-catogories social-links">
            <li> <a className="footer-sub-item" href="https://www.linkedin.com/in/satwika-kacham-70aa4b200"><i className="fab fa-linkedin-in logo"></i></a></li>
            <li> <a className="footer-sub-item" href="https://github.com/satwikakacham"><i className="fab fa-github logo"></i></a> </li>
            <li> <a className="footer-sub-item" href="https://twitter.com/kachamsatwika"><i className="fab fa-twitter logo"></i></a> </li>
            <li> <a className="footer-sub-item footer-gmail-laptop" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScnbzwRdCSXcClrbZphVslhHrkwwpTSfmwBlpFlVcGXxNCqdSSsWBHJqDnfRNBsMFJkDw" target="_blank"><i className="fas fa-envelope"></i></a> </li>
            <li> <a className="footer-sub-item footer-gmail-phone" href="mailto:satwikakacham@gmail.com"><i className="fas fa-envelope"></i></a> </li>

        </ul>
        </div>
    </footer>
    );
}

export default Footer;