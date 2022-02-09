import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import AboutUs from "./routes/about-us";
import Cart from "./routes/cart";
import Collections from "./routes/collections";
import ContactUs from "./routes/contact-us";
import Faq from "./routes/FAQ";
import SignIn from "./routes/sign-in";
import SignUp from "./routes/sign-up";
import './App.css';


function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/collections" element={<Collections/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/FAQ" element={<Faq/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
