import { useNavigate } from "react-router-dom"

function About(){
    let naviget = useNavigate()
    return(
        <div>
            <button onClick={function(){
                naviget('/')
            }}>return home</button>
            <h1>About Page</h1>
        </div>
    )
}
export default About