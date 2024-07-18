import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <nav>
          <Link to="/home" className="link">Home</Link>
          <Link to="/shop" className="link">Shop</Link>
          <Link to="/cart" className="link">Cart</Link>      
        </nav>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }