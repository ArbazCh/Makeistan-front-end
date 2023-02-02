import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import Register from "../src/components/forms/register/index";
import Login from "../src/components/forms/login/index";
import Home from "../src/pages/home/index";
// import Protected from "../src/components/protectedroutes/index";
import ForgetP from "./components/forms/forgetpassword";
import { ProductList } from "../src/pages/ProductList";

// import { ProtectedRoute } from "./routes/route.protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Home />} />
          {/* <Route  path='/' element={<SideDrawer />} /> */}
          <Route path="/ForgetP" element={<ForgetP />} />
          {/* <Route  path='/Home' element={ <Protected Component = {Home} />}/> */}
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
