import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/product";
import Navbar from "./components/Navbar";
import Notfount from "./pages/Notfount";
import Men from "./pages/men";
import Courses from "./pages/courses";
import Coursesdetils from "./pages/coursesdetils";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
        </Route>
        <Route path="/courses" element={<Courses />}/>
        {/* <Route path="/coursesdetils" element={<Coursesdetils />}/> */}
        <Route path="*" element={<Notfount/>} />
        <Route path="/courses/:id" element={<Coursesdetils/>} />
      </Routes>
    </div>
  );
}
export default App;
