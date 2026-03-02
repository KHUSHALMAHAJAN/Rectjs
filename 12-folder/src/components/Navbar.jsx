function Navbar(propes){
    console.log(propes)
    return(
        <button onClick={function(){
            propes.setTheme("drak")
        }}> clike</button>
    )
}
export default Navbar