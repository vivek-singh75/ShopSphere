import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-white text-xl font-semibold"
        >
          Quick Links
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {open && (
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <h2 className="text-white text-xl font-semibold mb-5">
          Quick Links
        </h2>

        <div className="flex flex-col gap-3">
          <Link to="/" className="hover:text-blue-500 duration-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500 duration-300">
            Products
          </Link>
          <Link to="/categories" className="hover:text-blue-500 duration-300">
            Categories
          </Link>
          <Link to="/about" className="hover:text-blue-500 duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 duration-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;