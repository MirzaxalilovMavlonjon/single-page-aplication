import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Recipt from "./pages/Recipt";

function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Recipt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
