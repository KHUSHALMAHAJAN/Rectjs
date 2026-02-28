import { useEffect } from "react"
import { useState } from "react"

function App(){
  const[a,setA] = useState(0)
  const[b,setB] = useState(0)
  useEffect(function(){
    console.log("use effect runing....")
  },[a,b])
  return<>
    <p>a {a}</p>
    <p>b {b}</p>
    <h1 onClick={function(){
      setA(a+1)
    }}>A click</h1>
    <h1 onClick={function(){
      setB(b+1)
    }}>B click</h1>
  </>
}
export default App