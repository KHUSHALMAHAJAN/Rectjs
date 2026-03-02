import { useContext, useState } from "react"

export const themedatacontext = useContext()
function Contextdetils(props){
    // console.log(props)
    const[data,setData] = useState("light")
    return(
        <themedatacontext.provider value={[data,setData]}>

            {props.children}
        </themedatacontext.provider>

    )
}
export default Contextdetils