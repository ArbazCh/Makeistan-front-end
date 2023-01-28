import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./components/product";
import { Cart } from "./components/cart";
import { Checkout } from "./components/checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
