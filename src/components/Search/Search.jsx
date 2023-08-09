import React, { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Card } from "react-bootstrap";
import "../Search/SearchStyle.css";
import Swal from "sweetalert2";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [matchingDocuments, setMatchingDocuments] = useState([]);

  const handleSearch = () => {
    if (!inputValue) {
      Swal.fire("Incorrect product name");
      return;
    }

    // Query Firestore collection based on user input
    const queryRef = collection(db, "products");
    const filteredQuery = query(queryRef, where("name", "==", inputValue));

    getDocs(filteredQuery)
      .then((querySnapshot) => {
        const matchingData = querySnapshot.docs.map((doc) => doc.data());
        if (matchingData.length === 0) {
          Swal.fire("No results found");
          return;
        }

        setMatchingDocuments(matchingData); // Update the state with matching data
      })
      .catch((error) => {
        Swal.fire("An error occurred while fetching data");
        console.error(error);
      });
  };

  const renderSearchResults = (matchingDocs) => {
    return (
      <div className="mainCardDiv">
        {matchingDocs.map((result) => (
          <Card key={result.id} className="mb-3">
            <Card.Img variant="top" src={result.picture} />
            <Card.Body>
              <Card.Title>{result.name}</Card.Title>
              <Card.Text>{`${result.price} USD`}</Card.Text>
              <Card.Text>{`On stock: ${result.stock} `}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div onClick={() => setShowInput(true)}>
      <div className="searchItems">
        <input
          type="text"
          placeholder="Look for your product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="button" className="buttonSearch" onClick={handleSearch}>
          Search
        </button>
      </div>

      {showInput &&
        matchingDocuments.length > 0 &&
        renderSearchResults(matchingDocuments)}
    </div>
  );
};
