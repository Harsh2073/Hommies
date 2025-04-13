import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const MFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand & Logo */}
        <div>
          <div className="flex items-center mb-4">       
            <h2 className="text-2xl font-bold text-violet-500 mx-auto">Hommies</h2>
          </div>
          <p className="text-sm text-gray-400">
            Building your dream lifestyle with trusted real estate solutions. From homes to investments, we guide you every step of the way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-violet-400 transition">Home</Link></li>
            <li><Link to="/property" className="hover:text-violet-400 transition">Properties</Link></li>
            <li><Link to="/about" className="hover:text-violet-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-violet-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-violet-400 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-violet-400 transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-violet-400 transition cursor-pointer">Help Center</li>
            <li className="hover:text-violet-400 transition cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive the latest property news, offers & listings.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-amber-50 text-gray-800 focus:outline-none w-full"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Hommies. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-violet-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-violet-500 transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-violet-500 transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-violet-500 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MFooter;
