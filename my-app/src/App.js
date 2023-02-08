import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import Register from "../src/components/forms/register/index";
import Login from "../src/components/forms/login/index";
import ForgetP from "./components/forms/forgetpassword";
import Home from "../src/pages/home/index";
import Protected from "../src/routes/route.protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgetP" element={<ForgetP />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Protected />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
