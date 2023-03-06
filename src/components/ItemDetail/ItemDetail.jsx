import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../context/cartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetailStyle.css";

export const ItemDetail = ({item}) => {
  const {addProduct} = useContext(CartContext);
  
  const addToCart = (quantity) => { 
    addProduct(item,quantity)
  }


  return(
        <div className="mainDivContainer">
      <Card className="cardProduct">
        <Card.Img
          variant="top"
          src={item.picture}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{`${item.price} USD`}</Card.Text>
          <Card.Text>{`On stock: ${item.stock} `}</Card.Text>
          <ItemCount onAdd = {addToCart}/>

        </Card.Body>
      </Card>
  
    </div>
    )
}