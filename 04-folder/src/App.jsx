import { useState } from "react"

function App(){
  const [title,settitle] = useState("")
  function submit(e){
    e.preventDefault()
    console.log("sumbited",title)
    settitle('')
  }
  function change(e){
    settitle(e)
  }
  return(
    <form onSubmit={function (e) {
      submit(e)
    }}>
      <input type="text" placeholder="Enter your name"  value = {title} onChange={function (e){
        change(e.target.value)
      }}/>
      <button>submit</button>
    </form>
  )
}
export default App