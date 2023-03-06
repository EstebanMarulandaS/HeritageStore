import "../Item/itemStyle.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <div className="cardProduct">
      <Card>
        <Card.Img
          variant="top"
          src={item.picture}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className="cardPrice">{`${item.price} USD`}</Card.Text>
          <Link to={`/item/${item.id}`}><Button variant="primary">See details</Button></Link>
        </Card.Body>
      </Card>
      
    </div>
  );
};
