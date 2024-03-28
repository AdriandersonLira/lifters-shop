import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Bag } from "./pages/Bag/Bag";
import { NotFound } from "./components/NotFound/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
