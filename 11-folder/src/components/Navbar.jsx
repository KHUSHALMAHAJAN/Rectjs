import {Link, useNavigate} from "react-router-dom"
function Navbar(){
    let naviget = useNavigate()
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/coursesdetils">Coursesdetils</Link>
            <div>
                <button onClick={function(){
                    naviget(-1)
                }}>back</button>
                <button onClick={function(){
                    naviget(1)
                }}>next</button>
            </div>
        </div>
    )
}
export default Navbar