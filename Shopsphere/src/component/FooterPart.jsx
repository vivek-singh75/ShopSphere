import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import QuickLinks from "./footerLinks/QuickLInks";
import CustomerS from "./footerLinks/CustomerS";
import MyAccount from "./footerLinks/myAccount";

const FooterPart = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16 ">
      <div className="max-w-7xl mx-auto px-8 py-14">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Shop<span className="text-blue-500">Sphere</span>
            </h1>

            <p className="mt-5 text-gray-400 leading-7">
              Your one-stop destination for the best quality products at the
              best prices.
            </p>

            <div className="flex gap-5 mt-6 text-2xl">
              <FaFacebook className="hover:text-blue-500 cursor-pointer duration-300" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer duration-300" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer duration-300" />
              <FaYoutube className="hover:text-red-500 cursor-pointer duration-300" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <QuickLinks/>
          </div>

          {/* Column 3 */}
          <div>
            <CustomerS/>
          </div>

          {/* Column 4 */}
          <div>
            <div className="flex flex-col gap-3">
              <MyAccount/>
            </div>
          </div>

          {/* Column 5 */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-5">
              Newsletter
            </h2>

            <p className="text-gray-400 mb-5">
              Subscribe to receive exclusive offers and latest updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-blue-500"
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg py-3 mt-4 text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 ShopSphere. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <p className="hover:text-blue-500 cursor-pointer duration-300">
              Privacy
            </p>

            <p className="hover:text-blue-500 cursor-pointer duration-300">
              Terms
            </p>

            <p className="hover:text-blue-500 cursor-pointer duration-300">
              Cookies
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterPart;