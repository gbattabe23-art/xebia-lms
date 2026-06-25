import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}