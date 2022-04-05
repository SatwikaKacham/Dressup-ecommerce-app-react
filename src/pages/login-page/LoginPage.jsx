import "../login-page/login-page.css"
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
    <div>
        <NavBar/>
        
            <main className="login-container">
        <h1 className="ecommerce-sub-heading"> Login</h1>
        <form className="input-form">
            <input type="text" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">
                    Username</label>
        </form>

        <form className="input-form">
            <input type="password" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">password</label>
        </form>
        <button className="button-container primary-button">Login</button>
        <div className="login-tag-line">New to DressUP?
        <Link to="/SigninPage" className="highlight">Signin</Link>
        </div>
    </main>
            <Footer/>
               
        </div>

    )
}