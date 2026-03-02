import { useState } from "react"
import { createContext } from "react"
export const Datacontext = createContext()

function Contextdetils(props){
    // console.log(props)
    const[theme,setTheme] = useState("light")
    return(
        <div>
        <Datacontext.Provider value={[theme,setTheme]}>
            {props.children}

        </Datacontext.Provider > 
        </div>
    )
}
export default Contextdetils