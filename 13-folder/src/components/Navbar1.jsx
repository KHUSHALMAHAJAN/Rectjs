import Navbar2 from "./Navbar2";

function Navbar1(props) {
    console.log(props.children)
  return (
    <div>
      <h1>it first Navbar</h1>
      <div>{props.children}</div>
      <Navbar2 />
    </div>
  );
}
export default Navbar1;
