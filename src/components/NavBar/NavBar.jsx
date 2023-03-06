import "../NavBar/NavBarStyle/NavBar.css"
import logo from "../assets/logo.png"
import { CartWidget } from "./CartWidget/CartWidget";
import {RiSearchEyeLine,RiStoreFill,RiWhatsappLine} from "react-icons/ri"
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
    <div className="headerDiv">
            <div className="searchDiv">
                <ul>
                    <Link to =""><li><RiSearchEyeLine/>Search</li></Link>
                    <Link to={"/stores"}><li><RiStoreFill/>Stores</li></Link>
                    <Link to={"/ContactMe"}><li><RiWhatsappLine/>WhatsApp</li></Link>
                </ul>
            </div>
            <div className="imgLogoDiv">
                <Link to="/"><img className="logo" src={logo} alt="heritage-clothing-store" /></Link>
            </div>

            <div className="itemsDiv">
                <ul>
                    <NavLink className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/women"><li>Women</li></NavLink>
                    <NavLink  className={({ isActive }) => isActive === true ? 'activeClass' : 'inactiveClass'} to="/category/men"><li>Men</li></NavLink> 
                    <Link className="items" to="/"><li>Denim</li></Link>
                    <Link className="items"><li>Discounts</li></Link>
                    <Link className="items"><li>Gift Cards</li></Link>
                </ul>
            </div>
            <div className="cartDiv">
               <Link to="/cart"><li><CartWidget/></li></Link> 
            </div>
        </div>
  );
}
