import "../ItemCount/ItemCountStyle.css";
import { useState, useContext, useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaShoppingBag } from "react-icons/fa";
import Swal from "sweetalert2";
import { CartContext } from "../../context/cartContext";



export function ItemCount({ onAdd }) {
  const [productCount, setCounter] = useState(1);
  const [goToCart, setGotoCart] = useState(false);
  const {cartProducts} = useContext(CartContext)

  /* local storage */
  useEffect(() => {
    if(cartProducts.length>0){
        localStorage.setItem('products', JSON.stringify(cartProducts));
    } 
    }, [cartProducts])

  if (goToCart === true) {
    return (
      <div>
        <div className="confirmation_div">
          <h6>
            Number of products: <strong>{productCount}</strong>
          </h6>
          <Link to={"/cart"}>
            <button>
              Go to cart
              <FaCartArrowDown className="icon" />
            </button>
          </Link>
          <Link to={"/"}>
            <button>
              Continue shopping
              <FaShoppingBag className="icon" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const removeProduct = () => {
    if (productCount >= 2) {
      setCounter(productCount - 1);
    } else {
      setCounter(1);
    }
  };

  const addProduct = () => {
    setCounter(productCount + 1);
  };

    /* Sweet Alert rendering */
  const sweetAlert = () => {
    
    if ((productCount>0)) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Product added'
        })
    } 
  };

  

  return (
    <div className="mainItemCountDiv">
      <div className="minusSign">
        <button onClick={removeProduct}>{<AiFillMinusCircle />}</button>
      </div>
      <div className="productCount">{productCount}</div>
      <div className="addSign">
        <button onClick={addProduct}>{<AiFillPlusCircle />}</button>
      </div>
      <div className="addToCartBtn">
        <button
          onClick={() => {
            onAdd(productCount);
            setGotoCart(true);
            sweetAlert();   
          }}>
          Add to {<RiShoppingCart2Line />}
        </button>
      </div>
    </div>
  );
}
