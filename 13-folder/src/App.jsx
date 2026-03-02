import { useState } from "react"
import Navbar1 from "./components/Navbar1"
function App(){
  const[data, setdata] = useState("ligth")
  return(
    <Navbar1 data={data} setdata = {setdata}>
      <h1>hello world</h1>
      <h1>hello world 2</h1>
    </Navbar1>
  )
}
export default App