import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-white text-xl font-semibold"
        >
          My Account
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {open && (
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/">Login</Link>
            <Link to="/Wishlist">Wishlist</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Orders">Orders</Link>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <h2 className="text-white text-xl font-semibold mb-5">
          My Account
        </h2>

        <div className="flex flex-col gap-3">
          <Link to="/" className="hover:text-blue-500 duration-300">
            Login
          </Link>
          <Link to="/Wishlist" className="hover:text-blue-500 duration-300">
            Wishlist
          </Link>
          <Link to="/Cart" className="hover:text-blue-500 duration-300">
            Cart
          </Link>
          <Link to="/Profile" className="hover:text-blue-500 duration-300">
            Profile
          </Link>
          <Link to="/Orders" className="hover:text-blue-500 duration-300">
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;