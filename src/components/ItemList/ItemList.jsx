import "../Item/itemStyle.css"
import {Item} from "../Item/Item"
export const ItemList = ({ items }) => {
  return (
    <div className="productsContainer">
      {items.map((product) => (
       <Item key={product.id} item={product} />
      ))}
    </div>
  );
};
