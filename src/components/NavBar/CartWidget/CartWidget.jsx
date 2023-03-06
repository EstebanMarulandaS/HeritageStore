import "./CartStyle/CartStyle.css"
import { Link } from "react-router-dom";
import { useContext} from "react";
import {RiMapPinUserLine,RiShoppingCart2Line} from "react-icons/ri";
import { CartContext } from "../../../context/cartContext";

export const CartWidget = ()=>{
    
    const {getAmountOfItems} = useContext(CartContext); 
    
    
    return(
        <div className="cartDiv">    
             <ul>
                <Link to="/cart"><li>My account<RiMapPinUserLine/></li></Link>
                <Link to="/cart"><li>Cart<RiShoppingCart2Line/><span className="bubble">{getAmountOfItems()}</span></li></Link>
             </ul>       
        </div>
    )
}