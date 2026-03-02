import { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const[theme ,setTheme] = useState("light")
  return (
    <div>
      <h1>them is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}
export default App;
