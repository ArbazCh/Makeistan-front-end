import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./components/product";
import { Cart } from "./components/cart";
import { Checkout } from "./components/checkout";
import Register from "../src/components/forms/register/index"
import Login from "../src/components/forms/login/index";
import Home from "../src/components/pages/home/index"
import Protected from "../src/components/protectedroutes/index";
import ForgetP from "./components/forms/forgetpassword"
import { ProductList } from "./pages/ProductList";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route  path='/Register' element={<Register />}  />
            <Route  path='/login' element={<Login />} />
            
            {/* <Route  path='/' element={<SideDrawer />} /> */}
            <Route  path='/ForgetP' element={<ForgetP />} />
            {/* <Route  path='/Home' element={ <Protected Component = {Home} />}/> */}
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route  path='/' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
