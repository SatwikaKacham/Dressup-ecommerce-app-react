
import "../signin-page/signin-page.css"
import NavBar from "../../components/nav-component/NavComponent";
import Footer from "../../components/footer-component/FooterComponent"
import { Link } from "react-router-dom";

export default function SigninPage(){
    return(
    <div>
        <NavBar/>
        <main className="signin-container">
        <h1 className="ecommerce-sub-heading"> Signin</h1>
        <form className="input-form">
            <input type="number" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">
                    Phone number</label>
        </form>

        <form className="input-form">
            <input type="text" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">
                    Email</label>
        </form>

        <form className="input-form">
            <input type="text" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">
                    Username</label>
        </form>

        <form className="input-form">
            <input type="password" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">password</label>
        </form>

        <form className="input-form">
            <input type="password" className="input-field" placeholder=" "/>
            <label htmlFor="" className="input-label">Conform password</label>
        </form>
        <button className="button-container primary-button">Signin</button>
        <div className="signin-tag-line">Already have an account?
          <Link to="/LoginPage" className="highlight"> login</Link>
        </div>
    </main>
    <Footer/>
    </div>
    )
}