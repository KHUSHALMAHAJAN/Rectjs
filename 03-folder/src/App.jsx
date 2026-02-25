import { useState } from "react"

function App(){
  const [num,setnum] = useState(10)
  // const [user,setuser]= useState("khushal")
  // const [arr,setarr] = useState([1,2,3,4])
  // const [obj,setobj] = useState({nam:"khushal",age:"29"})
  
  function change(){
    // setuser("kunal")
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    // setnum(num+1)
    
    // setarr([32,45,6])
    // setobj(pev=>({...pev,nam:"kunal"}))
  }
  return (
    <div>
      {/* <h1>User is {user}</h1> */}
      <h2>A number is {num}</h2>
      {/* <h3>arr is {arr}</h3>
      <h4>obj is {obj.nam}</h4> */}
      <button onClick={change}>clicked</button>
    </div>
  )
}
export default App