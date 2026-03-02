import { useContext, useState } from "react";
import Navbar1 from "./components/Navbar1";
// import Contextdetils, { themedatacontext } from "./context/contextdetails";
function App() {
  // const[{data,setData}] = useContext(themedatacontext)
  return (
    <div>
      <Navbar1>
        <h1>hello world</h1>
        <h1>hello world 2</h1>
      </Navbar1>
      <Contextdetils />
      {/* <h1>{data}</h1> */}
    </div>
  );
}
export default App;
