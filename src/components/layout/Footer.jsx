import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      {/* Upper section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Productify</h3>
          <p className="text-gray-500 text-sm">
            Your one-stop shop for amazing products. Quality and reliability
            delivered.
          </p>
          <div className="flex mt-4 space-x-4 text-gray-700">
            <a
              href="#"
              className="hover:text-indigo-600 transition transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition transform hover:scale-110"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-indigo-600 transition transform hover:scale-110"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support / Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/faq"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                Shipping & Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Stay Updated
          </h4>
          <p className="text-gray-500 text-sm mb-4">
            Subscribe to our newsletter for latest updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t bg-gray-100">
        <div className="container mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Productify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
