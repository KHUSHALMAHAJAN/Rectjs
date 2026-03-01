import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes ,Link} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <a href="/">home</a><br />
      <a href="/about">about</a><br />
      <a href="/contact">contact</a> */}
      <Link to='/'>Home</Link><br />
      <Link to='/about'>About</Link><br />
      <Link to='/contact'>Contact</Link>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
