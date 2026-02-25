import Card from "./components/card"
import {Bookmark, Car} from "lucide-react"

function App(){
  let arr = [10,20,30,40]
  return(
    <>
    {arr.map(function(val){
      return <Card age = {val}/>
      
    })}
    </>
  )
}
export default App