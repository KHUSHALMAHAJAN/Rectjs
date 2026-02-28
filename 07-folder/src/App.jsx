import axois from 'axios'
import { useState } from 'react'
function App(){
  const[data,setData] = useState([])
  async function click(e){
    e.preventDefault()
    // console.log("hello")
    const response = await axois.get('https://picsum.photos/v2/list')
    console.log(response.data)
    setData(response.data)
  }
  return(
    <>
      <form>
        <button onClick={function(e){
          click(e)
        }}>cliked</button>
      </form>
      {data.map(function(ele,idx){
        return<h1>hello world {idx}</h1>
      })}
    </>
  )
}
export default App