import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <div>
      <div>
        <Link to="/product/men">Men</Link>
        <h1>Product Page</h1>
      </div>
      <Outlet />
    </div>
  );
}
export default Product;
