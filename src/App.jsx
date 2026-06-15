import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./mainLayout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Collection from "./pages/Collection";
import AariClass from "./pages/AariClass";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ALL PAGES INSIDE LAYOUT */}
        <Route element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/AariClass" element={<AariClass />} />
          <Route path="/Contact" element={<Contact />} />
          {/* add more pages */}
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;