import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainerStyle.css";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
 
  useEffect(()=>{
    const getData = async()=>{
      //crear referencia del punto de acceso de la info
      const queryRef = collection(db, "products");
      //obtener todos los docs de la ref products
      const response =  await getDocs(queryRef);
      const documents = response.docs

      const results = documents.map((element)=>{
        return({
          ...element.data(),
          id: element.id
        })
      })
      if (categoryId) {
        const filteredCategory = results.filter(
          (ele) => ele.category === categoryId
        );
        setProducts(filteredCategory);
        setLoading(false);
      } else {
        setProducts(results);
        setLoading(false);
      }
    }
    getData();
  },[categoryId])
  return (
    <div className="mainItemsDiv">
      {loading ? (
        <div>
           <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
};
