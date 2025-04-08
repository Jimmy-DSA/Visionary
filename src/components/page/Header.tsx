import { ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide">Visionary</div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-600 text-lg">
        <a
          href="#"
          className="relative hover:text-black transition after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Home
        </a>
        <a
          href="#"
          className="relative hover:text-black transition after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Shop
        </a>
        <a
          href="#"
          className="relative hover:text-black transition after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          About
        </a>
        <a
          href="#"
          className="relative hover:text-black transition after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Contact
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
        <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
      </div>
    </header>
  );
};

export default Header;
