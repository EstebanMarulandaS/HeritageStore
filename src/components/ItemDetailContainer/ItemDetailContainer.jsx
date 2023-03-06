import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //API call
    const getProducts = async () => {
      const queryRef = collection(db, "products");
      const response = await getDocs(queryRef);
      const products = response.docs;

      const results = products.map((element) => {
        return {
          ...element.data(),
          id: element.id,
        };
      });
      
      if(id){
        const foundProduct = results.find((element)=>element.id===id)
        setProducts(foundProduct)
      }
      else{
        setProducts(results)
      }
    };
    getProducts();
  },[id]);

  return (
    <div>
      <ItemDetail item={products} />
    </div>
  );
};
