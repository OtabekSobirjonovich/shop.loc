import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AboutCompany from "./pages/about_company/AboutCompany";
import Delivery from "./pages/delivery/Delivery";
import Contact from "./pages/contact/Contact";
import Reviews from "./pages/reviews/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutCompany" element={<AboutCompany />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}
export default App;
