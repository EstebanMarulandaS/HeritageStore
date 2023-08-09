import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterDesign } from "./components/Footer/Footer";
import { CartProvider } from "./context/cartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { Stores } from "./components/Stores/Stores";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Search } from "./components/Search/Search";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/ContactMe" element={<ContactMe />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
          <footer>
            <FooterDesign />
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
