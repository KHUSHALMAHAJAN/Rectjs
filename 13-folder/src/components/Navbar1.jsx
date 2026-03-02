import Navbar2 from "./Navbar2";

function Navbar1({children}) {
    // console.log(props)
  return (
    <div>
      <h1>it first Navbar</h1>
      <div>{children}</div>
      <Navbar2 />
    </div>
  );
}
export default Navbar1;
