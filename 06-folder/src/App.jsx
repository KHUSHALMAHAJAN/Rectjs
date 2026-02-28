function App(){
  localStorage.setItem("name","khushal")
  let name = localStorage.getItem("name")
  localStorage.setItem("age","18")
  localStorage.removeItem("age")
  let obj = {
    name:"khushal",
    age:19
  }
  localStorage.setItem("infor",JSON.stringify(obj))
  let information = JSON.parse(localStorage.getItem("infor"))
  console.log(information)
  console.log(name)
  localStorage.clear()
  return(
    <h1>hello world</h1>
  )
}
export default App