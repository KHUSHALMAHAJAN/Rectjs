import { useContext } from "react"
import { Datacontext } from "../context/contextdetils"

function Navbar2(){
    const [theme,setTheme] = useContext(Datacontext)
    return(
        <div>
            <div>{theme}</div>
            <button onClick={function(){
                setTheme("drak")
            }}>cliked</button>
            <h1>this is navbar 2</h1>
        </div>
    )
}
export default Navbar2