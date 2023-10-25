// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Category from "./pages/Category/Category";
import Header from "./components/Header/Header.jsx"

function App() {
  return (
    <Router>
      <div>
       <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
