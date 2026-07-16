import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerS = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-white text-xl font-semibold"
        >
          Customer Care
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {open && (
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/">FAQs</Link>
            <Link to="/products">Shipping</Link>
            <Link to="/categories">Returns</Link>
            <Link to="/about">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <h2 className="text-white text-xl font-semibold mb-5">
          Customer Care
        </h2>

        <div className="flex flex-col gap-3">
          <Link to="/" className="hover:text-blue-500 duration-300">
            FAQs
          </Link>
          <Link to="/products" className="hover:text-blue-500 duration-300">
            Shipping
          </Link>
          <Link to="/categories" className="hover:text-blue-500 duration-300">
            Returns
          </Link>
          <Link to="/about" className="hover:text-blue-500 duration-300">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-blue-500 duration-300">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerS;